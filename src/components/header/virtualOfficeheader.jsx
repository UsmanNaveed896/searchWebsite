import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { IntlProvider, FormattedMessage } from 'react-intl';
import {messagesEn} from '../../localization/messagesEn';
import {messagesFr} from '../../localization/messagesFr';
import {messagesAr} from '../../localization/messagesAr';
const VirtualOfficeheader = ({ locale }) =>  {
  const location=useLocation();
  const navigate=useNavigate()
  return (
    <IntlProvider locale={locale} messages={locale === 'en' ? messagesEn : locale === 'fr' ? messagesFr : messagesAr}>
    <div className='px-8 py-4 bg-VOffice-bg'>
    <div className='list flex  items-center justify-evenly  font-medium text-[#FFFFFF]'>
        <ul className='flex items-center  gap-32 cursor-pointer'>
            <li className=' py-2' style={{ borderBottom : location.pathname == '/virtualoffice' ? '1px solid white' : ''}}
             onClick={()=>navigate('/virtualoffice')}
            > 
            <FormattedMessage id="Virtual-Office" />
             </li>
            <li className=' py-2' style={{ borderBottom : location.pathname == '/homeimprovement' ? '1px solid white' : ''}}
            onClick={()=>navigate('/homeimprovement')}
            > <FormattedMessage id="home.improve" /> </li>
             <li className=' py-2' style={{ borderBottom : location.pathname == '/property-management' ? '1px solid white' : ''}}
            onClick={()=>navigate('/property-management')}
            > <FormattedMessage id="Property.Managers" /></li>
             <li className=' py-2' style={{ borderBottom : location.pathname == '/about-Company' ? '1px solid white' : ''}}
            onClick={()=>navigate('/about-Company')}
            > <FormattedMessage id="Builders" /> </li>
            <li> <FormattedMessage id="Inspectors" /></li>
            <li> <FormattedMessage id="Car.seller" /></li>
        </ul>
    </div>
</div>
</IntlProvider>
  )
}

export default VirtualOfficeheader