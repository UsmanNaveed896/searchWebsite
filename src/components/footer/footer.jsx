import React from "react";
import Img from "../../assets/Group 1000000912.png";
import Img1 from "../../assets/Group 1000000913.png";
import Img2 from "../../assets/qq.png";
import Img3 from "../../assets/Group 143.png";
import { IntlProvider, FormattedMessage } from "react-intl";
import {messagesEn} from '../../localization/messagesEn';
import {messagesFr} from '../../localization/messagesFr';
import {messagesAr} from '../../localization/messagesAr';
const Footer = ({ locale }) => {
  return (
    <IntlProvider
      locale={locale}
      messages={
        locale === "en" ? messagesEn : locale === "fr" ? messagesFr : messagesAr
      }
    >
      <div className="flex justify-center">
        <div className="container max-w-[1000px] mt-16">
          <div className="bg-white px-6 py-4 ">
            <div className="flex justify-center md:gap-6 gap-0 items-end">
              <div className="price border-r border-[#1B8693] border-r-2 md:px-6 px-2">
                <select className="mt-3 font-semibold md:text-[20px] text-[12px] ">
                  <option>
                    <FormattedMessage id="real.estate" />
                  </option>
                </select>
              </div>
              <div className="price border-r border-[#1B8693] border-r-2 md:px-6 px-2">
                <select className="mt-3 font-semibold md:text-[20px] text-[12px] ">
                  <option>
                    <FormattedMessage id="cars.cars" />
                  </option>
                </select>
              </div>
              <div className="price border-r border-[#1B8693] border-r-2 md:px-6 px-2">
                <select className="mt-3 font-semibold md:text-[20px] text-[12px] ">
                  <option>
                    <FormattedMessage id="Furniture" />
                  </option>
                </select>
              </div>
              <div className="price border-r border-[#1B8693] border-r-2 md:px-6 px-2">
                <select className="mt-3 font-semibold md:text-[20px] text-[12px] ">
                  <option>
                    <FormattedMessage id="Mortgage.Rates" />
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className=" text-center mt-16 px-2  mb-3">
            <p className="font-bold text-[38px] text-[#1B8693]">
              <FormattedMessage id="install.app" />{" "}
            </p>
            <div className="flex justify-center flex-wrap gap-16 mt-12">
              <img src={Img} alt="group" />
              <img src={Img1} alt="group" />
            </div>
          </div>
        </div>
      </div>

      <div
        className=" bg-cover  pb-16 mt-4 opacity-100 "
        style={{ backgroundImage: `url(${Img2})` }}
      >
        <div className="flex justify-center">
          <div className="container max-w-[1075px] md:mt-16 mt-2">
            <div className="grid md:grid-cols-2 grid-cols-1 px-4 md:px-0">
              <div className="column1">
                <h1 className="text-white font-bold md:text-[40px] text-[20px] md:leading-[40px] leading-[30px] mt-16">
                  <FormattedMessage id="need.consult" />
                  <br></br>
                  <FormattedMessage id="contact.us" /> <br></br>
                  <FormattedMessage id="ready.help" />
                </h1>
                <div className="list mt-8 text-white font-semibold">
                  <p className="font-bold">
                    <FormattedMessage id="contact" />
                  </p>
                  <ul>
                    <li className="py-2">
                      <span>
                        <i class="fa fa-map-marker mr-3" aria-hidden="true"></i>
                      </span>{" "}
                      <FormattedMessage id="car.detail" />
                    </li>
                    <li className="py-2">
                      <span>
                        <i class="fa fa-phone mr-3" aria-hidden="true"></i>
                      </span>
                      021 - 3943943
                    </li>
                    <li className="py-2">
                      <span>
                        <i class="fa fa-envelope-o mr-3" aria-hidden="true"></i>
                      </span>
                      myproperty@gmail.com
                    </li>
                  </ul>
                </div>
                <div className="list mt-24 text-white font-semibold">
                  <p className="font-bold">
                    {" "}
                    <FormattedMessage id="Social.Media" />{" "}
                  </p>
                  <ul>
                    <li className="py-2">
                      {" "}
                      <span>
                        <i class="fa fa-camera mr-3" aria-hidden="true"></i>
                      </span>
                      @myproperty
                    </li>
                    <li className="py-2">
                      {" "}
                      <span>
                        <i class="fa fa-twitter mr-3" aria-hidden="true"></i>
                      </span>
                      @myproperty
                    </li>
                    <li className="py-2">
                      {" "}
                      <span>
                        <i class="fa fa-facebook mr-3" aria-hidden="true"></i>
                      </span>
                      My Property
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column2 bg-white px-6 py-4 mt-12">
                <div className="">
                  <h1 className="font-bold text-[#2455a9] text-[35px] text-center">
                    <FormattedMessage id="any.question" />{" "}
                  </h1>
                  <input
                    className="bg-[#d0d0d0] px-4 py-4 mt-8 w-full"
                    placeholder="Enter you email"
                  ></input>
                  <textarea
                    className="mt-1 p-2 block w-full bg-[#d0d0d0] mt-8"
                    rows="8" // You can adjust the number of rows as needed
                    placeholder="Enter your question here"
                  ></textarea>
                  <button className="bg-[#2455a9] text-white py-4 w-full font-bold mt-8">
                    <FormattedMessage id="send" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[200px] px-4">
        <div className="flex justify-between items-center mt-12">
          <div>
            <img src={Img3} alt="search" />
          </div>
          <div>
            <ul className="flex gap-6 ">
              <li className="py-2 h-8 w-8 rounded-full text-white text-center bg-[#266582]">
                <span>
                  <i
                    class="ml-2 mt-[-3px] fa fa-facebook mr-3"
                    aria-hidden="true"
                  ></i>
                </span>
              </li>
              <li className="py-2 h-8 w-8 rounded-full text-white text-center bg-[#266582]">
                <span>
                  <i
                    class="ml-2 mt-[-3px] fa fa-twitter mr-3"
                    aria-hidden="true"
                  ></i>
                </span>
              </li>
              <li className="py-2 h-8 w-8 rounded-full text-white text-center bg-[#266582]">
                <span>
                  <i
                    class="ml-2 mt-[-3px] fa fa-instagram mr-3"
                    aria-hidden="true"
                  ></i>
                </span>
              </li>
              <li className="py-2 h-8 w-8 rounded-full text-white text-center bg-[#266582]">
                <span>
                  <i
                    class="ml-2 mt-[-3px] fa fa-youtube mr-3"
                    aria-hidden="true"
                  ></i>
                </span>
              </li>
              <li className="py-2 h-8 w-8 rounded-full text-white text-center bg-[#266582]">
                <span>
                  <i
                    class="ml-2 mt-[-3px] fa fa-linkedin mr-3"
                    aria-hidden="true"
                  ></i>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-6">
              <li className="py-2  cursor-pointer text-center">
                {" "}
                <FormattedMessage id="home" />
              </li>
              <li className="py-2  cursor-pointer  text-center">
                {" "}
                <FormattedMessage id="services" />
              </li>
              <li className="py-2   cursor-pointer text-center">
                {" "}
                <FormattedMessage id="Sell" />
              </li>
              <li className="py-2   cursor-pointer text-center">
                {" "}
                <FormattedMessage id="Rent" />
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </IntlProvider>
  );
};

export default Footer;
