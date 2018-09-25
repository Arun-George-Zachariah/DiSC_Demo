from django.shortcuts import render

# Create your views here.
def viewData(request) :
	return render(request, '../templates/data.html', {})
