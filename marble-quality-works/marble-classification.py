import numpy as np
import cv2
import tensorflow as tf

img = cv2.imread("marble-quality/marble-test/AageanRose/_18_6151805.jpg")

img = cv2.resize(img, (224,224))

img = np.array(img, dtype="float32")
img = np.reshape(img, (1,224,224,3))
interpreter = tf.lite.Interpreter("model.tflite")
interpreter.allocate_tensors()
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

input_shape = input_details[0]['shape']
interpreter.set_tensor(input_details[0]['index'], img)
interpreter.invoke()

output_data = interpreter.get_tensor(output_details[0]['index'])
output_probs = tf.math.softmax(output_data)
pred_label = tf.math.argmax(output_probs)

predictions = output_probs
label = pred_label
print(predictions)
print(label)