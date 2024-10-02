import React from "react";
import Img from "../../assets/download 1.png";
import Img1 from "../../assets/download 2.png";
import Img2 from "../../assets/qq.png";
import Img3 from "../../assets/Group 143.png";
import { IntlProvider, FormattedMessage } from "react-intl";
import { messagesEn } from "../../localization/messagesEn";
import { messagesFr } from "../../localization/messagesFr";
import { messagesAr } from "../../localization/messagesAr";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const Footer = ({ locale }) => {
  return (
    <footer className="bg-[#1F5E7C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 top-[-90px] relative">
          <h2 className="text-[#1F5E7C] text-center text-xl font-bold mb-4">
            Subscribe for any news updates
          </h2>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="bg-white  text-[#1F5E7C]  px-6 py-2 border-2 border-[#1F5E7C] rounded-xl hover:font-bold font-semibold transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Real estate website</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.
              Nulla facilisi
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Why choose us</li>
              <li>Testimonial</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow us</h3>
            <div className="">
              <div className="flex gap-2 pb-3 items-center">
              <BsYoutube size={20} />   <span> YouTube</span> 
              </div>
              <div className="flex gap-2 pb-3 items-center">
              <BsInstagram size={20} />   <span>Instagram</span> 
              </div>
              <div className="flex gap-2 pb-3 items-center">
              <FaFacebook size={20} />  <span>Facebook</span> 
              </div>
             
            
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold  mb-2">Find us</h3>
            <div className="">
              <img
                src={Img}
                alt="Google Play"
                className="pb-3 cursor-pointer"
              />
              <img
                src={Img1}
                alt="App Store"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
