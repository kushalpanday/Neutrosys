import React from 'react';
import neutro from "./neutro.png";
import "./Apply.css";

const Apply = () => {

  return (
    <div className='container'>
      <div className='top'>
      <img src = {neutro} alt = "logo"></img>
     <div className='heading'>Apply Button page</div>
     </div>
     <h1 className='text'>Hi,Anzana Poudel has submitted a job application on ReactJs Developer</h1>
     <div className='content'>
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
      <h4>Address</h4>
      <span>Butwal-8,Lumbini</span>
     </div>
     <div className='user-info'>
      <h4>Gender</h4>
      <span>Female</span>
     </div>
     <div className='user-info'>
      <h4>Seniority Level</h4>
      <span>Mid Level</span>
     </div>
     <div className='user-info'>
      <h4>Salary</h4>
      <span>25000</span>
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

export default Apply;
