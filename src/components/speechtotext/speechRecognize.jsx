import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Script from 'react-load-script';
const SpeechRecognize = ({ speech, setSpeech, bot }) => {
  const [text, setText] = useState("");
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [scriptLoaded, setScriptLoaded] = useState(false);

    const handleScriptLoad = () => {
        setScriptLoaded(true);
        setText(transcript)
    };
  useEffect(() => {
    setSpeech(transcript);
  }, [transcript, setSpeech]);

  useEffect(() => {
    if (speech) {
      // setText(speech);
      const timeoutId = setTimeout(() => {
        // speakText()
      }, 1000); // Wait for 1 second before calling onEnd

      // Clear timeout if speech changes before the timeout completes
      return () => clearTimeout(timeoutId);
    }
  }, [speech, ]);
 
  useEffect(()=>{
    if(bot?.response){
      handleSpeak();
    }
  },[bot])
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  // const speakText = () => {
  //   if ("speechSynthesis" in window) {
  //     const utterance = new SpeechSynthesisUtterance(bot?.response);
  //     utterance.lang = "ar-SA";
  //     window.speechSynthesis.speak(utterance);
  //   } else {
  //     alert("Sorry, your browser does not support speech synthesis.");
  //   }
  // };
 
  const handleSpeak = () => {
    if (scriptLoaded && window.responsiveVoice) { 
        window.responsiveVoice.speak(bot?.response, "Arabic Female");
    } else {
        console.error("ResponsiveVoice script not yet loaded.");
    }
};
const startSpeechRecognition = () => {
  SpeechRecognition.startListening({ language: 'ar-SA' }); // Start listening with Arabic language
};

  return (
    <div className="text-white">
      <div className="flex gap-3 items-center">
        <button onClick={startSpeechRecognition}>
          <i className="fa fa-microphone hover:text-[#a6b9da]"></i>
        </button>
        <button onClick={SpeechRecognition.stopListening}>
          <i className="fa fa-stop hover:text-[#a6b9da]"></i>
        </button>
        <button onClick={resetTranscript}>
          <i className="fa fa-refresh hover:text-[#a6b9da]"></i>
        </button>
      </div>
      <Script 
                url={`https://code.responsivevoice.org/responsivevoice.js?key=NdJoCJEN`} 
                onLoad={handleScriptLoad} 
            />
    </div>
  );
};

export default SpeechRecognize;
