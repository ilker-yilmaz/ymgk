from django.db import models
from django.conf import settings
from PIL import Image
from keras.utils import img_to_array
from keras.preprocessing import image
from tensorflow.python import ops
from keras.models import load_model
import os
import numpy as np
import tensorflow as tf

class Resimler(models.Model):
    image = models.ImageField(upload_to='media/')
    title = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        get_latest_by = 'created_at'

    def save(self, *args, **kwargs):
        img = Image.open(self.image)
        test_img = img.resize((224,224))
        test_img = img_to_array(test_img)
        test_img = np.expand_dims(test_img, axis = 0)

        classes_tur = ["AageanRose", "AfyonBal", "AfyonBeyaz", "AfyonBlack", "AfyonGrey", "AfyonSeker", "Bejmermer", "Blue", "Capuchino", "Diyabaz", "DolceVita", "EkvatorPijama", "ElazigVisne", "GoldGalaxy", "GulKurusu", "KaplanPostu", "Karacabeysiyah", "Konglomera", "KristalEmprador", "Leylakmermer", "MediBlack", "OliviaMarble", "Oniks", "RainGrey", "Traverten"]


        try:
            file_model = os.path.join(settings.BASE_DIR, "yeni-tur_model.h5")
            graph = tf.compat.v1.get_default_graph()

            with graph.as_default():
                model = load_model(file_model)
                pred = np.argmax(model.predict(test_img))
                self.title = str(classes_tur[pred])

        except:
            self.title = "sınıflandırma başarısız"

        return super().save(*args, **kwargs)

        

        
    


