from django.urls import path
from . import views

urlpatterns = [
    path("", views.anasayfa, name="anasayfa"),
    # path('upload/', views.upload_image, name='upload'),
    # path('result/', views.upload_image, name='result'),

]