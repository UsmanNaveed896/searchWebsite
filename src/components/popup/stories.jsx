import React, { useState, useRef } from "react";
import Video from "../../assets/videos/1.mp4";
import Video1 from "../../assets/videos/2.mp4";
import Video2 from "../../assets/videos/3.mp4";

import Img from "../../assets/a.png";
const Stories = ({ isOpen, closeModal, videoRef, vidNum }) => {
  console.log(vidNum, "vid");
  return (
    <div>
      {isOpen && (
        <div className="fixed z-[999] inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-75">
            <div className="relative bg-white rounded-lg overflow-hidden">
              <button
                className="absolute top-2 right-2 z-[999] text-white text-3xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>
              <video ref={videoRef} className="rounded-xl h-[650px]" controls>
                <source
                  src={vidNum == "1" ? Video2 : vidNum == "2" ? Video : Video1}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stories;
