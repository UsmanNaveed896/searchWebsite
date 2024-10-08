import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import VirtualOffice from './pages/virtualOffice/virtualOffice'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import HomeImprovement from './pages/virtualOffice/virtual-home-imporvment'
import Buyhomes from './pages/buy-sell-homes/buy-sell-homes'
import PropertyManagement from './pages/virtualOffice/property-management'
import AboutCompany from './pages/aboutCompany/about-company'
import CarDi from './pages/carDi/carDi'
import BookMark from './pages/BookMark/BookMark'
import Advertise from './pages/Advertise/Advertise'
import Popup from './components/popup/popup'
import CarAdListing from './pages/carDi/carAdListing'
import PropertyListing from './pages/propertydetail/propertyListing'
import PropertyDetails from './pages/propertydetail/property-details'
import FurnitureExhib from './pages/furnitureexhibition/furnitureExhib'
import FurnitureDetails from './pages/furnitureexhibition/furnitureDetails'

const Routess = () => {
    const [locale, setLocale] = useState('en');
    const [showPopup, setShowPopup] = useState(true);
    const handleClosePopup = () => {
        setShowPopup(false);
      };
      useEffect(() => {
        
        const timeout = setTimeout(() => {
          setShowPopup(true);
        }, 500);
    
        return () => clearTimeout(timeout);
      }, []);
    return (
        <>
        <Header setShowPopup={setShowPopup} setLocale={setLocale} locale={locale}/>
        <div className=" flex justify-center items-center">
          {showPopup && <Popup onClose={handleClosePopup} />}
        </div>
            <Routes>
                <Route exact path='/' element={<Homepage  locale={locale} />} />
                <Route exact path='/virtualoffice' element={<HomeImprovement  locale={locale}/>} />
                <Route exact path='/buyhome' element={<Buyhomes locale={locale}/>} />
                <Route exact path='/homeimprovement' element={<HomeImprovement locale={locale}/>} />
                <Route exact path='/property-management' element={<PropertyManagement locale={locale}/>} />
                <Route exact path='/about-Company' element={<AboutCompany locale={locale}/>} />
                <Route exact path='/car-di/:id' element={<CarDi  locale={locale} />} />
                <Route exact path='/car-listing' element={<CarAdListing  locale={locale} />} />
                <Route exact path='/advertise' element={<Advertise locale={locale}/>} />
                <Route exact path='/book-mark' element={<BookMark locale={locale}/>} />
                <Route exact path='/property-listing' element={<PropertyListing locale={locale}/>} />
                <Route exact path='/property-details/:id' element={<PropertyDetails locale={locale}/>} />

                <Route exact path='/furniture' element={<FurnitureExhib locale={locale}/>} />
                <Route exact path='/furniture-details/:id' element={<FurnitureDetails locale={locale}/>} />



            </Routes>
            <Footer locale={locale}/>

        </>
    )
}

export default Routess