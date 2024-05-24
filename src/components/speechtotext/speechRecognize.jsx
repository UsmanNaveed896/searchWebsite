import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const SpeechRecognize = ({ speech, setSpeech, onEnd }) => {
  const [text, setText] = useState("");
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    setSpeech(transcript);
  }, [transcript, setSpeech]);

  useEffect(() => {
    if (speech) {
      setText(speech);
      const timeoutId = setTimeout(() => {
        if (onEnd) {
          onEnd(speech);
        }
      }, 1000); // Wait for 1 second before calling onEnd

      // Clear timeout if speech changes before the timeout completes
      return () => clearTimeout(timeoutId);
    }
  }, [speech, onEnd]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const speakText = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support speech synthesis.");
    }
  };

  return (
    <div className="text-white">
      <div className="flex gap-3 items-center">
        <button onClick={SpeechRecognition.startListening}>
          <i className="fa fa-microphone hover:text-[#a6b9da]"></i>
        </button>
        <button onClick={SpeechRecognition.stopListening}>
          <i className="fa fa-stop hover:text-[#a6b9da]"></i>
        </button>
        <button onClick={resetTranscript}>
          <i className="fa fa-refresh hover:text-[#a6b9da]"></i>
        </button>
      </div>
    </div>
  );
};

export default SpeechRecognize;
