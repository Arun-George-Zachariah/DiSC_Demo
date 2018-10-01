from django.shortcuts import render
from django.http import JsonResponse
import shlex
import subprocess
import sys

# Create your views here.
def viewPlots(request) :
	print("Entering the request to print plots.")

	try:
		output = subprocess.check_output(shlex.split("ssh arung@ms1020.utah.cloudlab.us 'jps | grep jar'"))
		print(output)
		if not (output is None):
			print("Gossip is in progress")
			data = {'inProgress': 'true'}
			return JsonResponse(data)
	except:
		print("No Existing Gossip Process Found", sys.exc_info()[0])
		return render(request, '../templates/plots.html', {})
