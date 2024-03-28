import React from "react";
import House from "../../assets/zillow-house 1.png";
import Img from '../../assets/8019150 1.png'
import { IntlProvider, FormattedMessage } from 'react-intl';
import {messagesEn} from '../../localization/messagesEn';
import {messagesFr} from '../../localization/messagesFr';
import {messagesAr} from '../../localization/messagesAr';
const Advertise = ({ locale }) =>  {
  const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';

  return (
    <>
      <IntlProvider locale={locale} messages={locale === 'en' ? messagesEn : locale === 'fr' ? messagesFr : messagesAr}>
           
      <div className="flex justify-center">
        <div className="container max-w-[1200px]">
          <div className="flex justify-between">
            <h1 className="text-[#1A1E25] font-Roboto text-xl font-medium leading-10 tracking-wide">
            <FormattedMessage id='Properties' />
            </h1>
            <h1 className="text-[#1A1E25] font-Roboto text-[14px] text-[#1F5E7C] hover:font-bold cursor-pointer font-medium leading-10 tracking-wide">
            <FormattedMessage id='add.property' /> 
            </h1>
          </div>

          <div className='flex items-center justify-center '>
            <div className='bg-[#1F5E7C]  mt-4 w-full rounded-lg mb-10' style={{ boxShadow: shadow }}>
              <div className='flex justify-evenly gap-32 items-center py-8'>
                <p className='font-medium text-[#FFFFFF] text-[16] font-Poppins'><FormattedMessage id='all.0'/> </p>
                <p className='font-medium text-[#FFFFFF] text-[16] font-Poppins'><FormattedMessage id='for.sent' /> </p>
                <p className='font-medium text-[#FFFFFF] text-[16] font-Poppins'><FormattedMessage id='for.sell' /> </p>
                <input className='bg-transparent mt-1 w-64 px-2 py-2 text-[12px] font-Poppins font-medium text-[#918C8C] border border-[#FFFFFF] rounded-md' placeholder='Sreach by city,address and ZIP code' />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-12 items-center">
            <div className="column1">
              <img src={House} alt="House" />
              <h1 className="text-[#1A1E25] mt-12 font-Roboto text-3xl font-medium leading-10 tracking-wide"><FormattedMessage id='hi.james' /> </h1>
              <p className="text-center font-bold text-[#1F5E7C] mt-6"><FormattedMessage id='basic.information' /></p>
              <p className="mt-4 text-[#0C356A0] font-semibold">
              <FormattedMessage id='property.info' />
                {/* Once you find a renter for your listing, you can screen them, sign the lease,
                 and collect rent — entirely on Sreach Rental Manager.
                Add a property */}
              </p>
              <div className="flex justify-center">
                <button className="bg-[#1F5E7C] py-2 px-12 font-bold rounded-xl mt-8 text-white"><FormattedMessage id='add.property' /></button>
              </div>
            </div>
            <div className="colum2">
              <div className="flex justify-end">
                <div className="w-[60%] border rounded-xl px-4 py-4 pb-8">
                    <div className="flex justify-center">
                      <img src={Img} alt="horn" />
                    </div>
                    <p className="text-center font-bold text-[#1F5E7C] mt-6" ><FormattedMessage id='all.in.one.sol' /></p>
                    <ul className="mt-8">
                      <li className="py-3"><FormattedMessage id='list.property' /></li>
                      <li className="py-3"><FormattedMessage id='receive.app' /></li>
                      <li className="py-3"><FormattedMessage id='Screen.tenants' /></li>
                      <li className="py-3"><FormattedMessage id='Message.renters' /></li>
                      <li className="py-3"><FormattedMessage id='Create.leases' /></li>
                      <li className="py-3"> <FormattedMessage id='Receive.payments' /></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      </IntlProvider>
    </>
  );
};
export default Advertise;
