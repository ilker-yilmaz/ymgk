from django import forms
from .models import Resimler

class ImageForm(forms.ModelForm):
    class Meta:
        model = Resimler
        fields = ['image', 'title']
        