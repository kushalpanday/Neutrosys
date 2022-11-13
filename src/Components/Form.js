import React from 'react';
import TextField from '@mui/material/TextField';
import "./Form.css";

const FormEl = () => {
    return (
      <div className="container">
     <div className="form-left">
              <h2>REQUEST TALENTS</h2>
              <span >Please fill out the form with your details. We will contact you soon.</span>
              {/* <form action=""> */}
                  {/* <input type="text" placeholder='Your Full Name' />
                  <input type="email" name="" id="" placeholder='Your Email' />
                  <input type="number" name="" id="" placeholder="Phone Number" /> */}
          <div><TextField id="outlined-basic" className='textfield' label="Your Full Name" fullWidth variant="filled" size="small" margin='dense'/></div>
                    <div><TextField id="outlined-basic" className='textfield' label="Your Email" fullWidth variant="filled" size="small"margin='dense'/></div> 
                    <div><TextField id="outlined-basic" label="Phone Number" className='textfield' fullWidth variant="filled" size="small" margin='dense'/></div> 
                  <div className="wrap">
                      <div className="first">
                          {/* <input type="text" placeholder = "Company Name"/>
                          <input type="text" placeholder = "Job Title"/> */}
                        <div><TextField id="outlined-basic" label="Company Name" className='textfield' variant="filled" size="small" margin='dense'/></div>
                        
                          <div><TextField id="outlined-basic" label="Job Title" className='textfield' variant="filled" size="small" margin='dense'/></div>
                      </div>
                        <div className="second">
                            <div className="country">
                        {/* <input type="text" placeholder = "Country"/>
                                <input type="text" placeholder="City/State" /> */}
                            <div><TextField id="outlined-basic" label="Country" className='textfield' variant="filled" size="small" margin='dense'/></div>
                        
                          <div><TextField id="outlined-basic" label="City/State" className='textfield' variant="filled" size="small" margin='dense'/></div>
                                </div>
                      </div>
                  </div>
                  <textarea name="" id="textarea" placeholder="Tell us your need"></textarea>
                <input type="file" name="" id="file" placeholder='Upload Files'/>
                
              {/* </form> */}
              <div className="button">
                    <input type="submit" value="Submit" className='submit' />
                    
                  </div>
            </div>
            
            <div className="form-right">
                <div className="connected">Let's get connected!</div>
                <div className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusamus nulla repellat consectetur eveniet iure saepe aperiam nemo, assumenda harum odio, ipsa recusandae error facere enim neque labore. Architecto, alias?</div>
                        <div className = "contact-details">Contact Details</div><br />
                <div className="contact">
                <div className="icon-container"><i class="fa-solid fa-phone"></i></div>
                    <div className="icon-text">+977-71-577820</div>
                </div>
                
                 <div className="contact">
                <div className="icon-container"><i class="fa-solid fa-envelope"></i></div>
                    <div className="icon-text">info@neutroline.com</div>
                    </div>
            </div>
         </div> 
  )
}

export default FormEl;