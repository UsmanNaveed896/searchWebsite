import React from "react";
import Img from "../../assets/Rectangle 24.png";
import Img1 from "../../assets/Rectangle 25.svg";
const WhyChooseUs = () => {
  const services = [
    "Trusted Developer",
    "Outstanding properties",
    "A safe and trustworthy",
    "Buy with Confidence",
    "Markert Leading research",
  ];

  return (
    <div className="bg-gray-100 p-8 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pr-8">
          <h3 className="text-blue-600 font-semibold mb-2"> Benefits</h3>
          <h2 className="text-4xl font-bold mb-4">
          Why Choose Us
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae.
          </p>
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-center ">
                <svg
                  className="w-5 h-5 text-blue-500 mr-2"
                  fill="#1f5e7c"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">{service}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-1/2 flex justify-end">
          <div>
            <img src={Img} alt="Property" className="rounded-lg h-[350px]" />
            <div className="absolute top-[25px] left-[126px]   h-[400px] w-[380px]">
              <div className=" mb-1">
                <img className="rounded-xl" src={Img1} alt="abc" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
