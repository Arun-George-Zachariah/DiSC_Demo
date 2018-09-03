from django.shortcuts import render
from django.http import HttpResponse
from .forms import ConfigForm
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
			families = form.cleaned_data['families']
			
			print("n :: ",n , ":: l ::",l ," :: k :: ", k ,":: families :: " ,families)

			#Script to be executed : create-config.sh
			subprocess.call(shlex.split('./ShellScripts/test.sh -n ' + str(n) + ' -l ' + str(l) + ' -k ' + str(k) + ' -f ' + families))

	form = ConfigForm()
	return render(request, '../templates/configForm.html', {'form':form})