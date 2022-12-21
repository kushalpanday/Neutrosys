import React from 'react'
import Header from "../components/Contactus-section/Header/Header"
import LocationDetail from "../components/Contactus-section/LocationDetails/LocationDetail"
import GetinTouch from "../components/Contactus-section/GetInTouch/GetinTouch"
import GetAquote from "../components/Contactus-section/GetAQuote/GetAquote"
import TheNavbar from '../components/Home-section/Navbar/TheNavbar'
import Footer from "../components/Home-section/Footer/Footer"
import GoToTop from '../components/Home-section/GotoTop/GoToTop'

function ContactUs() {
  return (
   <>
   <TheNavbar />
    <Header/>
      <LocationDetail/>
      <GetinTouch/>
      <GetAquote/>
      <GoToTop />
      <Footer />
   </>
  )
}

export default ContactUs