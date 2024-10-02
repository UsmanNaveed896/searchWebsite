import React, { useEffect, useRef, useState } from "react";
import Img from "../../assets/house.jpg";
import MultiCarousel from "react-multi-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img1 from "../../assets/Rectangle 22.png";
import Img3 from "../../assets/Rectangle 5.png";
import Img4 from "../../assets/Rectangle 8.png";
import Img5 from "../../assets/Rectangle 10.png";
import Img6 from "../../assets/Notifications_Outline 1.png";
import Img7 from "../../assets/Data processing _Outline 1.png";
import Img8 from "../../assets/Startup_Outline-2 1.png";
import Img9 from "../../assets/Rectangle 10.png";
import Img10 from "../../assets/Group9.svg";
import Img11 from "../../assets/Group 10.svg";
import Img12 from "../../assets/Group 11.svg";
import Img13 from "../../assets/Group 12.png";

import OurServices from "./ourservices";
import MultiCarouselHome from "./multi-carousel";
import { IntlProvider, FormattedMessage } from "react-intl";
import { messagesEn } from "../../localization/messagesEn";
import { messagesFr } from "../../localization/messagesFr";
import { messagesAr } from "../../localization/messagesAr";
import Popup from "../../components/popup/popup";
import Stories from "../../components/popup/stories";
// import LiveStream from "../../components/live-stream/live-stream";
import axios from "axios";
import "../../App.css";
import { useGetAdHook } from "../../hooks/useGetAdHook";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import LiveStreamingSection from "../../components/livestreamSection/liveStreamSection";
import OurServicesSection from "../../components/ourservicesSection/ourServices";
import PropertyCard from "../../components/cards/propertyCard";
import { cars, furniture } from "../../dummyData/dummyData";
import CarsCard from "../../components/cards/carsCard";
import FurnitureCard from "../../components/cards/furnitureCard";
import WhyChooseUs from "../../components/whychooseus/whychooseus";
import BlogSection from "../../components/blogSection/blogSection";
import TestimonialSection from "../../components/testimonialSections/testimonialSection";
const Homepage = ({ locale, showPopup, setShowPopup }) => {
  const useGetAdDetails = useGetAdHook();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const [stories, setStories] = useState();

  const openModal = (mediaUrl, isVideo) => {
    setSelectedMedia(mediaUrl);
    setIsVideo(isVideo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMedia(null);
  };
  useEffect(() => {
    useGetAdDetails.getCarAds();
    useGetAdDetails.getPropertyAds();
  }, []);
  const cardsData = [
    {
      title: "Home inspections",
      icon: Img10,
    },
    {
      title: "Property insurance",
      icon: Img11,
    },
    {
      title: "Best location",
      icon: Img12,
    },
    {
      title: "Lots & land",
      icon: Img13,
    },
  ];
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
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const getAllStories = async () => {
    try {
      const response = await axios.get(
        "https://searchapi.codematesolution.com/api/v1/stories"
      );
      setStories(response?.data?.data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };
  useEffect(() => {
    getAllStories();
  }, []);
  const properties = [
    {
      id: 1,
      location: "New York, USA",
      beds: 8,
      size: "10*10",
      rooms: 6,
      price: 5200,
      imageUrl: Img,
    },
    {
      id: 2,
      location: "Los Angeles, USA",
      beds: 5,
      size: "12*12",
      rooms: 4,
      price: 4500,
      imageUrl: Img3,
    },
    {
      id: 3,
      location: "Miami, USA",
      beds: 6,
      size: "8*10",
      rooms: 5,
      price: 4700,
      imageUrl: Img4,
    },
    {
      id: 4,
      location: "San Francisco, USA",
      beds: 7,
      size: "9*11",
      rooms: 5,
      price: 4900,
      imageUrl: Img5,
    },
  ];
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
        <div className="homepage relative">
          {/* <div className="images mt-12 px-12 pb-4">
            {stories?.stories?.length > 0 ? (
              <Carousel
                responsive={newresponsive}
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {stories?.stories?.map((item, index) => (
                  <div className="relative img" key={index}>
                    <div
                      className="flex justify-center items-center h-[250px] cursor-pointer"
                      onClick={() =>
                        openModal(item?.media, item?.media?.includes(".mp4"))
                      }
                    >
                      <div className="relative h-[250px] w-[200px]">
                        {item?.media?.includes(".mp4") ? (
                          <video
                            src={item?.media}
                            className="rounded-xl h-[250px] w-[200px] object-cover"
                            alt="Media Thumbnail"
                            muted
                          />
                        ) : (
                          <img
                            src={item?.media}
                            alt="Media Thumbnail"
                            className="rounded-xl h-[250px] w-[200px] object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
                          <span className="text-white text-sm text-center font-semibold">
                            {item?.content || "Title"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            ) : (
              <div className="flex justify-center items-center h-[250px]">
                <p>No stories available</p>
              </div>
            )}
          </div> */}

          {/* <div
            className=" bg-center h-full pb-16"
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
                  <div className="flex justify-center items-center md:grid-cols-4 grid grid-cols-1">
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
          </div> */}

          <div className="relative h-screen flex">
            {/* Green background half */}
            <div className="w-1/2 bg-[#204151] "></div>

            {/* Image background half */}
            <div
              className="w-1/2 bg-cover bg-center"
              style={{ backgroundImage: `url(${Img})` }}
            ></div>

            {/* Overlay for text and content */}
            <div className="absolute inset-0 flex justify-center">
              <div className="container max-w-[1050px]">
                <div className=" px-4 text-white z-10">
                  {/* Heading Section */}
                  <div className="mt-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-widest">
                      Find your next dream home
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla <br></br>
                      facilisi. Vestibulum ante ipsum primis in faucibus orci
                      luctus et <br></br> ultrices posuere cubilia Curae.
                    </p>
                  </div>

                  {/* Search Section */}
                  <div className="bg-white rounded-lg p-8 shadow-lg w-7xl mt-32">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                      {/* Category Dropdown */}
                      <select className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/4 text-gray-700 bg-[#f6f6f6] text-semibold">
                        <option>Category</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                      </select>

                      {/* Property Type Dropdown */}
                      <select className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/4 text-gray-700 bg-[#f6f6f6] text-semibold">
                        <option>Property Type</option>
                        <option>House</option>
                        <option>Apartment</option>
                      </select>

                      {/* Location Dropdown */}
                      <select className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/4 text-gray-700 bg-[#f6f6f6] text-semibold">
                        <option>Location</option>
                        <option>New York</option>
                        <option>Los Angeles</option>
                      </select>

                      {/* Search Button */}
                      <button className="bg-[#1f5e7d] text-white px-6 py-2 rounded-xl flex gap-4 items-center justify-center w-full md:w-1/6">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                        <span className="mr-2">Search</span>
                      </button>
                    </div>
                  </div>

                  {/* Checkbox Section */}
                  <div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600 w-5 h-5" // Increased width and height
                      />
                      <span className="ml-2">
                        Only Properties in exclusive representation
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600 w-5 h-5" // Increased width and height
                      />
                      <span className="ml-2">Only new development</span>
                    </label>
                  </div>
                </div>

                <div className="flex  justify-between space-x-4 mt-[7rem]">
                  {cardsData.map((card, index) => (
                    <div
                      key={index}
                      className="border rounded-lg shadow-lg p-6 w-64 text-center bg-white flex justify-between items-center"
                    >
                      {/* Icon Section */}
                      <div>
                        <div className="flex justify-center mb-4">
                          <div className="p-4 rounded-full">
                            <img src={card.icon} alt="icon" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold mb-4">
                          {card.title}
                        </h3>

                        {/* Bottom Border Decoration */}
                        <div className="border-t-2 border-blue-600 mx-auto w-16 mt-4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* STORIES */}
          <div className="images px-12 pb-4 pt-[6rem] bg-[#eef2fb]">
            {stories?.stories?.length > 0 ? (
              <Carousel
                responsive={newresponsive}
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {stories?.stories?.map((item, index) => (
                  <div className="relative img" key={index}>
                    <div
                      className="flex justify-center items-center h-[250px] cursor-pointer"
                      onClick={() =>
                        openModal(item?.media, item?.media?.includes(".mp4"))
                      }
                    >
                      <div className="relative h-[250px] w-[200px]">
                        {item?.media?.includes(".mp4") ? (
                          <video
                            src={item?.media}
                            className="rounded-xl h-[250px] w-[200px] object-cover"
                            alt="Media Thumbnail"
                            muted
                          />
                        ) : (
                          <img
                            src={item?.media}
                            alt="Media Thumbnail"
                            className="rounded-xl h-[250px] w-[200px] object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
                          <span className="text-white text-sm text-center font-semibold">
                            {item?.content || "Title"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            ) : (
              <div className="flex justify-center items-center h-[250px]">
                <p>No stories available</p>
              </div>
            )}
          </div>
          <div className="flex justify-evenly px-4 md:px-0 bg-[#eef2fb]">
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
                        <div className="absolute top-[11rem] right-[-7rem]">
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
                        <div className="absolute md:top-[11rem] top-[9rem] md:right-[-7rem] right-[-7rem]">
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
                        <div className="absolute top-[11rem] right-[-7rem]">
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
                        <div className="absolute top-[11rem] right-[-7rem]">
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
                        <div className="absolute top-[11rem] right-[-7rem]">
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
                        <div className="absolute top-[11rem] right-[-7rem]">
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

              <LiveStreamingSection />
              <div className="flex justify-center mt-4">
                {/* <video width="640" height="360" controls>
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                {/* <LiveStream /> */}
              </div>

              {/*News For You Card */}
              <div>
                <div className="flex justify-between items-center mb-6 mt-[4rem]">
                  <h2 className="text-4xl font-bold">News recommendation</h2>
                  <a href="#" className="text-blue-600 flex items-center">
                    Explore All
                  </a>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-3 grid-cols-1 ">
                <div class="max-w-xs mt-4 rounded-xl bg-white h-[420px]">
                  <div className="p-2">
                    <div className="flex justify-center">
                      <img className=" rounded h-[220px]" src={Img6} />
                    </div>
                  </div>
                  <div class="px-5 text-black">
                    <h5 class="mb-1 text-[14px] font-semibold tracking-tight text-[#3652f0]">
                      Technology
                    </h5>
                    <h5 class="mb-1 text-[16px]  font-semibold tracking-tight">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </h5>
                  </div>
                </div>
                <div class="max-w-xs mt-4 rounded-xl bg-white h-[420px]">
                  <div className="p-2">
                    <div className="flex justify-center">
                      <img className=" rounded h-[220px]" src={Img7} />
                    </div>
                  </div>
                  <div class="px-5 text-black">
                    <h5 class="mb-1 text-[14px] font-semibold tracking-tight text-[#3652f0]">
                      Technology
                    </h5>
                    <h5 class="mb-1 text-[16px]  font-semibold tracking-tight">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </h5>
                  </div>
                </div>
                <div class="max-w-xs mt-4 rounded-xl bg-white h-[420px]">
                  <div className="p-2">
                    <div className="flex justify-center">
                      <img className=" rounded h-[220px]" src={Img8} />
                    </div>
                  </div>
                  <div class="px-5 text-black">
                    <h5 class="mb-1 text-[14px] font-semibold tracking-tight text-[#3652f0]">
                      Technology
                    </h5>
                    <h5 class="mb-1 text-[16px]  font-semibold tracking-tight">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </h5>
                  </div>
                </div>
                <div class="max-w-xs mt-4 rounded-xl bg-white h-[420px]">
                  <div className="p-2">
                    <div className="flex justify-center">
                      <img className=" rounded h-[220px]" src={Img9} />
                    </div>
                  </div>
                  <div class="px-5 text-black">
                    <h5 class="mb-1 text-[14px] font-semibold tracking-tight text-[#3652f0]">
                      Technology
                    </h5>
                    <h5 class="mb-1 text-[16px]  font-semibold tracking-tight">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </h5>
                  </div>
                </div>
              </div>
              <OurServicesSection />
              {/*Homes For You Card */}
              <div className="flex justify-between items-center mb-6 mt-[4rem]">
                <h2 className="text-4xl font-bold">Best recommendation</h2>
                <a href="#" className="text-blue-600 flex items-center">
                  Explore All
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/*Cars For You Card */}
              <div className="flex justify-between items-center mb-6 mt-[4rem]">
                <h2 className="text-4xl font-bold">Best recommendation</h2>
                <a href="#" className="text-blue-600 flex items-center">
                  Explore All
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {cars.map((property) => (
                  <CarsCard key={property.id} property={property} />
                ))}
              </div>
              <div className="flex justify-between items-center mb-6 mt-[4rem]">
                <h2 className="text-4xl font-bold">Best recommendation</h2>
                <a href="#" className="text-blue-600 flex items-center">
                  Explore All
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {furniture.map((property) => (
                  <FurnitureCard key={property.id} property={property} />
                ))}
              </div>
              <p
                className=" mb-5 text-[#1B8693] text-center text-[15px] font-bold mt-4 cursor-pointer hover:underline"
                onClick={() => navigate("/car-listing")}
              >
                <FormattedMessage id="more" />
              </p>
            </div>
          </div>

          {/* About Search */}

          <WhyChooseUs />
          <div className="flex justify-evenly px-4 md:px-0 bg-[#eef2fb]">
            <div className="container max-w-[1200px] mt-16">
              <BlogSection />
              <TestimonialSection/>
            </div>
          </div>
          {modalIsOpen && (
            <Stories
              isOpen={modalIsOpen}
              closeModal={closeModal}
              selectedMedia={selectedMedia}
              isVideo={isVideo}
            />
          )}
        </div>
      </IntlProvider>
    </>
  );
};

export default Homepage;
