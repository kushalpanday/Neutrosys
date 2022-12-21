import React from 'react'
import Header from "../components/Home-section/Header/Header";
import TheNavbar from "../components/Home-section/Navbar/TheNavbar"
import WhoWeAre from "../components/Home-section/WhoWeAre/WhoWeAre"
import Services from "../components/Home-section/Services/Services"
// import OurPartners from "../components/Home-section/OurPartners/OurPartners"
import OurClients from "../components/Home-section/OurClients/OurClients"
import ReadyToHelp from "../components/Home-section/ReadyToHelp/ReadyToHelp"
import Footer from "../components/Home-section/Footer/Footer"
import OurPartnersCarousel from '../components/Home-section/OurPartners/OurPartnersCarousel';
import GoToTop from '../components/Home-section/GotoTop/GoToTop';

function Home() {
  return (
    <>

      <TheNavbar />
        <Header />
        <WhoWeAre />
        <Services />
        {/* <OurPartners/> */}
        <OurPartnersCarousel />
        <OurClients />
        <ReadyToHelp />
        <GoToTop />
        <Footer />
    </>
  )
}

export default Home