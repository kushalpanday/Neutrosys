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
            Neutrosys is an IT staffing and software development company.
            
            We are currently providing IT services mainly in the US and Nepal.
             We provide services from USA, Nepal, India, and Finland.
            </p>
           
        </div>
        </div>
    </div>
  )
}

export default Header