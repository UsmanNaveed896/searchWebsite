import React, { useState } from 'react'
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

const Routess = () => {
    const [locale, setLocale] = useState('en');
    return (
        <>
        <Header setLocale={setLocale} locale={locale}/>
            <Routes>
                <Route exact path='/' element={<Homepage locale={locale} />} />
                <Route exact path='/virtualoffice' element={<VirtualOffice locale={locale}/>} />
                <Route exact path='/buyhome' element={<Buyhomes locale={locale}/>} />
                <Route exact path='/homeimprovement' element={<HomeImprovement locale={locale}/>} />
                <Route exact path='/property-management' element={<PropertyManagement locale={locale}/>} />
                <Route exact path='/about-Company' element={<AboutCompany locale={locale}/>} />
                <Route exact path='/car-di' element={<CarDi  locale={locale} />} />
                <Route exact path='/advertise' element={<Advertise locale={locale}/>} />
                <Route exact path='/book-mark' element={<BookMark locale={locale}/>} />

            </Routes>
            <Footer locale={locale}/>

        </>
    )
}

export default Routess