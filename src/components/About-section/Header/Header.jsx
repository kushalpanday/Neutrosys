import React from 'react'
import "./header.css"
import imageheader from "../Aboutimage/header1.jpeg"

function Header() {
  return (
    <div className='header-container'>
        <div className="header-photo">
          <img 
          className='header-photo'
          src={imageheader} alt=""
          />

        <div className="about-text ">  
            <h2>About Us</h2>
            <p>
            Neutrosys is an IT staffing and consulting company that helps businesses to achieve their goals
            by providing them with the right people and solutions to meet their unique needs. We specialize
            in IT staffing to help businesses stay competitive in the ever-changing technology landscape.
            </p>
           
        </div>
        </div>
    </div>
  )
}

export default Header