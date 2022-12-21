import React from 'react'
import TheNavbar from "../components/Home-section/Navbar/TheNavbar"
import Offer from "../components/Employee-section/Offer/Offer"
import Neutrosysdiff from "../components/Employee-section/Neutrosysdiff/Neutrosysdiff"
import Form from "../components/Employee-section/Form/Form"
import Footer from "../components/Home-section/Footer/Footer"
import GoToTop from '../components/Home-section/GotoTop/GoToTop'



function Employers() {
    return (
      <>
  
        <TheNavbar />
         <Offer/> 
         <Neutrosysdiff/>
         <Form/>
         <GoToTop />
         <Footer/>
      </>
    )
  }
  
  export default Employers