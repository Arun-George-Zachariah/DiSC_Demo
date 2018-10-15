from django import forms

EXP_CHOICES=[
('HIGGS_Dataset','HIGGS_Dataset'),
('Synthetic_Dataset', 'Synthetic_Dataset'),
('Twitter_Dataset', 'Twitter_Dataset'),
]

class ConfigForm(forms.Form):
	n = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'input100'}))
	l = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'input100'}))
	k = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'input100'}))
	r = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'input100'}))
	dataset = forms.CharField(widget=forms.Select(choices=EXP_CHOICES, attrs={'class': 'input100'}), label = "Dataset :")
