from django.db import models

# Create your models here.

class Resimler(models.Model):
    image = models.ImageField(upload_to="marble")

