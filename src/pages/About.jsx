import React from 'react'
import TheNavbar from '../components/Home-section/Navbar/TheNavbar'
import Header from '../components/About-section/Header/Header'
import Difference from '../components/About-section/Difference/Difference'
import CoreValues from '../components/About-section/Corevalues/Corevalues'
import Mission from '../components/About-section/Mission/Mission'
import Howwework from '../components/About-section/Howwework/Work'
import Footer from "../components/Home-section/Footer/Footer"
import GoToTop from '../components/Home-section/GotoTop/GoToTop'
// import Map from './components/Aboutus/map/map'


function About() {
    return (
      <>
        <TheNavbar/>
        <Header /> 
        <Difference />
        <CoreValues />
        <Mission />
        <Howwework />
        <GoToTop />
        <Footer />
        {/* <Map /> */}
      </>
    )
  }
  
  export default About