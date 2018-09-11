from django import forms

EXP_CHOICES=[
('higgs','HIGGS Dataset'),
('syn', 'Synthetic Dataset'),
('twtr', 'Twitter Dataset'),
]

class ConfigForm(forms.Form):
	n = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control'}))
	l = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control'}))
	k = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control'}))
	r = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control'}))
	dataset = forms.CharField(widget=forms.Select(choices=EXP_CHOICES, attrs={'class': 'form-control'}), label = "Dataset :")
