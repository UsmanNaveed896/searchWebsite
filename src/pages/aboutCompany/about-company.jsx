import React from "react";
import Img4 from "../../assets/Group 1000000940.svg";
import HomeImg from "../../assets/Rectangle 8.png";
import Vector from "../../assets/Vector.png";
import LinePng from "../../assets/Linepng.png";
import ChatImg from "../../assets/Untitled.svg";
import RateImg1 from "../../assets/Group 1000000959.png";
import RateImg2 from "../../assets/Group 1000000960.png";

import RateImg3 from "../../assets/Group 1000000961.png";

import RateImg4 from "../../assets/Group 1000000962.png";
import Star from "../../assets/Vector (1).png";
import { IntlProvider, FormattedMessage } from "react-intl";
import { messagesEn } from "../../localization/messagesEn";
import { messagesFr } from "../../localization/messagesFr";
import { messagesAr } from "../../localization/messagesAr";
const AboutCompany = ({ locale }) => {
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";

  return (
    <IntlProvider
      locale={locale}
      messages={
        locale === "en" ? messagesEn : locale === "fr" ? messagesFr : messagesAr
      }
    >
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="">
            <div className="    flex gap-2 items-center rounded-lg px-2 py-2">
              <img
                src={Img4}
                className="w-[180px] h-[150px]"
                alt="company name"
              />
              <div className="">
                <h2 className="text-[#1F5E7C] text-[38px] font-Poppins font-medium">
                <FormattedMessage id='Company.Name' />   
                </h2>
                <p className="text-[26px] font-Poppins font-small text-[#0C356A]">
                  4.5(415 reviews)
                </p>
                <p className="text-[26px] font-Poppins font-small text-[#0C356A]">
                  +1 (248) 937-2442
                </p>
              </div>
            </div>

            <div className="mt-20 px-8">
              <h2 className="text-[#1F5E7C] font-Poppins font-medium text-[38px]">
              <FormattedMessage id='About.Company' />  
              </h2>
              <h3 className="text-[#000000] text-[20px] font-Poppins font-medium">
                Broker/Owner (25 years experience)
              </h3>
              <p className="text-[#0C356A] text-[12px] font-Poppins font-normal">
                Whether you are looking for an interior designer, general
                contractor or an architect, our local<br></br> directory of home
                improvement experts in Ludowici GA connects you to professionals
                who can<br></br> help complete your project and provide home
                inspiration along the way.
              </p>
              <h2 className="text-[#1F5E7C] font-Poppins font-medium text-[38px] mt-4">
              <FormattedMessage id='For.Sale' />  
              </h2>
              <p className="text-[#0C356A] text-[12px] font-Poppins font-normal">
              <FormattedMessage id='Active.listings' /> 
              </p>
              <h2 className="text-[#1F5E7C] font-Poppins font-medium text-[38px] mt-8">
                Sold (07)
              </h2>
            </div>
          </div>
          <div className="">
            <div className="flex justify-end">
              <img src={ChatImg} className="w-[455px]" alt="chat-image" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-4 px-8">
          <div>
            <div className="flex gap-[8rem] px-10">
              <h2 className="text-[#000000] text-[13px] font-Poppins font-semibold">
              <FormattedMessage id='Address' />  
              </h2>
              <h2 className="text-[#000000] text-[13px] font-Poppins font-semibold ml-[6rem]">
              <FormattedMessage id='Sold.date' /> 
              </h2>
              <h2 className="text-[#000000] text-[13px] font-Poppins font-semibold">
              <FormattedMessage id='Closing.price' /> 
              </h2>
              <h2 className="text-[#000000] text-[13px] font-Poppins font-semibold ">
              <FormattedMessage id='Represented' />  
              </h2>
            </div>
            <div
              className="flex gap-[7rem]  w-[790px] h-[100px] rounded-lg mt-4 px-2 py-3"
              style={{ boxShadow: shadow }}
            >
              <div className="flex gap-2 ">
                <img
                  src={HomeImg}
                  className="w-[100px] h-[70px]"
                  alt="address"
                />
                <h2 className="text-[#1F5E7C] text-[10px] font-Poppins font-semibold mt-4">
                  6626 Hartwick Rd<br></br>Houston, TX, 77016
                </h2>
              </div>
              <p className="mt-4 ">2/19/2019</p>
              <h2 className="text-[#1F5E7C] font-Poppins font-[900] font-[30px] mt-4">
                ...............
              </h2>
              <img
                src={Vector}
                className="w-[29px] h-[34px] mt-4 ml-10"
                alt="flag"
              />
            </div>
            <div
              className="flex gap-[7rem]  w-[790px] h-[100px] rounded-lg mt-4 px-2 py-3"
              style={{ boxShadow: shadow }}
            >
              <div className="flex gap-2 ">
                <img
                  src={HomeImg}
                  className="w-[100px] h-[70px]"
                  alt="address"
                />
                <h2 className="text-[#1F5E7C] text-[10px] font-Poppins font-semibold mt-4">
                  6626 Hartwick Rd<br></br>Houston, TX, 77016
                </h2>
              </div>
              <p className="mt-4 ">2/19/2019</p>
              <h2 className="text-[#1F5E7C] font-Poppins font-[900] font-[30px] mt-4">
                ...............
              </h2>
              <img
                src={Vector}
                className="w-[29px] h-[34px] mt-4 ml-10"
                alt="flag"
              />
            </div>
            <div
              className="flex gap-[7rem]  w-[790px] h-[100px] rounded-lg mt-4 px-2 py-3"
              style={{ boxShadow: shadow }}
            >
              <div className="flex gap-2 ">
                <img
                  src={HomeImg}
                  className="w-[100px] h-[70px]"
                  alt="address"
                />
                <h2 className="text-[#1F5E7C] text-[10px] font-Poppins font-semibold mt-4">
                  6626 Hartwick Rd<br></br>Houston, TX, 77016
                </h2>
              </div>
              <p className="mt-4 ">2/19/2019</p>
              <h2 className="text-[#1F5E7C] font-Poppins font-[900] font-[30px] mt-4">
                ...............
              </h2>
              <img
                src={Vector}
                className="w-[29px] h-[34px] mt-4 ml-10"
                alt="flag"
              />
            </div>
            <div
              className="flex gap-[7rem]  w-[790px] h-[100px] rounded-lg mt-4 px-2 py-3"
              style={{ boxShadow: shadow }}
            >
              <div className="flex gap-2 ">
                <img
                  src={HomeImg}
                  className="w-[100px] h-[70px]"
                  alt="address"
                />
                <h2 className="text-[#1F5E7C] text-[10px] font-Poppins font-semibold mt-4">
                  6626 Hartwick Rd<br></br>Houston, TX, 77016
                </h2>
              </div>
              <p className="mt-4 ">2/19/2019</p>
              <h2 className="text-[#1F5E7C] font-Poppins font-[900] font-[30px] mt-4">
                ...............
              </h2>
              <img
                src={Vector}
                className="w-[29px] h-[34px] mt-4 ml-10"
                alt="flag"
              />
            </div>
          </div>
          <div>
            <div
              className="flex  text-center flex-col w-[440px] h-[455px] rounded-lg mt-7 px-3 "
              style={{ boxShadow: shadow }}
            >
              <div>
                <h1 className="mt-4 text-[#1F5E7C] text-[30px] font-Poppins font-medium">
                <FormattedMessage id='Professional.Information' />
                </h1>
              </div>
              <div className="mt-10 flex justify-center  flex-col px-4">
                <div className="flex gap-4">
                  <h1 className="text-[#1F5E7C] text-[20px] font-Poppins font-medium">
                  <FormattedMessage id='office.address' /> :
                  </h1>
                  <p className="text-[#000000] text-[14px] font-regular font-Poppins">
                    Beyond The Home Realty, LLC<br></br>
                    16305 FM 521 Road, Ste A<br></br>
                    Rosharon, TX 77583
                  </p>
                </div>
                <div className="flex gap-12 mt-3">
                  <h1 className="text-[#1F5E7C] text-[20px] font-Poppins font-medium">
                  <FormattedMessage id='Phone.number' />  :
                  </h1>
                  <p className="text-[#000000] text-[14px] font-regular font-Poppins">
                    +1 (248) 937-2442
                  </p>
                </div>
                <div className="flex gap-[5rem] mt-3">
                  <h1 className="text-[#1F5E7C] text-[20px] font-Poppins font-medium">
                  <FormattedMessage id='Member.since' /> :
                  </h1>
                  <p className="text-[#000000] text-[14px] font-regular font-Poppins">
                    01/24/2024
                  </p>
                </div>
                <div className="flex gap-[7rem] mt-3">
                  <h1 className="text-[#1F5E7C] text-[20px] font-Poppins font-medium">
                  <FormattedMessage id='Licenses' />  :
                  </h1>
                  <p className="text-[#000000] text-[14px] font-regular font-Poppins">
                  <FormattedMessage id="Not.provided"/> 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 mt-6">
            <h1 className="text-[#1F5E7C]"><FormattedMessage id="likely.recommend" /></h1>
            <img src={Star} alt="star" />
            <p>0.5</p>
            <p><FormattedMessage id="report.problem" /></p>
          </div>
        </div>
      </div>
    </IntlProvider>
  );
};
export default AboutCompany;
