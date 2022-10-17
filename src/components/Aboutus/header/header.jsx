import React from 'react'
import "./header.css"
function Header() {
  return (
    <div className='header-container'>
        <div className="header-photo">
          <img 
          className='header-photo'
          src="../Aboutimage/header.PNG" alt="HEADER " 
          />

        <div className="text ">  
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