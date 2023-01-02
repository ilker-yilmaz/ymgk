from django.urls import path
from . import views

urlpatterns = [
    path("", views.giris, name="giris"),
    path("kayit_ol", views.kayit, name="kayitlar"),
    path("cikis_yap", views.cikis, name="cikislar")
]