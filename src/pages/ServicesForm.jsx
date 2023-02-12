import React from 'react';
import TheNavbar from '../components/Home-section/Navbar/TheNavbar'
import Letschat from '../components/Services-section/Letschat/Letschat'
// import Map from './components/service-section/Map/Map';
import Formservice from '../components/Services-section/Formservice/Formservice'
import ScrollToTop from '../components/Home-section/GotoTop/ScrollToTop';


function ServicesForm() {
  
    return (
      <>
        <TheNavbar/>
        <ScrollToTop />
        <Letschat/>
        <Formservice />
      </>
    );
  }
  
  export default ServicesForm