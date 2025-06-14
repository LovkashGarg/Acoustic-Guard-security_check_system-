# Acoustic-Guard 📢🔒

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/python-3.8%2B-blue)](https://www.python.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange)](https://www.tensorflow.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)


A real‑time, AI‑powered security system that classifies ambient sounds (e.g. dog barks, alarms, glass breaks) to detect potential threats and alert users via a web interface.

---

## Problem Statement

Every year, property owners and facility managers face significant security risks due to undetected break‑ins, vandalism, and emergencies. Traditional surveillance systems rely heavily on visual monitoring (CCTV), which can be compromised by poor lighting, obstructions, or tampering—and often require constant human supervision to spot critical events. Meanwhile, many critical incidents produce distinctive acoustic signatures (glass breaking, alarms, aggressive voices) long before or in places where video fails.

**Acoustic‑Guard** aims to fill this gap by:

* **Listening** continuously for threat‑related sounds in indoor and outdoor environments.
* **Automatically classifying** ambient audio streams into harmless background noise versus potentially dangerous events.
* **Triggering real‑time alerts** (visual dashboard notifications, alarms, push messages) whenever a critical sound is detected—without requiring a human to watch a video feed.

By harnessing deep learning models trained on environmental and custom hazard sound datasets, Acoustic‑Guard offers an additional, low‑bandwidth security layer that operates effectively in low‑light or visually occluded scenarios—and frees security personnel to focus on verified threats rather than raw video playback.

![image](https://github.com/user-attachments/assets/46241711-d0ab-42a9-96d7-d29aa96dba3d)


## 🚀 Features

- **Audio Feature Extraction**: Uses MFCC, Chroma, and Mel-spectrogram features.  
- **Deep CNN Classifier**: Convolutional network trained on UrbanSound8K and custom samples.  
- **Real‑time Inference**: Listens through microphone, classifies sounds live.  
- **Web Dashboard**: Displays live audio stream, predicted class, and confidence.  
- **Alert System**: Triggers visual & audio alerts on detecting critical sounds.

---
![image](https://github.com/user-attachments/assets/6d5ca4a7-48cc-465d-ab0b-8f8f1ca024a7)
![image](https://github.com/user-attachments/assets/d873597d-6bcc-4048-8fc6-9d12a2c58685)


## 🎬 Demo

![image](https://github.com/user-attachments/assets/dea32805-11aa-405d-a293-21bd5bae27af)


1. **Web Dashboard**:  
   <img src="images/ui_screenshot.png" alt="Dashboard screenshot" width="600px">

2. **Audio Visualization**:  
   <img src="images/waveform_plot.png" alt="Live waveform" width="600px">

---

## 🏗️ Architecture

![image](https://github.com/user-attachments/assets/b6c03edb-ab7a-4f7b-8879-1fa86a9a9e7f)


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


