import React from 'react';
import "./Contact.css";
import neutro from "./neutro.png";

const Contact = () => {
  return (
    <div className='contact'>
       <div className='wrapper'>
        <div className='header'>
        <img src = {neutro} alt = "neutrosys logo"/>
        <span>Thanks for contacting us</span>
        </div>
        <div className='info-wrap'>
            <span className = "big">Hi Test,</span> 
            <p>Thank you for your information.We will check out your information and let you know our response.</p>
   
      
      <div className = "socials">
        <span>Kind Regards,</span>
        <span id = "green">Neutrosys Pvt.Ltd.</span>
        <div className = "links">
        <a href = "https://neutrosys.net/" target = "_blank" rel="noreferrer"><i class="fa-solid fa-computer"></i></a>
        <a href = "https://neutrosys.net/" target = "_blank" rel="noreferrer"> <i className="fa-brands fa-facebook"></i></a>
        <a href = "https://neutrosys.net/" target = "_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
        </div>
        <div className='note'>
      <span className='one'>****** PLEASE DONOT REPLY TO THIS EMAIL ******</span><br/>
      <span className='two'>This is an auto generated email from <a href = "https://neutrosys.net/contact-us">https://neutrosys.net/contact-us</a></span>
    </div>
      </div>
    </div>
  )
}

export default Contact
