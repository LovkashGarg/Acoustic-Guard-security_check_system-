from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
# Load the trained model and scaler
model = joblib.load('model_audio_classification.pkl')

def features_extractor(file_name):
   audio_data, sample_rate = librosa.load(file_name)
   mfccs_features = librosa.feature.mfcc(y=audio_data, sr=sample_rate, n_mfcc=40)
   mfccs_scaled_features = np.mean(mfccs_features.T,axis=0)
   return mfccs_scaled_features

@app.route('/', methods=['POST'])
def predict():
   print("prediction")