import React from 'react';
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className='header-image'>
        <img src='careerbg.jpg'></img>
          <div className='text'>
              <h2 className='heading-career'>Careers</h2>
              <p>Neutrosys is an IT staffing and software development company.
              We are currently providing IT services mainly in the US and Nepal. We provide 
              services from USA, Nepal, India and Finland.</p>
          </div>
      </div>
    </>
   
  )
}

export default Banner