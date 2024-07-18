import React from 'react'
import Img from '../../assets/Hero-person.png'
import Image1 from '../../assets/Group 1000000930.png'
import VirtualOfficeheader from '../../components/header/virtualOfficeheader';
import Img1 from '../../assets/Group 158.png'
import { IntlProvider, FormattedMessage } from 'react-intl';
import {messagesEn} from '../../localization/messagesEn';
import {messagesFr} from '../../localization/messagesFr';
import {messagesAr} from '../../localization/messagesAr';

const PropertyManagement = ({ locale }) =>  {
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';
   
    return (
        <IntlProvider locale={locale} messages={locale === 'en' ? messagesEn : locale === 'fr' ? messagesFr : messagesAr}>
           
        <div className=''>
            <VirtualOfficeheader locale={locale} />
            <div className=' bg-cover h-screen pb-16' style={{ backgroundImage: `url(${Img})` }}>
                <div className='container max-w-[1000px] pt-40 pl-10'>
                    <h1 className='font-bold text-[42px] font-Poppins leading-[60px] text-[#1F5E7C]'><FormattedMessage id="great.agent" /> <br></br>  <FormattedMessage id="all.differences" /></h1>
                    <p className='mt-2 text-[#FFFFFF] font-Poppins text-[16px]'>"Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, sed do eiusmod tempor incididunt <br></br> ut labore et dolore magna aliqua.
                    </p>
                    <button className='text-[#FFFFFF] bg-[#1F5E7C] font-Poppins px-2 py-1 rounded-lg mt-8 ml-14'><FormattedMessage id="connect.agent" /></button>
                </div>
            </div>
            <div className='flex items-center justify-center w-[100%]'>

                <div className='bg-[#1F5E7C] px-2 py-2 mt-4 w-[95%] rounded-lg mb-10' style={{ boxShadow: shadow }}>
                    <div className='flex justify-center gap-36 items-center'>
                        <div className='ss  px-6'>
                            <p className='font-small text-[#FFFFFF] text-[14] font-Poppins'>
                            <FormattedMessage id="Location" />
                            </p>
                            <div className='relative'>
                                <input className='bg-[#1F5E7C] w-48 mt-1 px-2 py-2 text-[12px] font-Poppins font-medium text-[#918C8C] border border-[#918C8C] rounded-md' placeholder='Neighbarhood/City/Zip' />
                                <span className='absolute inset-y-2 start-[135px]'><i class="fa fa-search text-[#757575] ml-8" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <div className='price  px-6'>
                            <p className='font-small text-[#FFFFFF] text-[14] font-Poppins '> <FormattedMessage id="name" /></p>
                            <div className='relative'>

                                <input className=' bg-[#1F5E7C] mt-1 w-48 px-2 py-2 text-[12px] font-Poppins font-medium text-[#918C8C] border border-[#918C8C] rounded-md' placeholder='Agent Name' />
                                <span className='absolute inset-y-2 start-[135px]'><i class="fa fa-search text-[#757575] ml-8" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <div className='price  px-6'>
                            <p className='font-small text-[#FFFFFF] text-[14] font-Poppins'> <FormattedMessage id='SPECIALTIES' /></p>
                            <select className='mt-1 px-2 py-2 w-48 bg-[#1F5E7C] text-[12px] font-Poppins font-medium  text-[#918C8C] border border-[#918C8C] rounded-md'>
                                <option>
                                <FormattedMessage id="Any" />
                                </option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between w-[100%] px-24  mt-8 mb-8'>
                <h1 className='font-bold text-[20px] font-Poppins text-[#000000]'>
                    <FormattedMessage id="Virtual-Office" /> 
                    </h1>
                <h1 className='font-bold text-[20px] font-Poppins text-[#000000]'><FormattedMessage id="Location" /> </h1>
                <h1 className='font-bold text-[20px] font-Poppins text-[#000000]'>
                    <FormattedMessage id="client.review" />
                     </h1>
            </div>
            <div className='px-6 mt-4'>
                <div className='flex px-2 py-2 justify-between rounded-lg' style={{ boxShadow: shadow }}>
                <div className=' w-[372px] h-[100px]  flex gap-2 items-center rounded-lg px-2 py-2' >
                    <img src={Img1} className='w-[90px] h-[70px]' alt='company name' />
                    <div className=''>
                        <h2 className='text-[#1F5E7C] text-[16px] font-Poppins font-medium'>
                            <FormattedMessage id='Company.Name' />
                             </h2>
                        <p className='text-[12px] font-Poppins font-small text-[#0C356A]'>4.5(415 reviews)</p>
                        <p className='text-[14px] font-Poppins font-small text-[#0C356A]'>+1 (248) 937-2442</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-80'>
                <h2 className='font-bold text-[14px] text-center text-[#1F5E7C]'>Review 10/27/2017</h2>
                    <p className=' text-[12px] font-Poppins font-small text-[#0C356A]'>A few weeks later the contract fell through and Kathrin was right on it as soon ...</p>
                </div>
                </div>
            </div>
            <div className='px-6 mt-12'>
                <div className='flex px-2 py-2 justify-between rounded-lg' style={{ boxShadow: shadow }}>
                <div className=' w-[372px] h-[100px]  flex gap-2 items-center rounded-lg px-2 py-2' >
                    <img src={Img1} className='w-[90px] h-[70px]' alt='company name' />
                    <div className=''>
                        <h2 className='text-[#1F5E7C] text-[16px] font-Poppins font-medium'><FormattedMessage id='Company.Name' /> </h2>
                        <p className='text-[12px] font-Poppins font-small text-[#0C356A]'>4.5(415 reviews)</p>
                        <p className='text-[14px] font-Poppins font-small text-[#0C356A]'>+1 (248) 937-2442</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-80'>
                <h2 className='font-bold text-[14px] text-center text-[#1F5E7C]'>Review 10/27/2017</h2>
                    <p className=' text-[12px] font-Poppins font-small text-[#0C356A]'>A few weeks later the contract fell through and Kathrin was right on it as soon ...</p>
                </div>
                </div>
            </div>
            <div className='px-6 mt-12'>
                <div className='flex px-2 py-2 justify-between rounded-lg' style={{ boxShadow: shadow }}>
                <div className=' w-[372px] h-[100px]  flex gap-2 items-center rounded-lg px-2 py-2' >
                    <img src={Img1} className='w-[90px] h-[70px]' alt='company name' />
                    <div className=''>
                        <h2 className='text-[#1F5E7C] text-[16px] font-Poppins font-medium'><FormattedMessage id='Company.Name' /> </h2>
                        <p className='text-[12px] font-Poppins font-small text-[#0C356A]'>4.5(415 reviews)</p>
                        <p className='text-[14px] font-Poppins font-small text-[#0C356A]'>+1 (248) 937-2442</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-80'>
                <h2 className='font-bold text-[14px] text-center text-[#1F5E7C]'>Review 10/27/2017</h2>
                    <p className=' text-[12px] font-Poppins font-small text-[#0C356A]'>A few weeks later the contract fell through and Kathrin was right on it as soon ...</p>
                </div>
                </div>
            </div>


            <div className=' px-10 mt-8 mb-10'>
                <h1 className='text-[#000000] text-[24px] font-Poppins font-semibold'><FormattedMessage id='txt' /></h1>
                <p className='mt-4 text-[#0C356A] text-[14px] font-Poppins'>Whether you are looking for an interior designer, general contractor or an architect, our local directory of home improvement experts in Ludowici GA connects you to professionals who can help complete your project and provide home inspiration along the way. </p>
                <p className='mt-4 text-[#0C356A] text-[14px] font-Poppins'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud <br></br>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                
            </div>

        </div>
         </IntlProvider>
    )
}
export default PropertyManagement