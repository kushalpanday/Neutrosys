import React, { useEffect,} from 'react';
import "./Details.css";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ImLocation } from 'react-icons/im';
import { FaSuitcase } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { ImLinkedin } from 'react-icons/im';
import { FaTwitterSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 
import { HiPrinter } from 'react-icons/hi'; 
import { MdFileCopy } from 'react-icons/md'; 
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'; 


const Details = () => {
   const navigate = useNavigate();

  return (
      <div className="main-divbg">
      <Container className='details-container'>

      <Row className='back-row'>
            <Col className='back-col'>
                <button className='back-btn' onClick={() => navigate(-1)}>Back</button>
                <button className='backto-btn'>Back</button>
                <button className='backto-btn2'>Back</button>
                <button className='backto-btn3'>Back</button>
                <button className='iconborder-btn'><BsFillArrowLeftCircleFill/>&nbsp;&nbsp;Back</button>
            </Col>
      </Row>
      <Row className='top-row'>
        <Col sm={9} className='top-col'>
            <h2>Sales Intern - On-site</h2>
        </Col>

        <Col sm={3} className='top-col2'>
        <button className = "top-btn"><a href='#'>Apply Now</a></button>
        </Col>
      </Row>

      <Row className='describe-row'>
        <Col sm={4} className='outer-col'>
            <Row className='second-row'>
                <Col sm={12} className='left-col'>
                    <h3>Job Overview</h3>
                    <p>Req #:<span> 1017</span></p>

                <div className="section section-first">
                    <i className="fa-solid"><ImLocation/></i>
                        <div className="inner-section inner-loc">
                            <h1>Location:</h1>
                            <span>Irving, Texas, United States</span>
                        </div>
                </div>

                <div className="section">
                <i className="fa-solid"><FaSuitcase/></i>
                        <div className="inner-section">
                            <h1>Job Category:</h1>
                            <span>Technology</span>
                        </div>
                </div>

                <div className="section">
                <i className="fa-solid"><FaRegClock/></i>
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
                                <a href='#'><i class="fa-brands"><ImFacebook2/></i></a>
                                <a href='#'><i class="fa-brands"><ImLinkedin/></i></a>
                                <a href='#'><i class="fa-brands twitticon"><FaTwitterSquare/></i></a>
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

export default Details