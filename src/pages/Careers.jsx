import React from "react";
import TheNavbar from "../components/Home-section/Navbar/TheNavbar";
import Header from "../components/Careers-section/Header/Header";
import WorkWithUs from "../components/Careers-section/WorkWithUs/WorkWithUs";
import Jobs from "../components/Careers-section/Jobs/JobsBtn";
import Resume from "../components/Careers-section/Resume/Resume";
import Footer from "../components/Home-section/Footer/Footer";
import GoToTop from '../components/Home-section/Gototop/GoToTop';
import ScrollToTop from '../components/Home-section/Gototop/ScrollToTop';


function Careers() {
  return (
    <>
      <TheNavbar />
      <ScrollToTop />
      <Header />
      <WorkWithUs />
      <Jobs />
      <Resume />
      <GoToTop />
      <Footer />
      {/* <Map /> */}
    </>
  );
}

export default Careers;
