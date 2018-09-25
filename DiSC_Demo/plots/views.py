from django.shortcuts import render

# Create your views here.
def viewPlots(request) :
	return render(request, '../templates/plots.html', {})
