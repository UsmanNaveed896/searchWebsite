import React, { useEffect, useState } from "react";
import Img from "../../assets/Hero-Photoroom.png";
import MultiCarousel from "react-multi-carousel";
import HomepagePopup from "./homepagepopup";
import "react-multi-carousel/lib/styles.css";
import Img1 from "../../assets/Rectangle 22.png";
import Img2 from "../../assets/Group 48095826.png";
import Img3 from "../../assets/Vector (4).png";
import Img4 from "../../assets/a.png";
import Img5 from "../../assets/Group 25.png";
import Img6 from "../../assets/Notifications_Outline 1.png";
import Img7 from "../../assets/Data processing _Outline 1.png";
import Img8 from "../../assets/Startup_Outline-2 1.png";
import Img9 from "../../assets/Rectangle 10.png";
import Img10 from "../../assets/Rectangle 5.png";
import Img11 from "../../assets/Rectangle 8.png";
import Img12 from "../../assets/Rectangle 14.png";
import Img13 from "../../assets/Rectangle 468.png";
import Img14 from "../../assets/Rectangle 469.png";

import OurServices from "./ourservices";
import MultiCarouselHome from "./multi-carousel";
import { IntlProvider, FormattedMessage } from "react-intl";
import { messagesEn } from "../../localization/messagesEn";
import { messagesFr } from "../../localization/messagesFr";
import { messagesAr } from "../../localization/messagesAr";
import Popup from "../../components/popup/popup";
const Homepage = ({ locale }) => {
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const newresponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  useEffect(() => {
    // Set showPopup to true after a short delay to demonstrate the animation
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);
  console.log(showPopup, "popup");
  return (
    <>
      {/* <HomepagePopup/>
       */}
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
        <div className=" flex justify-center items-center">
          {/* {showPopup && <Popup onClose={handleClosePopup} />} */}
        </div>
        <div className="homepage relative">
          <div className="images flex md:flex-nowrap flex-wrap justify-center gap-6 mt-12 px-12 pb-4">
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

          <div
            className=" bg-cover h-screen pb-16"
            style={{ backgroundImage: `url(${Img})` }}
          >
            <div className="flex justify-evenly">
              <div className="container max-w-[1000px] mt-32 md:px-0 px-4">
                <h1 className="font-bold md:text-[50px] text-[25px] md:leading-[60px] leading-[30px] text-white">
                  <FormattedMessage id="home.title1" />
                  <br></br>
                  <FormattedMessage id="home.title2" />
                </h1>
                <p className="md:mt-12 mt-2 text-white md:text-[22px] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br></br>
                  Sed do eiusmod tempor incididunt ut Ut enim <br></br> ad minim
                  veniam.
                </p>
                <div className="bg-white px-6 py-4 mt-16">
                  <div className="flex justify-center gap-6 items-center md:grid-cols-3 grid grid-cols-1">
                    <div className="ss border-r border-black px-6">
                      <div className="price  md:px-6 px-0">
                        <p className="font-bold ">
                          {" "}
                          <FormattedMessage id="Location" />
                        </p>
                        <select className="mt-3 text-[#757575]">
                          <option>
                            {" "}
                            <FormattedMessage id="city" />
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="price border-r border-black px-6">
                      <p className="font-bold ">
                        {" "}
                        <FormattedMessage id="price" />
                      </p>
                      <p className="mt-3 text-[#757575]">
                        $10000 - $50000{" "}
                        <span>
                          <i
                            class="fa fa-money text-[#757575] ml-8"
                            aria-hidden="true"
                          ></i>
                        </span>{" "}
                      </p>
                    </div>
                    <div className="price border-r border-black px-6">
                      <p className="font-bold ">
                        {" "}
                        <FormattedMessage id="type" />
                      </p>
                      <select className="mt-3 text-[#757575]">
                        <option>
                          <FormattedMessage id="property" />
                        </option>
                      </select>
                    </div>
                    <div className="px-6">
                      <i class="fa fa-home text-[52px]" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-16">
                  <div className="rounded-full bg-white h-16 w-16 text-center">
                    <i
                      class="fa fa-home md:text-[26px] text-[10px] mt-1.5"
                      aria-hidden="true"
                    ></i>
                    <p className="text-[12px] font-bold">+500k</p>
                  </div>
                  <div className="rounded-full bg-white h-16 w-16 text-center">
                    <i
                      class="fa fa-building text-[26px] mt-2"
                      aria-hidden="true"
                    ></i>
                    <p className="text-[12px] font-bold">+200k</p>
                  </div>
                  <div className="rounded-full bg-white h-16 w-16 text-center">
                    <i
                      class="fa fa-industry text-[26px] mt-2"
                      aria-hidden="true"
                    ></i>
                    <p className="text-[12px] font-bold">+300k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly px-4 md:px-0">
            <div className="container max-w-[1200px] mt-16">
              <p className="font-bold text-[28px] text-[#1B8693] pb-2">
                {" "}
                <FormattedMessage id="Featured Ad" />
              </p>
              <div className="Multicarousel ">
                <div className="img  mb-6">
                  <MultiCarousel
                    responsive={responsive}
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                  >
                    <div className="relative">
                      <div className="absolute">
                        <div className="head  px-3 w-[120px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1">
                          <h1 className="text-[16px] ">
                            {" "}
                            <FormattedMessage id="Limited-Time" />
                          </h1>
                        </div>
                        <h1 className="font-semibold text-[18px] mt-1 ml-1">
                          {" "}
                          <FormattedMessage id="Get-Special-Offer" /> <br></br>
                          <FormattedMessage id="up-to" />
                          <span className="text-[18px] font-bold font-semibold ">
                            40 %
                          </span>{" "}
                        </h1>
                        <h1 className="text-[16px] mt-6  font-semibold ml-1">
                          <FormattedMessage id="All-washing-services-available" />
                        </h1>
                        <div className="absolute top-[11rem] right-[-10rem]">
                          <span className="bg-[#1F5E7C] px-6 py-1 rounded-xl text-white text-center font-bold text-[12px]">
                            <FormattedMessage id="Claim" />
                          </span>
                        </div>
                      </div>
                      <img className="w-[95%]" src={Img1} alt="abc" />
                    </div>
                    <div className="relative">
                      <div className="absolute">
                        <div className="head  px-3 w-[120px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1">
                          <h1 className="text-[16px] ">
                            {" "}
                            <FormattedMessage id="Limited-Time" />
                          </h1>
                        </div>
                        <h1 className="font-semibold text-[18px] mt-1 ml-1">
                          {" "}
                          <FormattedMessage id="Get-Special-Offer" /> <br></br>
                          <FormattedMessage id="up-to" />
                          <span className="text-[18px] font-bold font-semibold ">
                            40 %
                          </span>{" "}
                        </h1>
                        <h1 className="text-[16px] mt-6  font-semibold ml-1">
                          <FormattedMessage id="All-washing-services-available" />
                        </h1>
                        <div className="absolute md:top-[11rem] top-[9rem] md:right-[-10rem] right-[-7rem]">
                          <span className="bg-[#1F5E7C] px-6 py-1 rounded-xl text-white text-center font-bold text-[12px]">
                            <FormattedMessage id="Claim" />
                          </span>
                        </div>
                      </div>
                      <img className="w-[95%]" src={Img1} alt="abc" />
                    </div>
                    <div className="relative">
                      <div className="absolute">
                        <div className="head  px-3 w-[120px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1">
                          <h1 className="text-[16px] ">
                            {" "}
                            <FormattedMessage id="Limited-Time" />
                          </h1>
                        </div>
                        <h1 className="font-semibold text-[18px] mt-1 ml-1">
                          {" "}
                          <FormattedMessage id="Get-Special-Offer" /> <br></br>
                          <FormattedMessage id="up-to" />
                          <span className="text-[18px] font-bold font-semibold ">
                            40 %
                          </span>{" "}
                        </h1>
                        <h1 className="text-[16px] mt-6  font-semibold ml-1">
                          <FormattedMessage id="All-washing-services-available" />
                        </h1>
                        <div className="absolute top-[11rem] right-[-10rem]">
                          <span className="bg-[#1F5E7C] px-6 py-1 rounded-xl text-white text-center font-bold text-[12px]">
                            <FormattedMessage id="Claim" />
                          </span>
                        </div>
                      </div>
                      <img className="w-[95%]" src={Img1} alt="abc" />
                    </div>
                    <div className="relative">
                      <div className="absolute">
                        <div className="head  px-3 w-[120px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1">
                          <h1 className="text-[16px] ">
                            {" "}
                            <FormattedMessage id="Limited-Time" />
                          </h1>
                        </div>
                        <h1 className="font-semibold text-[18px] mt-1 ml-1">
                          {" "}
                          <FormattedMessage id="Get-Special-Offer" /> <br></br>
                          <FormattedMessage id="up-to" />
                          <span className="text-[18px] font-bold font-semibold ">
                            40 %
                          </span>{" "}
                        </h1>
                        <h1 className="text-[16px] mt-6  font-semibold ml-1">
                          <FormattedMessage id="All-washing-services-available" />
                        </h1>
                        <div className="absolute top-[11rem] right-[-10rem]">
                          <span className="bg-[#1F5E7C] px-6 py-1 rounded-xl text-white text-center font-bold text-[12px]">
                            <FormattedMessage id="Claim" />
                          </span>
                        </div>
                      </div>
                      <img className="w-[95%]" src={Img1} alt="abc" />
                    </div>
                    <div className="relative">
                      <div className="absolute">
                        <div className="head  px-3 w-[120px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1">
                          <h1 className="text-[16px] ">
                            {" "}
                            <FormattedMessage id="Limited-Time" />
                          </h1>
                        </div>
                        <h1 className="font-semibold text-[18px] mt-1 ml-1">
                          {" "}
                          <FormattedMessage id="Get-Special-Offer" /> <br></br>
                          <FormattedMessage id="up-to" />
                          <span className="text-[18px] font-bold font-semibold ">
                            40 %
                          </span>{" "}
                        </h1>
                        <h1 className="text-[16px] mt-6  font-semibold ml-1">
                          <FormattedMessage id="All-washing-services-available" />
                        </h1>
                        <div className="absolute top-[11rem] right-[-10rem]">
                          <span className="bg-[#1F5E7C] px-6 py-1 rounded-xl text-white text-center font-bold text-[12px]">
                            <FormattedMessage id="Claim" />
                          </span>
                        </div>
                      </div>
                      <img className="w-[95%]" src={Img1} alt="abc" />
                    </div>
                    <div className="relative">
                      <div className="absolute">
                        <div className="head  px-3 w-[120px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1">
                          <h1 className="text-[16px] ">
                            {" "}
                            <FormattedMessage id="Limited-Time" />
                          </h1>
                        </div>
                        <h1 className="font-semibold text-[18px] mt-1 ml-1">
                          {" "}
                          <FormattedMessage id="Get-Special-Offer" /> <br></br>
                          <FormattedMessage id="up-to" />
                          <span className="text-[18px] font-bold font-semibold ">
                            40 %
                          </span>{" "}
                        </h1>
                        <h1 className="text-[16px] mt-6  font-semibold ml-1">
                          <FormattedMessage id="All-washing-services-available" />
                        </h1>
                        <div className="absolute top-[11rem] right-[-10rem]">
                          <span className="bg-[#1F5E7C] px-6 py-1 rounded-xl text-white text-center font-bold text-[12px]">
                            <FormattedMessage id="Claim" />
                          </span>
                        </div>
                      </div>
                      <img className="w-[95%]" src={Img1} alt="abc" />
                    </div>
                  </MultiCarousel>
                </div>
              </div>
              <div className="mt-16 rounded-xl py-4">
                <p className="font-bold text-[28px] mb-6 text-[#1B8693] pb-2">
                  {" "}
                  <FormattedMessage id="Live Streaming" />
                </p>

                <div className="flex justify-center mt-4">
                  <video width="640" height="360" controls>
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="">
                  <p className="text-center font-semibold text-[13px]">
                    {" "}
                    <FormattedMessage id="Your-Live-Streaming-Only-For-5-Minutes" />{" "}
                  </p>
                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-gradient-to-b from-blue-500 to-indigo-600  hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      <i className="fa fa-rss mr-2"></i>
                      <FormattedMessage id="live" />
                    </button>
                  </div>
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
              <div className="grid md:grid-cols-3 grid-cols-1  gap-6">
                <div
                  class="max-w-sm mt-4 rounded-xl"
                  style={{ boxShadow: shadow }}
                >
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
                      sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </h5>
                  </div>
                </div>

                <div
                  class="max-w-sm mt-4 rounded-xl"
                  style={{ boxShadow: shadow }}
                >
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
                      sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </h5>
                  </div>
                </div>
                <div
                  class="max-w-sm mt-4 rounded-xl"
                  style={{ boxShadow: shadow }}
                >
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
                      sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </h5>
                  </div>
                </div>
              </div>

              {/*Homes For You Card */}
              <div className=" text-center mt-16  mb-3">
                <p className="font-bold text-[28px] text-[#1B8693]">
                  <FormattedMessage id="homes.for.you" />
                </p>
                <p className=" font-semibold">
                  <FormattedMessage id="dream.property.seller" />
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mt-16">
                <div
                  class="max-w-sm mt-4 rounded-xl"
                  style={{ boxShadow: shadow }}
                >
                  <div className="">
                    <div className="flex justify-center">
                      <img className="w-full" src={Img9} />
                    </div>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                      IDR 200.000.000
                    </h5>
                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                      <FormattedMessage id="car.detail" />
                    </h5>
                    <div class="star-rating flex gap-1 mt-2 items-center">
                      <svg
                        class="star-icon w-5 h-5"
                        fill="#f7c300"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                      </svg>
                      <span class="rating-text text-[12px]">
                        4.5 (415 reviews)
                      </span>
                    </div>
                    <h5 class="mb-1 mt-2 text-[12px] font-semibold tracking-tight text-[#f7c300]">
                      Sell
                    </h5>
                  </div>
                  <div className="flex justify-between px-5 mb-2">
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={Img3} alt="abc" />
                        <p className="font-bold text-[12px]">
                          <FormattedMessage id="Bedroom" />
                        </p>
                      </div>
                      <p className="font-bold text-[12px]">1</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={Img4} alt="abc" />
                        <p className="font-bold text-[12px]">
                          <FormattedMessage id="Washroom" />
                        </p>
                      </div>
                      <p className="font-bold text-[12px]">2</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={Img5} alt="abc" />
                        <p className="font-bold text-[12px]">
                          <FormattedMessage id="home.area" />
                        </p>
                      </div>
                      <p className="font-bold text-[12px]">360m</p>
                    </div>
                  </div>
                </div>
                <div
                  class="max-w-sm mt-4 rounded-xl"
                  style={{ boxShadow: shadow }}
                >
                  <div className="">
                    <div className="flex justify-center">
                      <img className="w-full" src={Img10} />
                    </div>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                      IDR 200.000.000
                    </h5>
                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                      <FormattedMessage id="car.detail" />
                    </h5>
                    <div class="star-rating flex gap-1 mt-2 items-center">
                      <svg
                        class="star-icon w-5 h-5"
                        fill="#f7c300"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                      </svg>
                      <span class="rating-text text-[12px]">
                        4.5 (415 reviews)
                      </span>
                    </div>
                    <h5 class="mb-1 mt-2 text-[12px] font-semibold tracking-tight text-[#f7c300]">
                      Sell
                    </h5>
                  </div>
                  <div className="flex justify-between px-5 mb-2">
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={Img3} alt="abc" />
                        <p className="font-bold text-[12px]">
                          <FormattedMessage id="Bedroom" />
                        </p>
                      </div>
                      <p className="font-bold text-[12px]">1</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={Img4} alt="abc" />
                        <p className="font-bold text-[12px]">
                          <FormattedMessage id="Washroom" />
                        </p>
                      </div>
                      <p className="font-bold text-[12px]">2</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={Img5} alt="abc" />
                        <p className="font-bold text-[12px]">
                          <FormattedMessage id="home.area" />
                        </p>
                      </div>
                      <p className="font-bold text-[12px]">360m</p>
                    </div>
                  </div>
                </div>
                <div
                  class="max-w-sm mt-4 rounded-xl"
                  style={{ boxShadow: shadow }}
                >
                  <div className="">
                    <div className="flex justify-center">
                      <img className="w-full" src={Img11} />
                    </div>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                      IDR 200.000.000
                    </h5>
                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                      <FormattedMessage id="car.detail" />
                    </h5>
                    <div class="star-rating flex gap-1 mt-2 items-center">
                      <svg
                        class="star-icon w-5 h-5"
                        fill="#f7c300"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                      </svg>
                      <span class="rating-text text-[12px]">
                        4.5 (415 reviews)
                      </span>
                    </div>
                    <h5 class="mb-1 mt-2 text-[12px] font-semibold tracking-tight text-[#f7c300]">
                      <FormattedMessage id="Sell" />
                    </h5>
                  </div>
                  <div className="flex justify-between px-5 mb-2">
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={Img3} alt="abc" />
                        <p className="font-bold text-[12px]">
                          <FormattedMessage id="Bedroom" />
                        </p>
                      </div>
                      <p className="font-bold text-[12px]">1</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={Img4} alt="abc" />
                        <p className="font-bold text-[12px]">
                          <FormattedMessage id="Washroom" />
                        </p>
                      </div>
                      <p className="font-bold text-[12px]">2</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={Img5} alt="abc" />
                        <p className="font-bold text-[12px]">
                          <FormattedMessage id="home.area" />
                        </p>
                      </div>
                      <p className="font-bold text-[12px]">360m</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <p className="text-[#1B8693] text-center text-[15px] font-bold mt-4">
                <FormattedMessage id="more" />
              </p> */}

              {/*Cars For You Card */}
              <div className=" text-center mt-16  mb-3">
                <p className="font-bold text-[28px] text-[#1B8693]">
                  <FormattedMessage id="cars.for.you" />
                </p>
                <p className=" font-semibold">
                  <FormattedMessage id="dream.car.seller" />
                </p>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-16">
                <div
                  class="max-w-sm mt-4 rounded-xl"
                  style={{ boxShadow: shadow }}
                >
                  <div className="">
                    <div className="flex justify-center">
                      <img className="w-full" src={Img6} />
                    </div>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                      $ 200.000.000
                    </h5>
                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                      <FormattedMessage id="honda.civic" />
                    </h5>
                    <div class="star-rating flex gap-1 mt-2 items-center">
                      <svg
                        class="star-icon w-5 h-5"
                        fill="#f7c300"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                      </svg>
                      <span class="rating-text text-[12px]">
                        4.5 (415 reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="max-w-sm mt-4 rounded-xl"
                  style={{ boxShadow: shadow }}
                >
                  <div className="">
                    <div className="flex justify-center">
                      <img className="w-full" src={Img6} />
                    </div>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                      $ 200.000.000
                    </h5>
                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                      <FormattedMessage id="honda.civic" />
                    </h5>
                    <div class="star-rating flex gap-1 mt-2 items-center">
                      <svg
                        class="star-icon w-5 h-5"
                        fill="#f7c300"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                      </svg>
                      <span class="rating-text text-[12px]">
                        4.5 (415 reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="max-w-sm mt-4 rounded-xl"
                  style={{ boxShadow: shadow }}
                >
                  <div className="">
                    <div className="flex justify-center">
                      <img className="w-full" src={Img6} />
                    </div>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                      $ 200.000.000
                    </h5>
                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                      <FormattedMessage id="honda.civic" />
                    </h5>
                    <div class="star-rating flex gap-1 mt-2 items-center">
                      <svg
                        class="star-icon w-5 h-5"
                        fill="#f7c300"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                      </svg>
                      <span class="rating-text text-[12px]">
                        4.5 (415 reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className=" mb-5 text-[#1B8693] text-center text-[15px] font-bold mt-4">
                <FormattedMessage id="more" />
              </p>
            </div>
          </div>
          <div className="our services">
            <OurServices locale={locale} />
          </div>

          {/* Multi Carousel */}
          <div className="multiCarousel">
            <MultiCarouselHome locale={locale} />
          </div>

          {/* About Search */}

          <div className="about-search px-12 mb-12">
            <div className=" text-start mt-16 px-2  mb-3">
              <p className="font-bold text-[28px] text-[#1B8693]">
                <FormattedMessage id="about.search" />{" "}
              </p>
              <p className="">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br></br>
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim <br></br> veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea <br></br>{" "}
                commodo consequat. 
              </p>
            </div>
          </div>
        </div>
      </IntlProvider>
    </>
  );
};

export default Homepage;
