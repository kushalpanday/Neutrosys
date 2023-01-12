import React from 'react';
import neutro from "./neutro.png";
import "./Services.css";

const Services = () => {

  return (
    <div className='container'>
      <div className='top'>
      <img src = {neutro} alt = "logo"></img>
     <div className='heading'>Services page</div>
     </div>
     <h1 className='text'>Hi,Anzana Poudel has submitted a job application on ReactJs Developer</h1>
     <div className='content'>
     <div className='user-info'>
      <h4>Selected Area</h4>
      <span>Software QA</span>
     </div>
     <div className='user-info'>
      <h4>Name</h4>
      <span>Anzana Poudel</span>
     </div>
     <div className='user-info'>
      <h4>Email</h4>
      <span>anzana123@gmail.com</span>
      </div>
     <div className='user-info'>
      <h4>Code</h4>
      <span>977</span>
     </div>
     <div className='user-info'>
      <h4>Phone</h4>
      <span>9804556567</span>
     </div>
     <div className='user-info'>
      <h4>Location</h4>
      <span>Butwal</span>
     </div>
     <div className='user-info'>
      <h4>Subject</h4>
      <span>Job Application</span>
     </div>
     <div className='user-info' id='message'>
      <h4>Message</h4>
      <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,type ...

      </span>
     </div>
     </div>
   
    </div>
  )
}

export default Services;
