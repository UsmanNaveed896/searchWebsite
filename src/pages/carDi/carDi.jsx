import React, { useState } from "react";
import Car1 from "../../assets/Car1.png";
import Car2 from "../../assets/Car2.png";
import Car3 from "../../assets/Car3.png";
import Car4 from "../../assets/Car4.png";
import MultiCarousel from "react-multi-carousel";
import Inspection from '../../assets/inspection-car-rate-7b4ede752bdfc0e0cd08c3247e7e37a8 1.png'
import Car from '../../assets/Car 2.png'
import "react-multi-carousel/lib/styles.css";
import Img6 from '../../assets/Notifications_Outline 1.png'
import { IntlProvider, FormattedMessage } from 'react-intl';
import {messagesEn} from '../../localization/messagesEn';
import {messagesFr} from '../../localization/messagesFr';
import {messagesAr} from '../../localization/messagesAr';
const CarDi = ({locale}) => {
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
 
  return (
    <IntlProvider locale={locale} messages={locale === 'en' ? messagesEn : locale === 'fr' ? messagesFr : messagesAr}>
      <div className="px-8 py-4">
    
        <h1 className="text-[#1B8693] font-poppins text-3xl font-medium leading-10 tracking-wide">
          <FormattedMessage id="car.title" />
        </h1>
        <div className="flex justify-between pb-10">
          <div className="w-3/4 relative">
            <div className="relative">
              <img src={Car1} alt="Car1" className="h-full w-full" />
              <div className="absolute bottom-0 right-0 mb-2 mr-2">
                <span className="bg-[#ffffff] text-[#1F5E7C] px-2 py-1 rounded-xl text-center font-bold text-[12px]">
                  <FormattedMessage id="see.all" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end w-1/4">
            <img src={Car2} alt="Car2" className="h-1/3" />
            <img src={Car3} alt="Car3" className="h-1/3" />
            <img src={Car4} alt="Car4" className="h-1/3" />
          </div>
        </div>
        <div className="flex justify-center mt-4 pb-8">
          <button
            className="bg-white border border-[#16348C] text-[#16348C] text-[14px] font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            <i className='fa fa-play-circle mr-2'></i>
            <FormattedMessage id="watch.360" />

          </button>
        </div>


        <div className='flex items-center justify-center w-[100%]'>
          <div className='bg-[#F1EEEE] w-[100%] rounded-lg mb-10 pt-4 pb-4' style={{ boxShadow: shadow }}>
            <div className='flex justify-between'>
              <div className="flex flex-col items-center px-7">
                <i className="fa fa-tachometer text-[#757575]"></i>
                <h5 className="text-center"><FormattedMessage id="title.mileage" /></h5>
                <h5 className="text-sm"><FormattedMessage id="mileage.to" /></h5>
              </div>
              <div className="flex flex-col items-center">
                <i className="fa fa-tachometer text-[#757575]"></i>
                <h5 className="text-center"><FormattedMessage id="title.automatic" /></h5>
                <h5 className="text-sm"><FormattedMessage id="title.cvt" /></h5>
              </div>
              <div className="flex flex-col items-center">
                <i className="fa fa-fire text-[#757575]"></i>
                <h5 className="text-center"><FormattedMessage id="fuel.type" /></h5>
                <h5 className="text-sm"><FormattedMessage id="title.petrol" /></h5>
              </div>
              <div className="flex flex-col items-center pr-7">
                <i className="fa fa-cogs text-[#757575]"></i>
                <h5 className="text-center"><FormattedMessage id="title.engine" /></h5>
                <h5 className="text-sm">1498 cc</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start inline-block">
          <div className="border border-black rounded-lg pb-8 flex">
            <div className="flex flex-col w-1/2">
              <p className="pt-4 pl-4 font-bold pb-4"><FormattedMessage id="title.main" /></p>
              <div className="flex items-center pb-4">
                <h1 className="text-[#1B8693] font-bold font-poppins text-3xl leading-10 tracking-wide pl-4">
                  <FormattedMessage id="title.main2" />
                </h1>
                <h1 className="ml-4 text-[#000000] font-poppins text-3xl font-medium leading-10 tracking-wide">
                  <FormattedMessage id="title.main3" />
                </h1>
              </div>
              <p className="font-bold font-poppins pl-4 pb-4">
                <FormattedMessage id="title.inspect" />
              </p>
              <div className="flex items-center pl-4">
                <i className="fa fa-check text-[#1F5E7C]"></i>
                <p className=" pr-12"><FormattedMessage id="title.engine" /></p>
                <i className="fa fa-check text-[#1F5E7C]"></i>
                <p className=""><FormattedMessage id="title.suspension" /></p>
              </div>
              <div className="flex items-center pl-4">
                <i className="fa fa-check text-[#1F5E7C]"></i>
                <p className=" pr-12"><FormattedMessage id="title.exterior" /></p>
                <i className="fa fa-check text-[#1F5E7C]"></i>
                <p className=""><FormattedMessage id="title.interior" /></p>
              </div>
              <div className="pt-8 flex items-center justify-center">
                <button
                  className="bg-[#1F5E7C] text-white text-[14px] rounded-lg px-4 py-2"
                  type="button"
                >
                  <FormattedMessage id='schedule.inspection' />
                </button>
              </div>
            </div>
            <div className="hidden md:block w-1/2">
              <img src={Inspection} className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-8">
  <div className="bg-[#F1EEEE] w-full sm:w-auto rounded-lg mb-10 pt-4 pb-4" style={{ boxShadow: shadow }}>
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col items-center px-4 sm:px-12">
        <div className="h-12 w-12 rounded-full bg-[#B31B1B] "></div>
        <h5 className="text-center"><FormattedMessage id="color.red" /></h5>
      </div>
      <div className="flex flex-col items-center px-4 sm:px-12">
        <div className="h-12 w-12 rounded-full bg-[#080C12] "></div>
        <h5 className="text-center"><FormattedMessage id="color.black" /></h5>
      </div>
      <div className="flex flex-col items-center px-4 sm:px-12">
        <div className="h-12 w-12 rounded-full bg-[#D8D8E0] "></div>
        <h5 className="text-center"><FormattedMessage id="color.silver" /></h5>
      </div>
      <div className="flex flex-col items-center px-4 sm:px-12">
        <div className="h-12 w-12 rounded-full bg-[#61616C] "></div>
        <h5 className="text-center"><FormattedMessage id="color.grey" /></h5>
      </div>
      <div className="flex flex-col items-center px-4 sm:px-12">
        <div className="h-12 w-12 rounded-full bg-[#7B95AE] "></div>
        <h5 className="text-center"><FormattedMessage id="color.blue" /></h5>
      </div>
      <div className="flex flex-col items-center px-4 sm:px-12">
        <div className="h-12 w-12 rounded-full bg-[#FFFFFF] "></div>
        <h5 className="text-center"><FormattedMessage id="color.white" /></h5>
      </div>
      <div className="flex flex-col items-center px-4 sm:px-12">
        <div className="h-12 w-12 rounded-full bg-[#B1B1B3] "></div>
        <h5 className="text-center"><FormattedMessage id="color.metalic" /></h5>
      </div>
    </div>
  </div>
</div>


        <h1 className="text-[#1B8693] font-poppins text-3xl font-medium leading-10 tracking-wide pt-10 pb-6">
          <FormattedMessage id='car.info' />
        </h1>
        <div className="flex justify-between pb-2">
          <div className="border-t border-solid border-black w-2/6"></div>
          <div className="border-t border-solid border-black w-2/6 mx-auto"></div>
        </div>
        <div className="flex justify-between pb-2">
          <div className="w-2/6">
            <div className="flex justify-between">
              <p><FormattedMessage id="registered.in" /></p>
              <p><FormattedMessage id="title.usa" /></p>
            </div>
          </div>
          <div className="w-2/6 mx-auto">
            <div className="flex justify-between">
              <p><FormattedMessage id="title.color" /></p>
              <p><FormattedMessage id="title.blue" /></p></div>
          </div>
        </div>
        <div className="flex justify-between pb-2">
          <div className="border-t border-solid border-black w-2/6"></div>
          <div className="border-t border-solid border-black w-2/6 mx-auto"></div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="border-t border-solid border-black w-2/6"></div>
          <div className="border-t border-solid border-black w-2/6 mx-auto"></div>
        </div>
        <div className="flex justify-between pt-2">
          <div className="w-2/6">
            <div className="flex justify-between">
              <p><FormattedMessage id="title.Assembly"/></p>
              <p><FormattedMessage id="title.Imported"/></p>
            </div>
          </div>
          <div className="w-2/6 mx-auto">
            <div className="flex justify-between pb-2">
              <p><FormattedMessage id="engine.capacity"/></p>
              <p>1498cc</p></div>
          </div>
        </div>
        <div className="flex justify-between pb-2">
          <div className="border-t border-solid border-black w-2/6"></div>
          <div className="border-t border-solid border-black w-2/6 mx-auto"></div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="border-t border-solid border-black w-2/6"></div>
          <div className="border-t border-solid border-black w-2/6 mx-auto"></div>
        </div>
        <div className="flex justify-between pt-2">
          <div className="w-2/6">
            <div className="flex justify-between">
              <p><FormattedMessage id="body.type"/></p>
              <p><FormattedMessage id="title.sedan"/></p>
            </div>
          </div>
          <div className="w-2/6 mx-auto">
            <div className="flex justify-between">
              <p><FormattedMessage id='last.updated'/></p>
              <p>Feb 21, 2024</p></div>
          </div>
        </div>
        <div className="flex justify-between pt-2">
          <div className="border-t border-solid border-black w-2/6"></div>
          <div className="border-t border-solid border-black w-2/6 mx-auto"></div>
        </div>
        <h1 className="text-[#1B8693] font-poppins text-3xl font-medium leading-10 tracking-wide pt-8 pb-8">
        <FormattedMessage id='car.features'/>
        </h1>
        <ul>
          <li className="inline-block fa fa-car text-[#757575] pr-4"></li>
          <li className="inline-block"><span className="inline-block pr-8">ABS</span></li>
          <li className="inline-block fa fa-headphones text-[#757575]"></li>
          <li className="inline-block"><span className="inline-block pl-4 pr-8"><FormattedMessage id="am.fm.radio"/></span></li>
          <li className="inline-block fa fa-exclamation-triangle text-[#757575]"></li>
          <li className="inline-block"><span className="inline-block pl-4 pr-8"><FormattedMessage id='air.bags'/></span></li>
        </ul>
        <ul>
          <li className="inline-block fa fa-snowflake-o text-[#757575] pr-4"></li>
          <li className="inline-block"><span className="inline-block pr-8"><FormattedMessage id='air.conditioning'/></span></li>
          <li className="inline-block fa fa-circle text-[#757575]"></li>
          <li className="inline-block"><span className="inline-block pl-4 pr-8"><FormattedMessage id='alloy.rims'/></span></li>
          <li className="inline-block fa fa-music text-[#757575]"></li>
          <li className="inline-block"><span className="inline-block pl-4 pr-8"><FormattedMessage id='cd.player'/></span></li>
        </ul>
        <h1 className="text-[#1B8693] font-poppins text-3xl font-medium leading-10 tracking-wide  pt-8 pb-8">
        <FormattedMessage id='seller.comment'/>
        </h1>
        <FormattedMessage id="seller.des"/>
          <h1 className="text-[#1B8693] font-poppins text-3xl font-medium leading-10 tracking-wide  pt-8 ">
          <FormattedMessage id='similar.ads'/>
        </h1>
        <div className=''>
          <div className=' mt-12  px-12'>
            <div className='carousel'>
              <MultiCarousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} itemClass="p-3" containerClass="p-0" sliderClass="p-0">
                <div class="max-w-sm mt-4 rounded-xl flex justify-between flex-col "
                  style={{ boxShadow: shadow }} >
                  <div className=''>
                    <div className='flex justify-center'>
                      <img className='w-full' src={Img6} />
                    </div>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                      $ 200.000.000</h5>
                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                    <FormattedMessage id='honda.civic'/>
                    </h5>
                    <div class="star-rating flex gap-1 mt-2 items-center">
                      <svg class="star-icon w-5 h-5" fill="#f7c300" viewBox="0 0 20 20">
                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                      </svg>
                      <span class="rating-text text-[12px]">4.5 (415 reviews)</span>
                    </div>

                  </div>

                </div>
                {/* BREAK */}
                <div class="max-w-sm mt-4 rounded-xl"
                  style={{ backgroundColor: '#1F5E7C', boxShadow: shadow }} >
                  <div className=''>
                    <div className='flex justify-center'>
                      <img className='w-full' src={Car} />
                    </div>
                  </div>
                  <div class="p-5 pb-12">
                    <h5 class="mb-1 text-[16px] font-bold tracking-tight text-[white]">
                      $ 200.000.000</h5>
                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight text-[white]">
                    <FormattedMessage id='car.detail'/>
                    </h5>
                    <div class="star-rating flex gap-1 mt-2 items-center">
                      {/* <svg class="star-icon w-5 h-5" fill="#f7c300" viewBox="0 0 20 20">
                                            <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                                        </svg> */}
                      <span class="rating-text text-[12px]"></span>
                    </div>
                  </div>
                </div>
                <div class="max-w-sm mt-4 rounded-xl flex justify-between flex-col"
                  style={{ boxShadow: shadow }} >
                  <div className=''>
                    <div className='flex justify-center'>
                      <img className='w-full' src={Img6} />
                    </div>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                      $ 200.000.000</h5>
                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                    <FormattedMessage id='honda.civic'/></h5>
                    <div class="star-rating flex gap-1 mt-2 items-center">
                      <svg class="star-icon w-5 h-5" fill="#f7c300" viewBox="0 0 20 20">
                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                      </svg>
                      <span class="rating-text text-[12px]">4.5 (415 reviews)</span>
                    </div>

                  </div>

                </div>
              </MultiCarousel>
            </div>
          </div>
        </div>

      </div>
    </IntlProvider>
  );
};
export default CarDi;