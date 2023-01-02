from django.shortcuts import render, redirect
from django.http.response import HttpResponse
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
# Create your views here.

def giris(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        if username == "" and password == "":
            return render(request, "hesap/giris.html", {"error" : "Form Boş Bırakılamaz!"})

        user = authenticate(request, username=username, password = password)

        if user is not None:
            login(request, user)
            return redirect("anasayfa")

        else:
            return render(request, "hesap/giris.html", {"error":"Kullanıcı Adı veya Parola Yanlış"})

    return render(request, "hesap/giris.html")

def kayit(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        firstname = request.POST["firstname"]
        lastname = request.POST["lastname"]
        password = request.POST["password"]
        repassword = request.POST["repassword"]

        if password == "" and repassword == "" and username == "" and email == "" and firstname == "" and lastname == "":
            return render(request, "hesap/kayit.html", {"error" : "Form Boş Bırakılamaz!"})  

        if password == repassword:
            if User.objects.filter(username = username).exists():
                return render(request, "hesap/kayit.html", {"error" : "Bu kullanıcı adı kullanılmaktadır", "email" : email, "username" : username, "firstname" : firstname, "lastname" : lastname})
            
            else:
                if User.objects.filter(email = email).exists():
                    return render(request, "hesap/kayit.html", {"error" : "Bu email kullanılmaktadır.", "username" : username, "email" : email, "firstname" : firstname, "lastname" : lastname})

                else:
                    user = User.objects.create_user(username=username, password=password, email=email, first_name=firstname, last_name=lastname)
                    user.save()
                    return redirect("giris")

        else:
            return render(request, "hesap/kayit.html", {"error" : "Şifreler Eşleşmiyor", "username" : username, "email" : email, "firstname" : firstname, "lastname" : lastname})

    return render(request, "hesap/kayit.html")

def cikis(request):
    logout(request)
    return redirect("giris")
