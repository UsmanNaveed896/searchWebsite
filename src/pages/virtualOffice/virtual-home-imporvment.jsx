import React from "react";
import Img from "../../assets/Hero-person.png";
import Img1 from "../../assets/Group 158.png";
import Img5 from "../../assets/Group 1000000947.png";
import { IntlProvider, FormattedMessage } from "react-intl";
import { messagesEn } from "../../localization/messagesEn";
import { messagesFr } from "../../localization/messagesFr";
import { messagesAr } from "../../localization/messagesAr";
import { useNavigate } from "react-router-dom";
const HomeImprovement = ({ locale }) => {
    const navigate=useNavigate();
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";

  return (
    <>
      <IntlProvider
        locale={locale}
        messages={
          locale === "en"
            ? messagesEn
            : locale === "fr"
            ? messagesFr
            : messagesAr
        }
      >
        <div
          className=" bg-cover h-screen pb-16"
          style={{ backgroundImage: `url(${Img})` }}
        >
          <div className="container max-w-[1000px] pt-40 pl-10">
            <h1 className="font-bold text-[42px] font-Poppins leading-[60px] text-[#1F5E7C]">
              {" "}
              <FormattedMessage id="great.agent" />
              <br></br> <FormattedMessage id="all.differences" />
            </h1>
            <p className="mt-2 text-[#FFFFFF] font-Poppins text-[16px]">
              "Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing
              elit, sed do eiusmod tempor incididunt <br></br> ut labore et
              dolore magna aliqua.
            </p>
            <button className="text-[#FFFFFF] bg-[#1F5E7C] font-Poppins px-2 py-1 rounded-lg mt-8 ml-14">
              <FormattedMessage id="connect.agent" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-[100%]">
          <div
            className="bg-[#1F5E7C] px-2 py-2 mt-4 w-[95%] rounded-lg mb-10"
            style={{ boxShadow: shadow }}
          >
            <div className="flex justify-center gap-32 items-center pb-12">
              <div className="ss  px-6">
                <p className="font-medium text-[white] text-[16] font-Poppins">
                  <FormattedMessage id="Location" />
                </p>
                <div className="relative">
                  <input
                    className="bg-[#F1EEEE] w-48 mt-1 px-2 py-2 text-[12px] font-Poppins font-medium text-[#918C8C] border border-[#918C8C] rounded-md"
                    placeholder="Neighbarhood/City/Zip"
                  />
                  <span className="absolute inset-y-2 start-[135px]">
                    <i
                      class="fa fa-search text-[#757575] ml-8"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </div>
              <div className="price  px-6">
                <p className="font-medium text-[white] text-[16] font-Poppins ">
                  <FormattedMessage id="name" />
                </p>
                <div className="relative">
                  <input
                    className=" bg-[#F1EEEE] mt-1 w-48 px-2 py-2 text-[12px] font-Poppins font-medium text-[#918C8C] border border-[#918C8C] rounded-md"
                    placeholder="Agent Name"
                  />
                  <span className="absolute inset-y-2 start-[135px]">
                    <i
                      class="fa fa-search text-[#757575] ml-8"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </div>
              <div className="price  px-6">
                <p className="font-medium text-[white] text-[16] font-Poppins">
                  {" "}
                  <FormattedMessage id="SPECIALTIES" />
                </p>
                <select className="mt-1 px-2 py-2 w-48 bg-[#F1EEEE] text-[12px] font-Poppins font-medium  text-[#918C8C] border border-[#918C8C] rounded-md">
                  <option>
                    {" "}
                    <FormattedMessage id="Any" />
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="main  ">
          <div className="flex items-center justify-between mt-8 mb-8 px-12 ">
            <h1 className="font-bold text-[20px] font-Poppins text-[#000000]">
              <FormattedMessage id="Virtual-Office" />
            </h1>
            <h1 className="font-bold text-[20px] font-Poppins text-[#000000]">
              <FormattedMessage id="Location" />
            </h1>
            <h1 className="font-bold text-[20px] font-Poppins text-[#000000]">
              <FormattedMessage id="Client Review" />
            </h1>
          </div>
          <div className="px-6 mt-8 pb-16 ">
            <div
              className="flex px-4 py-4 justify-between rounded-lg cursor-pointer hover:border-[#1F5E7C] hover:border"
              style={{ boxShadow: shadow }}
              onClick={()=>navigate('/about-Company')}
            >
              <div
                className=" w-[372px]  flex gap-2 items-center rounded-lg px-2 py-2"
                style={{ boxShadow: shadow }}
              >
                <img src={Img1} alt="company name" />
                <div className="">
                  <h2 className="text-[#1F5E7C] text-[16px] font-Poppins font-bold">
                    <FormattedMessage id="Company.Name" />
                  </h2>
                  <p className="text-[14px]">4.5(415 reviews)</p>
                  <p className="text-[14px]">+1 (248) 937-2442</p>
                </div>
              </div>
              <img src={Img5} alt="map image" />
              <div className="flex flex-col gap-4 w-80">
                <h2 className="font-bold text-[14px] text-center text-[#1F5E7C]">
                  Review 10/27/2017
                </h2>
                <p className="text-[16px] font=semibold">
                  A few weeks later the contract fell through and Kathrin was
                  right on it as soon ...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="px-6 mt-8 pb-16 ">
            <div
              className="flex px-4 py-4 justify-between rounded-lg"
              style={{ boxShadow: shadow }}
            >
              <div
                className=" w-[372px]  flex gap-2 items-center rounded-lg px-2 py-2"
                style={{ boxShadow: shadow }}
              >
                <img src={Img1} alt="company name" />
                <div className="">
                  <h2 className="text-[#1F5E7C] text-[16px] font-Poppins font-bold">
                    <FormattedMessage id="Company.Name" />
                  </h2>
                  <p className="text-[14px]">4.5(415 reviews)</p>
                  <p className="text-[14px]">+1 (248) 937-2442</p>
                </div>
              </div>
              <img src={Img5} alt="map image" />
              <div className="flex flex-col gap-4 w-80">
                <h2 className="font-bold text-[14px] text-center text-[#1F5E7C]">
                  Review 10/27/2017
                </h2>
                <p className="text-[16px] font=semibold">
                  A few weeks later the contract fell through and Kathrin was
                  right on it as soon ...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main mt-4">
          <div className="px-6 mt-8 pb-16 ">
            <div
              className="flex px-4 py-4 justify-between rounded-lg"
              style={{ boxShadow: shadow }}
            >
              <div
                className=" w-[372px]  flex gap-2 items-center rounded-lg px-2 py-2"
                style={{ boxShadow: shadow }}
              >
                <img src={Img1} alt="company name" />
                <div className="">
                  <h2 className="text-[#1F5E7C] text-[16px] font-Poppins font-bold">
                    <FormattedMessage id="Company.Name" />
                  </h2>
                  <p className="text-[14px]">4.5(415 reviews)</p>
                  <p className="text-[14px]">+1 (248) 937-2442</p>
                </div>
              </div>
              <img src={Img5} alt="map image" />
              <div className="flex flex-col gap-4 w-80">
                <h2 className="font-bold text-[14px] text-center text-[#1F5E7C]">
                  Review 10/27/2017
                </h2>
                <p className="text-[16px] font=semibold">
                  A few weeks later the contract fell through and Kathrin was
                  right on it as soon ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </IntlProvider>
    </>
  );
};

export default HomeImprovement;
