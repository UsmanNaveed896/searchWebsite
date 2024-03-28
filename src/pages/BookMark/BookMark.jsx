import React from "react";
import MultiCarousel from "react-multi-carousel";
import Car from "../../assets/Car 2.png";
import Rect8 from "../../assets/Rectangle 8.png";
import Rect5 from "../../assets/Rectangle 5.png";
import Rect10 from "../../assets/Rectangle 10.png";
import Img6 from "../../assets/Notifications_Outline 1.png";
import { IntlProvider, FormattedMessage } from "react-intl";
import { messagesEn } from "../../localization/messagesEn";
import { messagesFr } from "../../localization/messagesFr";
import { messagesAr } from "../../localization/messagesAr";
const BookMark = ({ locale }) => {
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
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
        <div className="px-8 py-4">
          <div class="flex justify-between items-center">
            <h1 class="text-[#1A1E25] font-Roboto text-3xl font-medium leading-10 tracking-wide">
              <FormattedMessage id="bookMark.home" />
            </h1>
            <div class="flex items-center">
              <i class="fa fa-trash mr-2"></i>
              <span> <FormattedMessage id="Remove" /> </span>
            </div>
          </div>

          <div class="">
            <div class="bg-[#1F5E7C] mt-4 w-full rounded-lg mb-10 flex justify-between">
              <div class="text-white p-8">
                <p class="font-medium text-[16px] font-Poppins">
                <FormattedMessage id="bookmark.3home" />
                </p>
                <p class="font-medium text-[16px] font-Poppins"> <FormattedMessage id="sale.3" /> </p>
              </div>
              <div class="flex flex-col items-start sm:flex-row sm:items-end p-4 sm:p-8">
  <div class="mb-4 sm:mb-0 sm:pr-4">
    <input
      class="bg-transparent mt-1 w-full sm:w-64 px-2 py-2 text-sm sm:text-base font-Poppins font-medium text-[#918C8C] border border-[#FFFFFF] rounded-md"
      placeholder="showing all"
    />
  </div>
  <div>
    <input
      class="bg-transparent mt-1 w-full sm:w-64 px-2 py-2 text-sm sm:text-base font-Poppins font-medium text-[#918C8C] border border-[#FFFFFF] rounded-md"
      placeholder="by date added"
    />
  </div>
</div>

            </div>
          </div>
          <div className="">
            <div className=" mt-12  px-12">
              <div className="carousel">
                <MultiCarousel
                  responsive={responsive}
                  showDots={true}
                  removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                  itemClass="p-3"
                  containerClass="p-0"
                  sliderClass="p-0"
                >
                  <div
                    class="max-w-sm mt-4 rounded-xl flex justify-between flex-col "
                    style={{ boxShadow: shadow }}
                  >
                    <div className="">
                      <div className="flex justify-center">
                        <img className="w-full" src={Rect10} />
                      </div>
                    </div>
                    <div class="p-5">
                      <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                        IDR 200.000.000
                      </h5>
                      <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                        {/* <FormattedMessage id='honda.civic'/> */}
                        <FormattedMessage id="car.detail" />
                      </h5>
                      <h5 className="text-[#FFAC33]"><FormattedMessage id="Sell" /></h5>
                      <div class="flex justify-center">
                        <div class="text-center mr-8">
                          <div class="flex items-center justify-center">
                            <i class="fa fa-bed"></i>
                            <h5 class="ml-2">5</h5>
                          </div>
                          <h5 className="text-xs">
                            <FormattedMessage id="Bedroom" />
                            </h5>
                        </div>
                        <div class="text-center mr-8">
                          <div class="flex items-center justify-center">
                            <i class="fa fa-bath"></i>
                            <h5 class="ml-2">3</h5>
                          </div>
                          <h5 className="text-xs">
                          <FormattedMessage id="Bathroom" />
                          </h5>
                        </div>

                        <div class="text-center">
                          <div class="flex items-center justify-center">
                            <i class="fa fa-home"></i>
                            <h5 class="ml-2">360m</h5>
                          </div>
                          <h5 className="text-xs"><FormattedMessage id="home.area" /></h5>
                        </div>
                      </div>

                      {/* <div class="star-rating flex gap-1 mt-2 items-center">
                      <svg class="star-icon w-5 h-5" fill="#f7c300" viewBox="0 0 20 20">
                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                      </svg>
                      <span class="rating-text text-[12px]">4.5 (415 reviews)</span>
                    </div> */}
                    </div>
                  </div>
                  {/* BREAK */}
                  <div
                    class="max-w-sm mt-4 rounded-xl"
                    style={{ backgroundColor: "#1F5E7C", boxShadow: shadow }}
                  >
                    <div className="">
                      <div className="flex justify-center">
                        <img className="w-full" src={Rect5} />
                      </div>
                    </div>
                    <div class="p-5">
                      <h5 class="mb-1 text-[16px] font-bold tracking-tight text-[white]">
                        IDR 200.000.000
                      </h5>
                      <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight text-[white]">
                        {/* <FormattedMessage id='car.detail'/> */}
                        <FormattedMessage id="car.detail" />
                      </h5>
                      <h5 className="text-[#FFAC33]"><FormattedMessage id="Sell" /></h5>
                      <div class="flex justify-center">
                        <div class="text-center mr-8">
                          <div class="flex items-center justify-center">
                            <i class="fa fa-bed text-[#ffffff]"></i>
                            <h5 class="ml-2 text-[#ffffff]">5</h5>
                          </div>
                          <h5 className="text-[#ffffff] text-xs"><FormattedMessage id="Bedroom" /></h5>
                        </div>
                        <div class="text-center mr-8">
                          <div class="flex items-center justify-center">
                            <i class="fa fa-bath text-[#ffffff]"></i>
                            <h5 class="ml-2 text-[#ffffff]">3</h5>
                          </div>
                          <h5 className="text-[#ffffff] text-xs">
                          <FormattedMessage id="Bathroom" />
                          </h5>
                        </div>

                        <div class="text-center">
                          <div class="flex items-center justify-center">
                            <i class="fa fa-home text-[#ffffff]"></i>
                            <h5 class="ml-2 text-[#ffffff]">360m</h5>
                          </div>
                          <h5 className="text-[#ffffff] text-xs"><FormattedMessage id="home.area" /></h5>
                        </div>
                      </div>
                      {/* <div class="star-rating flex gap-1 mt-2 items-center">
                      {/* <svg class="star-icon w-5 h-5" fill="#f7c300" viewBox="0 0 20 20">
                                            <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                                        </svg> */}
                      {/* <span class="rating-text text-[12px]"></span>
                    </div> */}
                    </div>
                  </div>
                  <div
                    class="max-w-sm mt-4 rounded-xl flex justify-between flex-col"
                    style={{ boxShadow: shadow }}
                  >
                    <div className="">
                      <div className="flex justify-center">
                        <img className="w-full" src={Rect8} />
                      </div>
                    </div>
                    <div class="p-5">
                      <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                        IDR 200.000.000
                      </h5>
                      <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                        {/* <FormattedMessage id='honda.civic'/> */}
                        <FormattedMessage id="car.detail" />
                      </h5>
                      <h5 className="text-[#FFAC33]"><FormattedMessage id="Jual" /></h5>
                      <div class="flex justify-center">
                        <div class="text-center mr-8">
                          <div class="flex items-center justify-center">
                            <i class="fa fa-bed"></i>
                            <h5 class="ml-2">5</h5>
                          </div>
                          <h5 className="text-xs"><FormattedMessage id="Bedroom" /></h5>
                        </div>
                        <div class="text-center mr-8">
                          <div class="flex items-center justify-center">
                            <i class="fa fa-bath"></i>
                            <h5 class="ml-2">3</h5>
                          </div>
                          <h5 className="text-xs">
                            <FormattedMessage id="Bathroom" />
                            </h5>
                        </div>

                        <div class="text-center">
                          <div class="flex items-center justify-center">
                            <i class="fa fa-home"></i>
                            <h5 class="ml-2">360m</h5>
                          </div>
                          <h5 className="text-xs"><FormattedMessage id="home.area" /></h5>
                        </div>
                      </div>
                      {/* <div class="star-rating flex gap-1 mt-2 items-center">
                      <svg class="star-icon w-5 h-5" fill="#f7c300" viewBox="0 0 20 20">
                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                      </svg>
                      <span class="rating-text text-[12px]">4.5 (415 reviews)</span>
                    </div> */}
                    </div>
                  </div>
                </MultiCarousel>
              </div>
            </div>
          </div>
        </div>
      </IntlProvider>
    </>
  );
};
export default BookMark;
