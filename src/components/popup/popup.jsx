import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Img from "../../assets/qwq.png";
import SpeechRecognize from "../speechtotext/speechRecognize";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Popup = ({ onClose }) => {
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  const [speech, setSpeech] = useState("");
  const [bot, setBot] = useState();
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [speech]);

  const handleBotApi = async () => {
    setLoading(true)
    try {
      let payLoad = {
        prompt: speech,
      };
  
      await axios.post("https://cors-anywhere.herokuapp.com/https://searchapp.ai/api-bot/generate-response", payLoad, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res)=>{
        console.log(res,"res")
        setLoading(false)
        setBot(res.data);
        setTimeout(() => {
          if (res.data.action === "Seller") {
            navigate("https://search-app-blond.vercel.app/");
          } else if (res.data.action === "Furniture") {
            navigate("/car-listing");
          } else if (res.data.action === "Virtual Office") {
            navigate("/virtualoffice");
          }
        }, 2000); // 2000 milliseconds = 2 seconds
      });
    
  
    
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      setLoading(false)
    }
  };
  useEffect(() => {
   
    if (speech) {
      // setText(speech);
      const timeoutId = setTimeout(() => {
        handleBotApi();
      }, 1000); // Wait for 1 second before calling onEnd

      // Clear timeout if speech changes before the timeout completes
      return () => clearTimeout(timeoutId);
    }
  }, [speech]);


  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "10%" }}
      transition={{ duration: 0.7 }}
      className="fixed top-16 md:left-[30%] left-[5%] right-0 bg-[#404040] p-4 shadow-md rounded-xl z-[999] md:max-w-[500px] max-w-[350px]"
      style={{ backgroundColor: "rgba(64, 64, 64, 0.7)" }} // Adjust the opacity here
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className=" text-white hover:font-bold focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-center text-white">
          Hello I Am Your Virtual Assistant!
        </h2>
        <h2 className="text-lg font-semibold text-center  text-white">
          How Can I Help You?
        </h2>{" "}
        {/* Fixed the typo here */}
      </div>
      <div className="flex justify-center  items-start">
        <img className="h-[300px]" src={Img} alt="girl" />
        <textarea
          ref={textareaRef}
          className="rounded px-2 py-1 bg-white mt-16 text-[12px] focus:outline-none"
          placeholder="Say Something..."
          type="text"
          value={speech}
          readOnly
        />
        <div className="mt-[74px] ml-6">
          <SpeechRecognize speech={speech} setSpeech={setSpeech} bot={bot} loading={loading}/>
        </div>

        {/* <i className="text-[34px]  text-white fa fa-comments-o  cursor-pointer hover:font-bold" aria-hidden="true"></i> */}
      </div>
    </motion.div>
  );
};

export default Popup;
