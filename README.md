# Acoustic-Guard 📢🔒

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/python-3.8%2B-blue)](https://www.python.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange)](https://www.tensorflow.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)


A real‑time, AI‑powered security system that classifies ambient sounds (e.g. dog barks, alarms, glass breaks) to detect potential threats and alert users via a web interface.

---

## 🚀 Features

- **Audio Feature Extraction**: Uses MFCC, Chroma, and Mel-spectrogram features.  
- **Deep CNN Classifier**: Convolutional network trained on UrbanSound8K and custom samples.  
- **Real‑time Inference**: Listens through microphone, classifies sounds live.  
- **Web Dashboard**: Displays live audio stream, predicted class, and confidence.  
- **Alert System**: Triggers visual & audio alerts on detecting critical sounds.

---

## 🎬 Demo

<p float="left">
  <img src="images/ui_screenshot.png" width="48%" alt="Web App UI">
  <img src="images/waveform_plot.png" width="48%" alt="Real‑time Waveform">
</p>

1. **Web Dashboard**:  
   <img src="images/ui_screenshot.png" alt="Dashboard screenshot" width="600px">

2. **Audio Visualization**:  
   <img src="images/waveform_plot.png" alt="Live waveform" width="600px">

---

## 🏗️ Architecture

```text
┌─────────┐      ┌────────────┐       ┌──────────────┐
│ Browser │◀────▶│ Flask API  │◀──────│  CNN Model   │
│ (React) │      │ (app.py)   │       │ (TF Serving) │
└─────────┘      └────────────┘       └──────────────┘
     ▲                ▲                     ▲
     │                │ extract features    │
     │   microphone   │────────────────────▶│
     │──────────────▶ │                     │
````

<img src="images/architecture_diagram.png" alt="System Architecture" width="80%">

---

## 📦 Project Structure

```
├── app.py
├── react_model/           # React frontend (create‑react‑app)
├── model_audio_classification.pkl
├── extracted_features.pkl
├── saved_models/          # Trained TF/Keras checkpoints
├── Sound Classification.ipynb
├── Urban_Sound_Classification_Using_Convolu.pdf
├── images/                # Put all screenshots & diagrams here
└── requirements.txt
```

---

## ⚙️ Installation

1. **Clone** this repo

   ```bash
   git clone https://github.com/LovkashGarg/Acoustic-Guard-security_check_system-.git
   cd Acoustic-Guard-security_check_system-
   ```

2. **Create & activate** a virtual env

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install** dependencies

   ```bash
   pip install -r requirements.txt
   ```

4. **Run** the Flask server

   ```bash
   python app.py
   ```

5. **Start** the React frontend

   ```bash
   cd react_model
   npm install
   npm start
   ```

---

## 🧠 Usage

* Open your browser at `http://localhost:3000`
* Allow mic access when prompted.
* Speak or play sounds; the dashboard will classify in real time.
* Critical alerts (e.g., “glass\_break”, “alarm”) will flash in red.

---

## 🔨 Training Your Own Model

1. **Prepare** your `.wav` dataset in `/data/{class_name}/`
2. **Extract features**

   ```bash
   python extract_features.py --data_dir data/ --output extracted_features.pkl
   ```
3. **Train**

   ```bash
   python train_model.py --features extracted_features.pkl --epochs 50
   ```
4. **Save** your best weights to `saved_models/`

---

## 📚 References

* Piczak, K. J. “Environmental Sound Classification with Convolutional Neural Networks,” 2015.
* UrbanSound8K dataset: [https://urbansounddataset.weebly.com/](https://urbansounddataset.weebly.com/)

---

## 🤝 Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/foo`)
3. Commit your changes (`git commit -am 'Add foo'`)
4. Push to the branch (`git push origin feature/foo`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

> Crafted with ❤️ by Lovkash Garg
> ✉️ [Contact Me](mailto:lovkashgarg@gmail.com)

```


