from django.shortcuts import render
from .forms import ImageForm
from .classification_marble import predict

def anasayfa(request):
    return render(request, "marble/anasayfa.html")

# def display_prediction(request, prediction):
#     return render(request, 'result.html', {'prediction': prediction})

def upload_image(request):
    if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            image = form.cleaned_data['image']
            prediction = predict(image)
            return render(request, 'marble/anasayfa.html', {'prediction': prediction})
    else:
        form = ImageForm()
    return render(request, 'marble/anasayfa.html', {'form': form})