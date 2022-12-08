import React,{useState} from 'react';
import "./Detail.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdEmail } from 'react-icons/md'; 
import { HiPrinter } from 'react-icons/hi'; 
import { MdFileCopy } from 'react-icons/md'; 
// import { ReactToPrint } from "react-to-print";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';


const Detail = () => {
    const [state, setState] = useState(false);

    const applyHandler = () => {
        setState(true);
    }
    const crossHandler = () => {
        setState(false);
    }
  return (
      <div className="main-divbg">
          {/* <ReactToPrint trigger={() => {
              return <button>Print</button>
          }}
              content={ () => this.componentRef} /> */}
      <Container className='details-container'>
      <Row className='top-row'>
        <Col sm={9} className='top-col'>
            <h2>Sales Intern - On-site</h2>
        </Col>

        <Col sm={3} className='top-col2'>
        <button className = "top-btn" onClick = {applyHandler}><a href='#'>Apply Now</a></button>
        </Col>
      </Row>
              <Row className="form-row" style = {{display:state?'flex':'none'}}>
                  <Col sm={12} className="form-container">
                      <div className="top-form">
                          <h1>ENTER YOUR INFORMATION</h1>
                          <span className = "cross" onClick = {crossHandler}>X</span>
                      </div>
                       <form className = "form">
                          <div className="flex">
                            <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3 input-field">
                            <Form.Control type="text" placeholder="name@example.com" />
                            </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Middle Name (If applicable)" className="mb-3 input-field">
                    <Form.Control type="text" placeholder="Middle Name (If applicable)" />
                              </FloatingLabel>
                          </div>

                           <div className="flex">
                            <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3 input-field">
                            <Form.Control type="text" placeholder="name@example.com" />
                            </FloatingLabel>
                              <Form.Select aria-label="Default select example" className="mb-3 input-field" >
      <option>Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
      <option value="3">Unspecified</option>
      <option value="4">Undisclosed</option>
      <option value="5">Other</option>
    </Form.Select>
                          </div>

      <div className="flex">
            <Form.Select aria-label="Default select example" className="mb-3 input-field" >
                <option>Country Code</option>
                <option data-country="United States" value="232">United States +1</option>
                <option data-country="Nepal" value="149">Nepal +977</option>
                <option data-country="Canada" value="39">Canada +1</option>
                <option data-country="Finland" value="73">Finland +358</option>
                <option data-country="Mexico" value="138">Mexico +52</option>
                                  <option data-country="India" value="98">India +91</option>
                                  <optgroup label="----------"></optgroup>
                                  <option data-country="Afghanistan" value="1">Afghanistan +93</option>
                                  <option data-country="Albania" value="2">Albania +355</option>
                                  <option data-country="Algeria" value="3">Algeria +213</option>
                                  <option data-country="American Samoa" value="4">American Samoa +1684</option>
                                  <option data-country="Andorra" value="5">Andorra +376</option>
                                  <option data-country="Angola" value="6">Angola +244</option>
                                  <option data-country="Anguilla" value="7">Anguilla +1264</option>
                                  <option data-country="Antarctica" value="8">Antarctica +672</option>
                                  <option data-country="Antigua and Barbuda" value="9">Antigua and Barbuda +1268</option>
                                  <option data-country="Argentina" value="10">Argentina +54</option>
                                  <option data-country="Armenia" value="11">Armenia +374</option>
                                  <option data-country="Aruba" value="12">Aruba +297</option>
                                  <option data-country="Ascension Island" value="13">Ascension Island +247</option>
                                  <option data-country="Australia" value="14">Australia +61</option>
                                  <option data-country="Austria" value="15">Austria +43</option>
                                  <option data-country="Azerbaijan" value="16">Azerbaijan +994</option>
                                  <option data-country="Bahamas" value="17">Bahamas +1242</option>
                                  
            </Form.Select>          
                    <FloatingLabel controlId="floatingPassword" label="Phone" className="mb-3 input-field">
                    <Form.Control type="number" placeholder="phone" />
                              </FloatingLabel>
                          </div> 
                          
     <div className="flex">
            <Form.Select aria-label="Default select example" className="mb-3 input-field select" >
                <option>Country</option>
                <option value="1">United States</option>
                <option value="2">Nepal</option>
                <option value="3">Canada</option>
                <option value="4">Finland</option>
                <option value="5">Mexico</option>
                <option value="6">India</option>
            </Form.Select>          
                   <Form.Select aria-label="Default select example" className="mb-3 input-field select" >
                <option>Choose state/province</option>
                <option value="1">Province 1</option>
                <option value="2">Province 2</option>
                <option value="3">Province 3</option>
                <option value="4">Province 4</option>
                <option value="5">Province 5</option>
                <option value="6">Province 6</option>
                <option value="7">Province 7</option>
            </Form.Select>
                          </div> 

            <div className="flex">
                            <FloatingLabel controlId="floatingInput" label="City" className="mb-3 input-field">
                            <Form.Control type="text" placeholder="name@example.com" />
                            </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Current Address" className="mb-3 input-field">
                    <Form.Control type="text" placeholder="Middle Name (If applicable)" />
                              </FloatingLabel>
                          </div>

             <div className="flex">
                            <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 input-field">
                            <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Expected Salary/Salary Range(Optional)" className="mb-3 input-field">
                    <Form.Control type="number" placeholder="Middle Name (If applicable)" />
                              </FloatingLabel>
                          </div>

                  <div className="flex">
            <Form.Select aria-label="Default select example" className="mb-3 input-field" >
                <option>Applying for Seniority Level of</option>
                <option value="1">Not Applicable</option>
                <option value="2">Internship</option>
                <option value="3">Entry Level</option>
                <option value="4">Associate(Junior)</option>
                <option value="5">Mid Level</option>
                <option value="6">Senior</option>
                <option value="7">Director</option>
                <option value="5">Executive</option>
            </Form.Select>          
                   <FloatingLabel controlId="floatingInput" label="Upload cv/resume" className=" mb-3 input-field dashed-border">
                    <Form.Control type="file" placeholder="name@example.com" className = "file-input"/>
                            </FloatingLabel>
                          </div> 

            <div className="flex">
          <FloatingLabel controlId="floatingTextarea2" label="Message(Optional)" className = "mb-3 input-field">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>       
                   <FloatingLabel controlId="floatingInput" label="Upload cv/resume" className=" mb-3 input-field dashed-border">
                    <Form.Control type="file" placeholder="name@example.com" className = "file-input"/>
                            </FloatingLabel>
                          </div> 

                          <div className="flex-check">
                            <div className= "check">              <input type="checkbox" name="check" id="" />
                              <label htmlFor="check">By checking this box, I certify that the information submitted in this application is true and correct to the best of my knowledge.</label>
                </div>  
    <Button variant="success" id = "submit-btn">Submit</Button>{' '}

    </div>
                          </form>
                  </Col>
</Row>
      <Row className='outer-row'>
        <Col sm={4} className='outer-col'>
            <Row className='second-row'>
                <Col sm={12} className='left-col'>
                    <h3>Job Overview</h3>
                    <p>Req #:<span> 1017</span></p>

                <div className="section section-first">
                    <i class="fa-solid fa-location-dot"></i>
                        <div className="inner-section inner-loc">
                            <h1>Location:</h1>
                            <span>Irving, Texas, United States</span>
                        </div>
                </div>

                <div className="section">
                    <i class="fa-solid fa-suitcase"></i>
                        <div className="inner-section">
                            <h1>Job Category:</h1>
                            <span>Technology</span>
                        </div>
                </div>

                <div className="section">
                    <i class="fa-solid fa-clock"></i>
                        <div className="inner-section">
                            <h1>Date Posted:</h1>
                            <span>2021-11-09 16:30:20</span>
                        </div>
                </div>
                </Col>
            </Row>

            <Row className='leftbottom-row'>
                <Col sm={12} className='leftbottom-col'>
                    <h4>Share this job</h4>
                    <Row className='share-row'>
                        <Col sm={6} className='share-col'>
                            <div className="socials">
                                <a href='#'><i class="fa-brands fa-square-facebook"></i></a>
                                <a href='#'><i class="fa-brands fa-linkedin"></i></a>
                                <a href='#'><i class="fa-brands fa-square-twitter"></i></a>
                            </div>
                       
                        </Col>
                        <Col sm={6} className='share-col2'>
                            <div className='vertical-div'>
                                <p><a href='#'><MdEmail/>&nbsp;&nbsp;<span>Email this job</span></a></p>
                                <p><a href='#'><HiPrinter/>&nbsp;&nbsp;<span>print</span></a></p>
                                <p><a href='#'><MdFileCopy/>&nbsp;&nbsp;<span>Copy job link</span></a></p>
                            </div>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </Col>
        
        <Col sm={8} className='right-col'>
            <h3>Job Description</h3>
             <p>Neutrosys Inc is looking for a few recent graduate individuals to join a growing office in the staffing 
            business. This is a great opportunity to get your foot into the door with a staffing firm to start a career
              in either recruitment or sales. The ideal candidate would be a self-starter, self-motivated, persuasive, 
              and enthusiastic, and enjoy working in a group or individual.</p>  

            <h6>Responsibilities</h6>
                <ul>
                    <li>Involve in new business development</li>
                    <li>Update and manage all sales activities, opportunities, and account information</li>
                    <li>Emailing/cold calling new accounts</li>
                    <li>Information gathering and sorting</li>
                    <li>Work closely with Recruitment and Operations teams</li>
                </ul>

                <h6> Qualifications:</h6>
                <ul>
                    <li>1 year of relevant work experience is preferred</li>
                    <li>Excellent communication skills (Written & Verbal)</li>
                    <li>Ability to multitask, organize, and prioritize work</li>
                    <li>Self-directed, can-do attitude and sense of humor appreciated</li>
                    <li>Authorized to work in the United States</li>
                </ul>

                <h6>Why join us?</h6>
                <p>We are committed to a diversified and happy employee working culture with the opportunity to grow.
                 We are a company that rewards employees for their performance and dedication. We believe that 
                 employees’ happiness is the key to level-up the company. We are committed to the enjoyable and 
                 flexible working environment.</p>

                 <p className='benefits'>Some of our benefits include:</p>
                 <ul>
                    <li>Competitive Base Salary</li>
                    <li>Competitive Commission Structure</li>
                    <li>Bonus</li>
                    <li>PTO</li>
                    <li>Flexible Working Hours</li>
                </ul>

                <p className='italic'>Neutrosys Inc is an EEO Employer providing IT solutions in United States, 
                Asia, and Europe.</p>
                <button className="apply-btn"><a href='#'>Apply Now</a></button>
        </Col>

      </Row>
      </Container>
      
         
    </div>
  )
}

export default Detail