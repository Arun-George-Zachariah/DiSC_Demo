from django import forms

class ConfigForm(forms.Form):
	n = forms.IntegerField(label='N (No. of Nodes)', widget=forms.TextInput(attrs={'class': 'form-control'}))
	l = forms.IntegerField(label='L (LSH Parameter)', widget=forms.TextInput(attrs={'class': 'form-control'}))
	k = forms.IntegerField(label='K (LSH Parameter)', widget=forms.TextInput(attrs={'class': 'form-control'}))
	r = forms.IntegerField(label='R (Accuracy Tuning Parameter)', widget=forms.TextInput(attrs={'class': 'form-control'}))
