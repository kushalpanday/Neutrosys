import React from 'react';
import neutro from "./neutro.png"
import "./Confirmation.css";

const Confirmation = () => {
  return (
    <div className='confirmation'>
      <div className='wrapper'>
        <div className='header'>
        <img src = {neutro} alt = "neutrosys logo"/>
        <span>Thanks for applying to Neutrosys</span>
        </div>
        <div className='info-wrap'>
            <span className = "big">Hi Test,</span> 
            <p>Thank you for choosing Neutrosys as your future employer.We're are excited to check out your resume to see if you might be fit for a spot on our team.If you are identified as a qualified candidate based on the knowledge and skills we are looking for,you will be conducted to explore further step and opportunities.</p>
            <p>For your reference,here is the information of the position you have applied.</p>
            <div className='position-info'>
        <div className='pinfo'><span className='title'>Job Title:</span> <span>Healthcare ETL Tester - Remote</span></div>
        <div className='pinfo'><span className='title'>Job ID at Neutrosys:</span> <span>1012</span></div>
        <div className='pinfo'><span className='title'>Job Location:</span> <span>MO,Missouri, United States</span></div>
      </div>
      <div className = "socials">
        <span>Kind Regards,</span>
        <span id = "green">Neutrosys Pvt.Ltd.</span>
        <a href = "www.neutrosys.com">www.neutrosys.com</a>
        <a href = "Facebook.com/NeutrosysLtd">Facebook.com/NeutrosysLtd</a>
        <a href = "Linkedin.com/company/neutrosys">Linkedin.com/company/neutrosys</a>
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

export default Confirmation
