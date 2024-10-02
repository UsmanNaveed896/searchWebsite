import React from "react";
import Img from "../../assets/Group 48095826.png";
import Img1 from "../../assets/Rectangle 16.svg";

const LiveStreamingSection = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Live Streaming</h2>
          <a href="#" className="text-blue-600 flex items-center">
            Explore All
          </a>
        </div>

        <div className="flex space-x-8">
          <div className="relative w-1/2">
            <img src={Img1} alt="Property" className="rounded-lg h-[400px]" />
            <div className="absolute top-16 left-[-78px] bg-white rounded-lg p-4 h-[400px] w-[380px] border border-gray-400">
              <div className=" mb-1">
                <img className="mt-[7rem]" src={Img} alt="abc" />
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <h3 className="text-2xl font-bold mb-2 text-[42px] leading-[50px]">
              Live Property Showcase Your Next Home Awaits!
            </h3>

            <p className="text-[#1E1E1E] text-[20px]">
              "Tune in to our live property showcase where we feature the latest
              listings. Get an exclusive first look at your potential new home!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamingSection;
