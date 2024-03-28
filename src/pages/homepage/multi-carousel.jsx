import React from 'react'
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img3 from '../../assets/Vector (4).png'
import Img4 from '../../assets/a.png'
import Img5 from '../../assets/Group 25.png'
import Img6 from '../../assets/Notifications_Outline 1.png'
import Img9 from '../../assets/Rectangle 10.png'
import { IntlProvider, FormattedMessage } from 'react-intl';
import {messagesEn} from '../../localization/messagesEn';
import {messagesFr} from '../../localization/messagesFr';
import {messagesAr} from '../../localization/messagesAr';
const MultiCarouselHome = ({ locale }) => {
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
         <IntlProvider locale={locale} messages={locale === 'en' ? messagesEn : locale === 'fr' ? messagesFr : messagesAr}>
            <div className=' text-center mt-16  mb-3'>
                <p className='font-bold text-[28px] text-[#1B8693]'><FormattedMessage id="homes.cars" /></p>
                <p className=' font-semibold'><FormattedMessage id="homes.viewed" /></p>
            </div>
            <div className=''>
                <div className=' mt-12  px-12'>
                    <div className='carousel'>
                        <MultiCarousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
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
                                    <FormattedMessage id="honda.civic" /></h5>
                                    <div class="star-rating flex gap-1 mt-2 items-center">
                                        <svg class="star-icon w-5 h-5" fill="#f7c300" viewBox="0 0 20 20">
                                            <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                                        </svg>
                                        <span class="rating-text text-[12px]">4.5 (415 <FormattedMessage id="reviews" />)</span>
                                    </div>

                                </div>

                            </div>

                            <div class="max-w-sm mt-4 rounded-xl  "
                                style={{ boxShadow: shadow }} >
                                <div className=''>
                                    <div className='flex justify-center'>
                                        <img className='w-full' src={Img9} />
                                    </div>
                                </div>
                                <div class="px-5 py-1">
                                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                                        IDR 200.000.000</h5>
                                    <h5 class="mb-1 text-[12px] mt-1 font-semibold tracking-tight">
                                    <FormattedMessage id="car.detail" /></h5>
                                    <div class="star-rating flex gap-1 mt-1 items-center">
                                        <svg class="star-icon w-5 h-5" fill="#f7c300" viewBox="0 0 20 20">
                                            <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                                        </svg>
                                        <span class="rating-text text-[12px]">4.5 (415 <FormattedMessage id="reviews" />)</span>
                                    </div>
                                    <h5 class="mb-1 mt-1 text-[12px] font-semibold tracking-tight text-[#f7c300]">
                                    <FormattedMessage id="Sell" /></h5>
                                </div>
                                <div className='flex justify-between px-5 mb-2'>
                                    <div className='flex gap-2 items-center'>
                                        <div>
                                            <img src={Img3} alt='abc' />
                                            <p className='font-bold text-[12px]'> <FormattedMessage id="Bedroom" /></p>
                                        </div>
                                        <p className='font-bold text-[12px]'>1</p>
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                        <div>
                                            <img src={Img4} alt='abc' />
                                            <p className='font-bold text-[12px]'> <FormattedMessage id="Washroom" /></p>
                                        </div>
                                        <p className='font-bold text-[12px]'>2</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <div>
                                            <img src={Img5} alt='abc' />
                                            <p className='font-bold text-[12px]'> <FormattedMessage id="home.area" /></p>
                                        </div>
                                        <p className='font-bold text-[12px]'>360m</p>
                                    </div>
                                </div>
                            </div>
                            {/* BREAK */}
                            <div class="max-w-sm mt-4 rounded-xl"
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
                                    <FormattedMessage id="honda.civic" /></h5>
                                    <div class="star-rating flex gap-1 mt-2 items-center">
                                        <svg class="star-icon w-5 h-5" fill="#f7c300" viewBox="0 0 20 20">
                                            <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                                        </svg>
                                        <span class="rating-text text-[12px]">4.5 (415 <FormattedMessage id="reviews" />)</span>
                                    </div>
                                </div>
                            </div>

                            <div class="max-w-sm mt-4 rounded-xl  "
                                style={{ boxShadow: shadow }} >
                                <div className=''>
                                    <div className='flex justify-center'>
                                        <img className='w-full' src={Img9} />
                                    </div>
                                </div>
                                <div class="px-5 py-1">
                                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                                        IDR 200.000.000</h5>
                                    <h5 class="mb-1 text-[12px] mt-1 font-semibold tracking-tight">
                                    <FormattedMessage id="car.detail" /></h5>
                                    <div class="star-rating flex gap-1 mt-1 items-center">
                                        <svg class="star-icon w-5 h-5" fill="#f7c300" viewBox="0 0 20 20">
                                            <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                                        </svg>
                                        <span class="rating-text text-[12px]">4.5 (415 <FormattedMessage id="reviews" />)</span>
                                    </div>
                                    <h5 class="mb-1 mt-1 text-[12px] font-semibold tracking-tight text-[#f7c300]">
                                    <FormattedMessage id="Sell" /></h5>
                                </div>
                                <div className='flex justify-between px-5 mb-2'>
                                    <div className='flex gap-2 items-center'>
                                        <div>
                                            <img src={Img3} alt='abc' />
                                            <p className='font-bold text-[12px]'> <FormattedMessage id="Bedroom" /></p>
                                        </div>
                                        <p className='font-bold text-[12px]'>1</p>
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                        <div>
                                            <img src={Img4} alt='abc' />
                                            <p className='font-bold text-[12px]'> <FormattedMessage id="Washroom" /></p>
                                        </div>
                                        <p className='font-bold text-[12px]'>2</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <div>
                                            <img src={Img5} alt='abc' />
                                            <p className='font-bold text-[12px]'> <FormattedMessage id="home.area" /></p>
                                        </div>
                                        <p className='font-bold text-[12px]'>360m</p>
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
                                    <FormattedMessage id="honda.civic" /></h5>
                                    <div class="star-rating flex gap-1 mt-2 items-center">
                                        <svg class="star-icon w-5 h-5" fill="#f7c300" viewBox="0 0 20 20">
                                            <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                                        </svg>
                                        <span class="rating-text text-[12px]">4.5 (415 <FormattedMessage id="reviews" />)</span>
                                    </div>

                                </div>

                            </div>
                        </MultiCarousel>
                    </div>
                </div>
            </div>
            </IntlProvider>
        </>
    )
}

export default MultiCarouselHome