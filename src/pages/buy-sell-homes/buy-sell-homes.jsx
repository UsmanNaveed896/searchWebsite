import React, { useEffect, useState } from "react";
import Img from "../../assets/Rectangle 12.png";
import Img1 from "../../assets/Rectangle 81.png";
import Img2 from "../../assets/Rectangle 123.png";
import { IntlProvider, FormattedMessage } from "react-intl";
import { messagesEn } from "../../localization/messagesEn";
import { messagesFr } from "../../localization/messagesFr";
import { messagesAr } from "../../localization/messagesAr";
import GoogleMap from "../../components/googlemap/google-map";
import GoogleMaps from "../../components/googlemap/google-map";


const Buyhomes = ({ locale }) => {
  
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
        <div className="flex justify-center mt-8">
          <div className="container max-w-[1200px]">
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
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="column1">
                <p className="text-[12px]">
                  <FormattedMessage id="stays.430" />
                </p>
                <p className="text-[26px] font-bold">
                  <FormattedMessage id="stays.los" />
                </p>
                <div className="flex justify-between mt-6">
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

                <div className="card mt-6">
                  <div class="mt-4 border px-2 py-2 shadow rounded-xl flex items-start">
                    <div className="">
                      <img className="" src={Img} />
                    </div>
                    <div class="py-2 px-4  text-[14px]">
                      <h5 class="mb-1  font-semibold tracking-tight">
                        <FormattedMessage id="furnished.apartment" />
                      </h5>
                      <div class="star-rating flex gap-1 mt-6 items-center">
                        <svg
                          class="star-icon w-5 h-5"
                          fill="#f7c300"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                        </svg>
                        <span class="rating-text text-[12px]">
                          4.5 (415 <FormattedMessage id="reviews" />)
                        </span>
                      </div>
                      <h5 class=" tracking-tight mt-6 ">
                        <FormattedMessage id="guests.2" /> |{" "}
                        <FormattedMessage id="bedroom.1" /> |{" "}
                        <FormattedMessage id="bathroom.2" />{" "}
                      </h5>

                      <h5 class=" tracking-tight mt-6 ">
                        <FormattedMessage id="entire.studio" />{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="card mt-6">
                  <div class="mt-4 border px-2 py-2 shadow rounded-xl flex items-start">
                    <div className="">
                      <img className="" src={Img2} />
                    </div>
                    <div class="py-2 px-4  text-[14px]">
                      <h5 class="mb-1  font-semibold tracking-tight">
                        <FormattedMessage id="furnished.apartment" />
                      </h5>
                      <div class="star-rating flex gap-1 mt-6 items-center">
                        <svg
                          class="star-icon w-5 h-5"
                          fill="#f7c300"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                        </svg>
                        <span class="rating-text text-[12px]">
                          4.5 (415 <FormattedMessage id="reviews" />)
                        </span>
                      </div>
                      <h5 class=" tracking-tight mt-6 ">
                        <FormattedMessage id="guests.2" /> |{" "}
                        <FormattedMessage id="bedroom.1" /> |{" "}
                        <FormattedMessage id="bathroom.2" />{" "}
                      </h5>
                      <h5 class=" tracking-tight mt-6 ">
                        <FormattedMessage id="entire.studio" />{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column2">
               <GoogleMaps/>
              </div>
            </div>
          </div>
        </div>
      </IntlProvider>
    </>
  );
};

export default Buyhomes;
