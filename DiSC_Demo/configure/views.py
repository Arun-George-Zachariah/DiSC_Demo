from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import ConfigForm
from django.http import JsonResponse
from django.contrib import messages
import _thread
import subprocess
import shlex
import sys
import json

# Create your views here.
def enterConfig(request) :

		#Check for any existing gossip process running.
		try:
			output = subprocess.check_output(shlex.split("ssh arung@hp142.utah.cloudlab.us 'ps -xww | grep \'[g]ossip\''"))
			print("Output ::", output)
			if not (output is None):
				return render(request, '../templates/error.html')
		except:
			print("No Existing Gossip Process Found")

		if request.method == 'POST' :
			form = ConfigForm(request.POST)
			if form.is_valid() :
				n = form.cleaned_data['n']
				l = form.cleaned_data['l']
				k = form.cleaned_data['k']
				r = form.cleaned_data['r']
				#dataset = form.cleaned_data['dataset']
				dataset = request.POST.get("select1", "")
				reqFam = request.POST.get("select2", "")
				print("Old :: " + reqFam)
				family = reqFam.replace("|",",")
				print("Dataset :: ", dataset)
				print("Family :: ", family)

				#Hardcoded family. Needs to be in a dropdown
				#family = "jet_4_eta,jet_2_b-tag,jet_2_phi"

				if dataset == 'Higgs' :
					logFile = "/users/arung/higgs.r" + str(r) + ".k" + str(k) + ".txt"
					#Stopping an existing gossip process
					subprocess.call(shlex.split("ssh arung@hp142.utah.cloudlab.us 'bash /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/higgs/stopHiggsGossip.sh " + str(n-1) + "'"))
					#Initializing the Streaming process.
					subprocess.call(shlex.split("ssh arung@hp142.utah.cloudlab.us 'cd /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/higgs && bash startStreaming.sh " + str(n-1) + " " + family + " " + logFile + " /users/arung/higgsTrueCounts.txt'"))
					#Starting the gossip process
					_thread.start_new_thread(executeShell , ("ssh arung@hp142.utah.cloudlab.us 'cd /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/higgs && bash runDemo.higgs.sh " + str(n) + " " + str(k) + " " + str(l) + " " + str(r) + " " + family +"'",))
				elif dataset == 'Synthetic_Dataset' :
					_thread.start_new_thread(executeShell , ("ssh arung@ms1040.utah.cloudlab.us 'cd /users/arung/DiSC_SRC/scripts/general/ && bash runDemo.syn.sh " + str(n) + " " + str(k) + " " + str(l) + " " + str(r) + "'",))
				elif dataset == 'Twitter' :
					logFile = "/users/arung/higgs.r" + str(r) + ".k" + str(k) + ".txt"
					subprocess.call(shlex.split("ssh arung@hp142.utah.cloudlab.us 'bash stopHiggsGossip.sh " + str(n-1) + "'"))
					subprocess.call(shlex.split("ssh arung@hp142.utah.cloudlab.us 'cd /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/twtr && bash startStreaming.sh " + str(n-1) + " " + family + " " + logFile + " /users/arung/higgsTrueCounts.txt'"))
					_thread.start_new_thread(executeShell , ("ssh arung@hp142.utah.cloudlab.us 'cd /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/twtr && bash runDemo.twtr.sh " + str(n) + " " + str(k) + " " + str(l) + " " + str(r) + "'",))

				f = open("form.json", "w")
				f.write("{\"N\":"+str(n)+",\"L\":"+str(l)+",\"K\":"+str(k)+",\"R\":"+str(r)+",\"Dataset\":\""+dataset+"\",\"Family\":\""+reqFam+"\"}")
				return render(request, '../templates/data.html', {'N':n,'L':l,'K':k,'R':r,'Dataset':dataset,'Family':reqFam})

		form = ConfigForm()
		messages.success(request, 'Form submission successful')
		return render(request, '../templates/config.html', {'form':form})

def executeShell(command) :
	print("Excecuting shell")
	subprocess.call(shlex.split(command))

# Create your views here.
def viewPlots(request) :
	print("Entering the request to print plots.")
	try:
		output = subprocess.check_output(shlex.split("ssh arung@hp142.utah.cloudlab.us 'jps | grep jar'"))
		print(output)
		if not (output is None):
			print("Gossip is in progress")
			data = {'inProgress': 'true'}
			return JsonResponse(data)
	except:
		print("No Existing Gossip Process Found", sys.exc_info()[0])
		f = open("form.json", "r")
		data = json.load(f)
		print(data["N"])
		subprocess.check_output(shlex.split("ssh arung@hp142.utah.cloudlab.us 'bash /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/startService.sh " + str(data["N"]) + "'"))
		retData = {'inProgress': 'false'}
		return JsonResponse(retData)
		#return render(request, '../templates/plots.html', {'N':data["N"],'L':data["L"],'K':data["K"],'R':data["R"],'Dataset':data["Dataset"],'Family':data["Family"]})
