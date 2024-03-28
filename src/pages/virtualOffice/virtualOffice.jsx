import React from 'react'
import Img from '../../assets/Hero-person.png'
import Image1 from '../../assets/Group 1000000930.png'
import VirtualOfficeheader from '../../components/header/virtualOfficeheader';
import { IntlProvider, FormattedMessage } from 'react-intl';
import {messagesEn} from '../../localization/messagesEn';
import {messagesFr} from '../../localization/messagesFr';
import {messagesAr} from '../../localization/messagesAr';
const VirtualOffice = ({ locale }) =>  {
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';

    return (
        <IntlProvider locale={locale} messages={locale === 'en' ? messagesEn : locale === 'fr' ? messagesFr : messagesAr}>
        <div className=''>
            <VirtualOfficeheader locale={locale}/>
            <div className=' bg-cover h-screen pb-16' style={{ backgroundImage: `url(${Img})` }}>
                <div className='container max-w-[1000px] pt-40 pl-10'>
                    <h1 className='font-bold text-[42px] font-Poppins leading-[60px] text-[#1F5E7C]'>
                        <FormattedMessage id="great.agent" />
                        <br></br> <FormattedMessage id="all.differences" /></h1>
                    <p className='mt-2 text-[#FFFFFF] font-Poppins text-[16px]'>"Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, sed do eiusmod tempor incididunt <br></br> ut labore et dolore magna aliqua.
                    </p>
                    <button className='text-[#FFFFFF] bg-[#1F5E7C] font-Poppins px-2 py-1 rounded-lg mt-8 ml-14'>
                        <FormattedMessage id="connect.agent" />
                        </button>
                </div>
            </div>
            <div className='flex items-center justify-center w-[100%]'>

                <div className='bg-[#F1EEEE] px-2 py-2 mt-4 w-[95%] rounded-lg mb-10' style={{ boxShadow: shadow }}>
                    <div className='flex justify-center gap-32 items-center'>
                        <div className='ss  px-6'>
                            <p className='font-medium text-[#000000] text-[16] font-Poppins'> 
                            <FormattedMessage id="Location" /></p>
                            <div className='relative'>
                                <input className='bg-[#F1EEEE] w-48 mt-1 px-2 py-2 text-[12px] font-Poppins font-medium text-[#918C8C] border border-[#918C8C] rounded-md' placeholder='Neighbarhood/City/Zip' />
                                <span className='absolute inset-y-2 start-[135px]'><i class="fa fa-search text-[#757575] ml-8" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <div className='price  px-6'>
                            <p className='font-medium text-[#000000] text-[16] font-Poppins '> 
                            <FormattedMessage id="name" />
                            </p>
                            <div className='relative'>

                                <input className=' bg-[#F1EEEE] mt-1 w-48 px-2 py-2 text-[12px] font-Poppins font-medium text-[#918C8C] border border-[#918C8C] rounded-md' placeholder='Agent Name' />
                                <span className='absolute inset-y-2 start-[135px]'><i class="fa fa-search text-[#757575] ml-8" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <div className='price  px-6'>
                            <p className='font-medium text-[#000000] text-[16] font-Poppins'>
                                <FormattedMessage id='SPECIALTIES' /></p>
                            <select className='mt-1 px-2 py-2 w-48 bg-[#F1EEEE] text-[12px] font-Poppins font-medium  text-[#918C8C] border border-[#918C8C] rounded-md'>
                                <option>
                                    <FormattedMessage id="Any" />
                                    </option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-10 mt-20'>
                <div className=''>
                    <img src={Image1} className='w-[120px] h-[120px]' alt='find area image ' />
                </div>
                <div className=''>
                    <h2 className='text-[#1F5E7C] text-[42px] font-Poppins'><FormattedMessage id='best.seller' /></h2>
                    <p className='text-[#000000] text-[16px] font-Poppins'><FormattedMessage id='get.started' /></p>
                </div>
            </div>
            <div className=' px-10 mt-8 mb-10'>
                <p className='mt-4 text-[#000000] text-[16px] font-Poppins'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna<br></br> aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p className='mt-4 text-[#000000] text-[16px] font-Poppins'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <br></br>
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit <br></br>
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <h1 className='mt-4 text-[#1F5E7C] text-[42px] font-Poppins'><FormattedMessage id='real.estate.agent' /></h1>
                <p className='mt-4 text-[#000000] text-[16px] font-Poppins'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna<br></br>
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>

        </div>
        </IntlProvider>
    )
}
export default VirtualOffice;