import React from "react";
import Img4 from "../../assets/Group 1000000940.svg";
import HomeImg from "../../assets/Rectangle 8.png";
import Vector from "../../assets/Vector.png";
import ChatImg from "../../assets/Untitled.svg";
import Img6 from "../../assets/Notifications_Outline 1.png";
import Img7 from "../../assets/Data processing _Outline 1.png";
import Img8 from "../../assets/Startup_Outline-2 1.png";
import Img12 from "../../assets/Rectangle 14.png";
import Img13 from "../../assets/Rectangle 468.png";
import Img14 from "../../assets/Rectangle 469.png";
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
        <div className="images flex gap-6 mt-12 px-12 pb-4">
          <div className="img relative">
            <img src={Img12} alt="rectangle" />
          </div>
          <div className="img relative">
            <img src={Img13} alt="rectangle" />
          </div>
          <div className="img relative">
            <img src={Img14} alt="rectangle" />
          </div>
          <div className="img relative">
            <img src={Img12} alt="rectangle" />
          </div>
          <div className="img relative">
            <img src={Img13} alt="rectangle" />
          </div>
          <div className="img relative">
            <img src={Img14} alt="rectangle" />
          </div>
          <div className="img relative">
            <img src={Img12} alt="rectangle" />
          </div>
          <div className="img relative">
            <img src={Img13} alt="rectangle" />
          </div>
          <div className="img relative">
            <img src={Img14} alt="rectangle" />
          </div>
        </div>
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
                  <FormattedMessage id="Company.Name" />
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
                <FormattedMessage id="About.Company" />
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
                <FormattedMessage id="For.Sale" />
              </h2>
              <p className="text-[#0C356A] text-[12px] font-Poppins font-normal">
                <FormattedMessage id="Active.listings" />
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-end">
              <img src={ChatImg} className="w-[455px]" alt="chat-image" />
            </div>
          </div>
        </div>

        <div className="mt-32 pb-16 rounded-xl py-4">
          <div className="flex justify-between  mb-3">
            <p className="font-bold text-[12px]">
              {" "}
              <FormattedMessage id="live" />
            </p>
            <p className="text-[#1B8693] text-[12px] font-semibold">
              {" "}
              <FormattedMessage id="View-All" />
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <video width="1000" height="360" controls>
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/*News For You Card */}
       
        <div>
          <div className="flex justify-between items-center mt-16  mb-3">
            <p className="font-bold text-[12px]">
              <FormattedMessage id="news" />
            </p>
            <p className="font-bold text-[28px] text-[#1B8693]">
              {" "}
              <FormattedMessage id="News-For-You" />
            </p>
            <p className="text-[#1B8693] text-[12px] font-semibold">
              <FormattedMessage id="View-All" />
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-16">
        <div className="flex gap-6">
          <div class="max-w-sm mt-4 rounded-xl" style={{ boxShadow: shadow }}>
            <div className="">
              <div className="flex justify-center">
                <img className="w-full" src={Img6} />
              </div>
            </div>
            <div class="p-5 text-center bg-[#1f5e7c] text-white">
              <h5 class="mb-1 text-[16px] font-semibold tracking-tight">
                Lorem ipsum dolor
              </h5>
              <h5 class="mb-1 text-[16px] text-[#6c889b] font-bold tracking-tight">
                April 24 2024 - 5 min read
              </h5>
              <h5 class=" text-[16px] font-semibold tracking-tight ">
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </h5>
            </div>
          </div>

          <div class="max-w-sm mt-4 rounded-xl" style={{ boxShadow: shadow }}>
            <div className="">
              <div className="flex justify-center">
                <img className="w-full" src={Img7} />
              </div>
            </div>
            <div class="p-5 text-center bg-[#1f5e7c] text-white">
              <h5 class="mb-1 text-[16px] font-semibold tracking-tight">
                Lorem ipsum dolor
              </h5>
              <h5 class="mb-1 text-[16px] text-[#6c889b] font-bold tracking-tight">
                April 24 2024 - 5 min read
              </h5>
              <h5 class=" text-[16px] font-semibold tracking-tight ">
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </h5>
            </div>
          </div>
          <div class="max-w-sm mt-4 rounded-xl" style={{ boxShadow: shadow }}>
            <div className=" ">
              <div className="flex justify-center">
                <img className="w-full" src={Img8} />
              </div>
            </div>
            <div class="p-5 text-center bg-[#1f5e7c] text-white">
              <h5 class="mb-1 text-[16px] font-semibold tracking-tight">
                Lorem ipsum dolor
              </h5>
              <h5 class="mb-1 text-[16px] text-[#6c889b] font-bold tracking-tight">
                April 24 2024 - 5 min read
              </h5>
              <h5 class=" text-[16px] font-semibold tracking-tight ">
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </h5>
            </div>
          </div>
        </div>
        </div>






        <div className="mt-6 px-8">
          <div>
            <div className="flex gap-[8rem] px-10">
              <h2 className="text-[#000000] text-[13px] font-Poppins font-semibold">
                <FormattedMessage id="Address" />
              </h2>
              <h2 className="text-[#000000] text-[13px] font-Poppins font-semibold ml-[6rem]">
                <FormattedMessage id="Sold.date" />
              </h2>
              <h2 className="text-[#000000] text-[13px] font-Poppins font-semibold">
                <FormattedMessage id="Closing.price" />
              </h2>
              <h2 className="text-[#000000] text-[13px] font-Poppins font-semibold ">
                <FormattedMessage id="Represented" />
              </h2>
            </div>
            <div
              className="flex gap-[7rem]  w-full h-[100px] rounded-lg mt-4 px-2 py-3"
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
              className="flex gap-[7rem]  w-full h-[100px] rounded-lg mt-4 px-2 py-3"
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
              className="flex gap-[7rem]  w-full h-[100px] rounded-lg mt-4 px-2 py-3"
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
              className="flex gap-[7rem]  w-full h-[100px] rounded-lg mt-4 px-2 py-3"
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
         
        </div>
        <div>
          <div className="flex gap-4 mt-12">
            <h1 className="text-[#1F5E7C]">
              <FormattedMessage id="likely.recommend" />
            </h1>
            <img src={Star} alt="star" />
            <p>0.5</p>
            <p>
              <FormattedMessage id="report.problem" />
            </p>
          </div>
        </div>
      </div>
    </IntlProvider>
  );
};
export default AboutCompany;
