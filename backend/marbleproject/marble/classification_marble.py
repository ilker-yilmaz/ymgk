import pickle
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np


def predict(image):
    model_path = 'static/yeni-tur_model.tflite'
    with open(model_path, 'rb') as f:
        model = pickle.load(f)

    img = load_img(image, target_size = (224, 224,3))
    img = img_to_array(img)
    img = np.expand_dims(img, axis = 0)

    # Seçilen dosyayı modelle eşleştirin ve tahminlerinizi hesaplayın
    prediction = model.predict(img)
    return prediction
