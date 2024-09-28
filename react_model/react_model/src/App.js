// src/VoiceRecorder.js

import React, { useState, useRef } from 'react';

const App = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current.current, { type: 'audio/wav' });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);
      audioChunksRef.current = [];
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const saveRecording = () => {
    const a = document.createElement('a');
    a.href = audioURL;
    a.download = 'react_model/saved_recorded_files/recording.wav';
    a.click();
  };

  return (
    <div>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioURL && (
        <div>
          <audio controls src={audioURL}></audio>
          <button onClick={saveRecording}>Save Recording</button>
        </div>
      )}
    </div>
  );
};

export default App;
