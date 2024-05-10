import React from 'react'
import Img from '../../assets/Group 1.png'
import Img1 from '../../assets/Group 6.png'
import { IntlProvider, FormattedMessage } from 'react-intl';
import {messagesEn} from '../../localization/messagesEn';
import {messagesFr} from '../../localization/messagesFr';
import {messagesAr} from '../../localization/messagesAr';
const Ourservices = ({ locale }) => {
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';

    return (
        <>
          <IntlProvider locale={locale} messages={locale === 'en' ? messagesEn : locale === 'fr' ? messagesFr : messagesAr}>
            <div className='bg-[#ecf4fd] pb-12 px-4 md:px-0'>
                <div className='flex justify-evenly'>
                    <div className='container max-w-[1000px] mt-12  '>
                        <div className=' text-center mt-16  mb-3'>
                            <p className='font-bold text-[28px] text-[#1B8693]'><FormattedMessage id="our.services" /></p>
                            <p className=' font-semibold mb-6'><FormattedMessage id="services.text1" /><br></br><FormattedMessage id="services.text2" /></p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <div class="max-w-sm mt-4 rounded-xl bg-[#1B8693]"
                                style={{ boxShadow: shadow }} >
                                <div className=''>
                                    <div className='flex justify-center items-center '>
                                        <div>
                                            <img className='w-full mt-12' src={Img} />
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5 text-center text-white">
                                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                                    <FormattedMessage id="buy.home" /></h5>
                                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                                    <FormattedMessage id="protect.yourhome" /></h5>
                                    <div class=" flex justify-center ">
                                        <button className='text-[#1B8693] rounded py-1 mt-5 px-4 font-bold bg-white'><FormattedMessage id="Browse.Home" /></button>
                                    </div>
                                </div>
                            </div>
                            <div class="max-w-sm mt-4 rounded-xl "
                                style={{ boxShadow: shadow }} >
                                <div className=''>
                                    <div className='flex justify-center items-center '>
                                        <div>
                                            <img className='w-full mt-12' src={Img1} />
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5 text-center ">
                                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                                    <FormattedMessage id="sell.home" /></h5>
                                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                                    <FormattedMessage id="sell.text" /></h5>
                                    <div class=" flex justify-center ">
                                        <button className='text-[white] rounded py-1 mt-5 px-4 font-bold bg-[#1B8693]'><FormattedMessage id="Browse.Home" /></button>
                                    </div>
                                </div>

                            </div>

                            <div class="max-w-sm mt-4 rounded-xl "
                                style={{ boxShadow: shadow }} >
                                <div className=''>
                                    <div className='flex justify-center items-center '>
                                        <div>
                                            <img className='w-full mt-12' src={Img1} />
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5 text-center ">
                                    <h5 class="mb-1 text-[16px] font-bold tracking-tight">
                                    <FormattedMessage id="sell.buy.car" /></h5>
                                    <h5 class="mb-1 text-[12px] mt-2 font-semibold tracking-tight">
                                    <FormattedMessage id="sell.txt" /></h5>
                                    <div class=" flex justify-center ">
                                        <button className='text-[white] rounded py-1 mt-5 px-4 font-bold bg-[#1B8693]'><FormattedMessage id="Browse.Home" /></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <p className=' mb-5 text-[#1B8693] text-center text-[15px] font-bold mt-4'><FormattedMessage id="more" /></p>
            </div>
            </IntlProvider>
        </>
    )
}

export default Ourservices