import React from 'react';
import neutro from "./neutro.png";
import "./Employers.css";

const Employers = () => {
  // const [status,setStatus] = useState(true);
  // const closeHandler = () => {
  //   setStatus(status => !status);
  // }
  return (
    <div className='container'>
      <div className='top'>
      <img src = {neutro} alt = "logo"></img>
     <div className='heading'>Employers page</div>
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
      <h4>Phone</h4>
      <span>9804556567</span>
     </div>
     <div className='user-info'>
      <h4>Company</h4>
      <span>Neutroline Pvt Ltd</span>
     </div>
     <div className='user-info'>
      <h4>Job</h4>
      <span>Software Developer</span>
     </div>
     <div className='user-info'>
      <h4>Country</h4>
      <span>Nepal</span>
     </div>
     <div className='user-info'>
      <h4>City/State</h4>
      <span>Butwal</span>
     </div>
     <div className='user-info' id='message'>
      <h4>Message</h4>
      <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,type ...

      </span>
     </div>
     </div>
     {/* <button onClick = {closeHandler}>Close</button> */}
    </div>
  )
}

export default Employers;
