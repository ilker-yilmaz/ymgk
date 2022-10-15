import cv2
import numpy as np
import matplotlib.pyplot as plt
import random as rnd
import statistics

img_path = "images/mermer-elazig-visne.jpg"

img = cv2.imread(img_path)
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
randomize = img.shape[0] * img.shape[1]
print(int(randomize * 0.08))
renk = []
# resim yüzde 8 i kadar random piksel seçiyoruz

for i in range(int(randomize * 0.08)):
    x = rnd.randint(0, img.shape[0] - 1)
    y = rnd.randint(0, img.shape[1] - 1)
    renk.append(img[x][y])

# Seçili random piksellerin r g b renk kodlarını başka diziye aktarıyoruz
r = []
g = []
b = []
# Ortalama bir renk kodu elde etmek için ayrıştıracağımız [r,g,b] kodlarının ortalamasını alarak renk elde ediyoruz
for a in range(len(renk)):
    r.append(renk[a][0])
    g.append(renk[a][1])
    b.append(renk[a][2])
# Elde edilen listenin ortalaması alınıyor
print("Örneğimizin rgb kodu : ", int(statistics.mean(r)), int(statistics.mean(g)), int(statistics.mean(b)))

# Renk kodlarını kullanarak renk ismini buluyoruz
import pandas as pd

index = ["color", "color_name", "hex", "R", "G", "B"]
csv = pd.read_csv('datasets/colors.csv', names=index, header=None)


def getColorName(R, G, B):
    minimum = 10000
    for i in range(len(csv)):
        d = abs(R - int(csv.loc[i, "R"])) + abs(G - int(csv.loc[i, "G"])) + abs(B - int(csv.loc[i, "B"]))
        if d <= minimum:
            minimum = d
            cname = csv.loc[i, "color_name"]
    return cname


print("Örneğimizin renk ismi : ",
      getColorName(int(statistics.mean(r)), int(statistics.mean(g)), int(statistics.mean(b))))

plt.imshow(img)
plt.show()
