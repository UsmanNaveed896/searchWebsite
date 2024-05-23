import React, { useEffect, useState } from "react";
import Img from "../../assets/Rectangle 12.png";
import Img1 from "../../assets/Rectangle 81.png";
import Img2 from "../../assets/Rectangle 123.png";
import Img3 from "../../assets/Vector (4).png";
import Img4 from "../../assets/a.png";
import Img5 from "../../assets/Group 25.png";
import { IntlProvider, FormattedMessage } from "react-intl";
import { messagesEn } from "../../localization/messagesEn";
import { messagesFr } from "../../localization/messagesFr";
import { messagesAr } from "../../localization/messagesAr";
import GoogleMap from "../../components/googlemap/google-map";
import GoogleMaps from "../../components/googlemap/google-map";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Buyhomes = ({ locale }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
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
        <div className="flex justify-center mt-8 pb-12">
          <div className="container max-w-[1400px]">
            <div className="bg-white shadow px-16 py-4 flex justify-between items-center">
              <div className="slect flex ">
                <select className="border border-tl rounded-tl border-bl rounded-bl py-4 px-2">
                  <option>
                    {" "}
                    <FormattedMessage id="Rent" />
                  </option>
                </select>
                <input
                  className="py-4 px-12 border"
                  placeholder="Los Angeles"
                />
                <i className="fa fa-search bg-[#5e81f4] py-4 px-4 text-white border border-tr rounded-tr border-br rounded-br "></i>
              </div>
              <div className="">
                <p>
                  <span>
                    <i className="fa fa-phone mr-2"></i>
                  </span>
                  + 1 (800) 657 8976{" "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 ">
              <div className="column1">
                <p className="text-[12px]">
                  <FormattedMessage id="stays.430" />
                </p>
                <p className="text-[26px] font-bold">
                  <FormattedMessage id="stays.los" />
                </p>
                <div className="flex gap-4 mt-6">
                  <button className="rounded-full px-6 py-2 border text-[12px] font-bold bg-[#ededfe]">
                    <FormattedMessage id="Fee.Cancellation" />
                  </button>
                  <button className="rounded-full px-6 py-2 border text-[12px] ">
                    <FormattedMessage id="price" />
                  </button>
                  <button className="rounded-full px-6 py-2 border text-[12px] ">
                    <FormattedMessage id="Instant.Book" />
                  </button>
                  <i class="fa fa-list-ul text-[26px]" aria-hidden="true"></i>
                </div>

                <div className="card flex gap-4 mt-6">
                  <div
                    class="max-w-[300px] mt-4 rounded-xl shadow px-2">
                      <div className="">
                        <MultiCarousel
                          responsive={responsive}
                          showDots={true}
                          removeArrowOnDeviceType={[
                            "tablet",
                            "mobile",
                            "desktop",
                          ]}
                        >
                          <div>
                            <img className="w-full" src={Img2} />
                          </div>
                          <div>
                            <img className="w-full" src={Img} />
                          </div>
                          <div>
                            <img className="w-full" src={Img2} />
                          </div>
                          <div>
                            <img className="w-full" src={Img} />
                          </div>
                        </MultiCarousel>
                      </div>
                   
                    <div class="p-2">
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
                          4.5 (415 reviews) <span className="mt-2 text-[12px] font-semibold tracking-tight text-[#f7c300]"> Sell</span>
                        </span>
                      </div>
                  
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
                    class="max-w-[300px] mt-4 rounded-xl shadow px-2">
                      <div className="">
                        <MultiCarousel
                          responsive={responsive}
                          showDots={true}
                          removeArrowOnDeviceType={[
                            "tablet",
                            "mobile",
                            "desktop",
                          ]}
                        >
                          <div>
                            <img className="w-full" src={Img2} />
                          </div>
                          <div>
                            <img className="w-full" src={Img} />
                          </div>
                          <div>
                            <img className="w-full" src={Img2} />
                          </div>
                          <div>
                            <img className="w-full" src={Img} />
                          </div>
                        </MultiCarousel>
                      </div>
                   
                    <div class="p-2">
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
                          4.5 (415 reviews) <span className="mt-2 text-[12px] font-semibold tracking-tight text-[#f7c300]"> Sell</span>
                        </span>
                      </div>
                  
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
              </div>
              <div className="column2 border p-2">
                <GoogleMaps />
              </div>
            </div>
          </div>
        </div>
      </IntlProvider>
    </>
  );
};

export default Buyhomes;
