from django import forms

class ConfigForm(forms.Form):
	n = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control'}))
	l = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control'}))
	k = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control'}))
	families = forms.CharField(max_length = 100, widget=forms.TextInput(attrs={'class': 'form-control'}))
