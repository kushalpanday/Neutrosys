import React from 'react'
import Header from './Component/Header/Header'
import Workwithus from './Component/WorkWithUs/Workwithus'
import Jobs from './Component/Jobs/JobsBtn';
import Resume from './Component/Resume/Resume';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Routing = () => {
  return (
    <div>
    <Header />
    <Workwithus />
    <Jobs />
    <Resume />
    </div>
  )
}

export default Routing