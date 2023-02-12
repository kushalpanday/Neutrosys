import React from "react";
import "../contactUs.css";
// import { Routes, Route, Link, Outlet } from "react-router-dom";

export default function GetAquote() {
  return (
    <>
      <button className="button">
      <a href="./ServicesForm" style={{color:"white", textDecoration:"none"}}><span>Get a Quote </span></a>   
      {/* <Link to="ServicesForm"><span style={{color:"white", textDecoration:"none"}}>Get a Quote</span></Link>
      <Outlet /> */}

      </button>
    </>
  );
}
