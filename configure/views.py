from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import ConfigForm
import _thread
import subprocess
import shlex

# Create your views here.
def enterConfig(request) :
	if request.method == 'POST' :
		form = ConfigForm(request.POST)
		if form.is_valid() :
			n = form.cleaned_data['n']
			l = form.cleaned_data['l']
			k = form.cleaned_data['k']
			r = form.cleaned_data['r']
			dataset = form.cleaned_data['dataset']

			if dataset == 'higgs' :
				print("Executing Higgs")
				_thread.start_new_thread(executeShell , ("ssh arung@ms1040.utah.cloudlab.us 'cd /users/arung/DiSC_SRC/scripts/general/ && bash runDemo.higgs.sh " + str(n) + " " + str(k) + " " + str(l) + " " + str(r) + "'",))
			elif dataset == 'syn' :
				_thread.start_new_thread(executeShell , ("ssh arung@ms1040.utah.cloudlab.us 'cd /users/arung/DiSC_SRC/scripts/general/ && bash runDemo.syn.sh " + str(n) + " " + str(k) + " " + str(l) + " " + str(r) + "'",))
			elif dataset == 'twtr' :
				_thread.start_new_thread(executeShell , ("ssh arung@ms1040.utah.cloudlab.us 'cd /users/arung/DiSC_SRC/scripts/general/ && bash runDemo.twtr.sh " + str(n) + " " + str(k) + " " + str(l) + " " + str(r) + "'",))

			print("Redirecting")
			return HttpResponseRedirect('/disc/data')

	form = ConfigForm()
	return render(request, '../templates/config.html', {'form':form})

def executeShell(command) :
	print("Excecuting shell")
	subprocess.call(shlex.split(command))
