import React, { useRef, useState, useEffect } from 'react';

const App = () => {
  const playbackRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  let chunks = [];

  useEffect(() => {
    const setupAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const newRecorder = new MediaRecorder(stream);
        setRecorder(newRecorder);

        newRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        newRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          chunks = []; // Reset chunks for next recording
          const url = window.URL.createObjectURL(blob);
          setAudioURL(url);
        };
      } catch (err) {
        console.error('Error setting up audio:', err);
      }
    };

    setupAudio();

    // Cleanup function to release resources when component unmounts
    return () => {
      if (recorder) {
        recorder.stop();
      }
    };
  }, []); // Empty dependency array to run only once on component mount

  const toggleMic = () => {
    if (!recorder) return; // Check if recorder is initialized before toggling
    setIsRecording((prev) => !prev);

    if (!isRecording) {
      recorder.start();
    } else {
      recorder.stop();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-mono mb-8">Acoustic Guard Security Check System</h1>
      <div className="flex flex-col items-center">
        <button
          className={`bg-red-600 text-white w-72 h-24 text-2xl rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${isRecording ? 'bg-red-700' : ''}`}
          onClick={toggleMic}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        {audioURL && (
          <audio ref={playbackRef} className="mt-4" controls src={audioURL} />
        )}
      </div>
    </div>
  );
};

export default App;