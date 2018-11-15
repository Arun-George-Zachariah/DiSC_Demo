from django import forms

EXP_CHOICES=[
('Alog1','Alog1'),
('Algo2', 'Algo2'),
]

class ConfigForm(forms.Form):
	n = forms.IntegerField(label='N (No. of Nodes)', widget=forms.TextInput(attrs={'class': 'form-control'}))
	l = forms.IntegerField(label='L (LSH Parameter)', widget=forms.TextInput(attrs={'class': 'form-control'}))
	k = forms.IntegerField(label='K (LSH Parameter)', widget=forms.TextInput(attrs={'class': 'form-control'}))
	r = forms.IntegerField(label='r (Accuracy Tuning Parameter)', widget=forms.TextInput(attrs={'class': 'form-control'}))
	scoringFunc = forms.CharField(widget=forms.Select(choices=EXP_CHOICES, attrs={'class': 'form-control'}), label = "Scoring Function :")
