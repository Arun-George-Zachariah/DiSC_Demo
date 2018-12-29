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

def enterConfig(request) :

		if request.method == 'POST' :
			form = ConfigForm(request.POST, request.FILES)
			print("form.is_valid() :: ", form.is_valid())
			if form.is_valid() :
				n = form.cleaned_data['n']
				l = form.cleaned_data['l']
				k = form.cleaned_data['k']
				r = form.cleaned_data['r']
				delayConst = form.cleaned_data['delayConst']
				dataset = request.POST.get("select1", "")
				reqFam = request.POST.get("select2", "")
				family = reqFam.replace("|",",")
				handleUploadedFile(request.FILES['familiesFile'])

				nodeRes = str(subprocess.getstatusoutput("ssh arung@hp187.utah.cloudlab.us	 'python /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/getNodeResp.py " + family + "'")).replace('(','').replace(')','').split(',')[1].replace('\'','')
				print('Node Resp :: raw data ::' + nodeRes + "::")

				node = -1
				if nodeRes == ' Node_1-0_gspfams' :
					node = 1
				elif nodeRes == ' Node_2-0_gspfams' :
					node = 2
				elif nodeRes == ' Node_3-0_gspfams' :
					print("Setting 3")
					node = 3
				elif nodeRes == ' Node_4-0_gspfams' :
					node = 4
				elif nodeRes == ' Node_5-0_gspfams' :
					node = 5
				elif nodeRes == ' Node_6-0_gspfams' :
					node = 6
				elif nodeRes == ' Node_7-0_gspfams' :
					node = 7
				elif nodeRes == ' Node_8-0_gspfams' :
					node = 8
				elif nodeRes == ' Node_9-0_gspfams' :
					node = 9
				elif nodeRes == ' Node_10-0_gspfams' :
					node = 10
				elif nodeRes == ' Node_11-0_gspfams' :
					node = 11
				elif nodeRes == ' Node_12-0_gspfams' :
					node = 12
				elif nodeRes == ' Node_13-0_gspfams' :
					node = 13
				elif nodeRes == ' Node_14-0_gspfams' :
					node = 14
				elif nodeRes == ' Node_15-0_gspfams' :
					node = 15
				elif nodeRes == ' Node_16-0_gspfams' :
					node = 16

				if dataset == 'Higgs' :
					logFile = "/users/arung/higgs.r" + str(r) + ".k" + str(k) + ".txt"
					#Stopping an existing gossip process
					subprocess.call(shlex.split("ssh arung@hp187.utah.cloudlab.us 'bash /users/arung/stopHiggsGossip.sh " + str(n-1) + "'"))
					#Transfer the families file to the nodes
					subprocess.call(shlex.split("scp families.txt arung@hp187.utah.cloudlab.us:/dev/data/HIGGS-families.txt"))
					subprocess.call(shlex.split("ssh arung@hp187.utah.cloudlab.us 'bash /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/transferFamilies.sh HIGGS-families.txt 15'"))
					#Initializing the Streaming process.
					subprocess.call(shlex.split("ssh arung@hp187.utah.cloudlab.us	 'cd /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/higgs && bash startStreaming.sh " + str(n-1) + " " + family + " " + logFile + " /users/arung/higgsTrueCounts " + str(r) + " " + str(k) + "'"))
					#Starting the gossip process
					_thread.start_new_thread(executeShell , ("ssh arung@hp187.utah.cloudlab.us	 'cd /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/higgs && bash runDemo.higgs.sh " + str(n) + " " + str(k) + " " + str(l) + " " + str(r) + " " + family +"'",))
				elif dataset == 'Synthetic_Dataset' :
					_thread.start_new_thread(executeShell , ("ssh arung@ms1040.utah.cloudlab.us 'cd /users/arung/DiSC_SRC/scripts/general/ && bash runDemo.syn.sh " + str(n) + " " + str(k) + " " + str(l) + " " + str(r) + "'",))
				elif dataset == 'Twitter' :
					logFile = "/users/arung/twtr.r" + str(r) + ".k" + str(k) + ".txt"
					subprocess.call(shlex.split("ssh arung@hp187.utah.cloudlab.us	 'bash /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/twtr/stopTwtrGossip.sh " + str(n-1) + "'"))
					subprocess.call(shlex.split("scp families.txt arung@hp187.utah.cloudlab.us:/dev/data/twtr-families.txt"))
					subprocess.call(shlex.split("ssh arung@hp187.utah.cloudlab.us 'bash /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/transferFamilies.sh twtr-families.txt 15'"))
					subprocess.call(shlex.split("ssh arung@hp187.utah.cloudlab.us	 'cd /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/twtr && bash startStreaming.sh " + str(n-1) + " " + family + " " + logFile + " /users/arung/twtrTrueCounts " + str(r) + " " + str(k) + "'"))
					family = "af,en,en-CA,tl"
					_thread.start_new_thread(executeShell , ("ssh arung@hp187.utah.cloudlab.us	 'cd /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/twtr && bash runDemo.twtr.sh " + str(n) + " " + str(k) + " " + str(l) + " " + str(r) + " " + family +"'",))

				f = open("form.json", "w")
				f.write("{\"n\":" + str(n) + ",\"l\":" + str(l) + ",\"k\":" + str(k) + ",\"r\":" + str(r) + ",\"dataset\":\"" + dataset + "\",\"family\":\"" + reqFam + "\",\"nodeResp\":\"" + str(node) + "\",\"delayConst\":\"" + str(delayConst) + "\",\"familyFile\":\"" + str(request.FILES['familiesFile']) +"\"}")
				return render(request, '../templates/data.html', {'n': n,'l': l,'k': k,'r': r,'dataset': dataset,'family': reqFam,'nodeResp': node, 'delayConst': delayConst,'familyFile': request.FILES['familiesFile']})

		form = ConfigForm()
		messages.success(request, 'Form submission successful')
		return render(request, '../templates/config.html', {'form':form})

def executeShell(command) :
	print("Excecuting shell")
	subprocess.call(shlex.split(command))

def viewPlots(request) :
	print("Entering the request to print plots.")
	if request.GET["redirect"] == 'true' :
		print("Redirecting to the Summary Tab")
		f = open("form.json", "r")
		data = json.load(f)
		return render(request, '../templates/plots.html', {'n':data["n"],'l':data["l"],'k':data["k"],'r':data["r"],'dataset':data["dataset"],'family':data["family"], 'nodeResp':data["nodeResp"], 'delayConst':data["delayConst"], 'familyFile':data["familyFile"]})

	try:
		output = subprocess.check_output(shlex.split("ssh arung@hp187.utah.cloudlab.us	 'jps | grep jar'"))
		print(output)
		if not (output is None):
			print("Gossip is in progress")
			data = {'inProgress': 'true'}
			return JsonResponse(data)
	except:
		print("No Existing Gossip Process Found", sys.exc_info()[0])
		f = open("form.json", "r")
		data = json.load(f)
		print(data["n"])
		subprocess.check_output(shlex.split("ssh arung@hp187.utah.cloudlab.us	 'bash /users/arung/DiSC_SRC/scripts/general/DemoExecScripts/startService.sh " + str(data["n"] - 1) + "'"))
		print("Return render")
		return render(request, '../templates/plots.html', {'n':data["n"],'l':data["l"],'k':data["k"],'r':data["r"],'dataset':data["dataset"],'family':data["family"], 'nodeResp':data["nodeResp"], 'delayConst':data["delayConst"], 'familyFile':data["familyFile"]})

def handleUploadedFile(f) :
	print("Entering handleUploadedFile")
	with open('families.txt', 'wb+') as dest :
		for chunk in f.chunks() :
			dest.write(chunk)
