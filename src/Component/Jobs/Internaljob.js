import React from 'react';
import './Internaljob.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsArrowRightCircle } from 'react-icons/bs';

const Internaljob = () => {
    return(
        <>
            <div className='internal-maindiv'>
                <h2>Work as an Employee</h2>
            
            <div className='internal-div'>
                
                <Row className='emp-row'>
                    <Col sm={5} className='emp-col1 emp-topm'>
                        <img src='emp1.jpg' alt="employee1"></img>
                    </Col>
                    <Col sm={6} className='emp-col2'>
                        <h5>Uncover Limitless Opportunities</h5>
                        <p>We give you the platform to learn more than you already know,<br></br>
                         experiment your skills and prove your mettle at<br></br> every step of 
                         your journey.</p>
                    </Col>
                </Row>
                <Row className='emp-row'>
                <Col sm={6} className='emp-col2 col-text2'>
                        <h5>Uncover Limitless Opportunities</h5>
                        <p>We give you the platform to learn more than you already know,<br></br>
                         experiment your skills and prove your mettle at<br></br> every step of 
                         your journey.</p>
                    </Col>
                    <Col sm={5} className='emp-col1'>
                        <img src='emp2.jpg' alt="employee2"></img>
                    </Col>
                </Row>
                <Row className='emp-row'>
                    <Col sm={5} className='emp-col1 col-buttom'>
                        <img src='emp3.jpg'alt="employee3"></img>
                    </Col>
                    <Col sm={6} className='emp-col2'>
                        <h5>Uncover Limitless Opportunities</h5>
                        <p>We give you the platform to learn more than you already know,<br></br>
                         experiment your skills and prove your mettle at<br></br> every step of 
                         your journey.</p>
                    </Col>
                </Row>
            </div>
            </div>
            
                <h2 className='openposition-heading'>Our open positions</h2>
                    <div className='select-opt'>
                        <label for="num">No. of jobs per page:&nbsp;&nbsp;</label>
                            <select name="jobs" id="num">
                                <option value="number">12</option>
                                {/* <option value="saab">13</option>
                                <option value="opel">14</option>
                                <option value="audi">15</option> */}
                            </select>
                    </div>

                <div>
                
                    <Row className='openposition-row'>
                        <Col lg={3}   className='openposition-col'>
                        <Row className='heading-rowbg'>
                                <h6>Sales/Marketing</h6>
                                <Col className='text-col'>
                                    <h4>US Technical Recruiter-Noida, India(Remote)</h4>
                                    <Row className='footer-row'>
                                        <Col sm={9} className='loc-text'>
                                        <p>Noida, Uttar Pradesh India</p>
                                        </Col>
                                        <Col sm={2} className='icon-text'>
                                        <p><BsArrowRightCircle/></p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            
                                
                            
                        </Col>
                        <Col lg={3} className='openposition-col'>
                        <Row className='heading-rowbg'>
                                <h6>Sales/Marketing</h6>
                                <Col className='text-col'>
                                    <h4>US Technical Recruiter-Noida, India(Remote)</h4>
                                    <Row className='footer-row'>
                                        <Col sm={9} className='loc-text'>
                                        <p>Noida, Uttar Pradesh India</p>
                                        </Col>
                                        <Col sm={2} className='icon-text'>
                                        <p><BsArrowRightCircle/></p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3} className='openposition-col'>

                        <Row className='heading-rowbg'>
                                <h6>Technology</h6>
                                <Col className='text-col'>
                                    <h4>IT/Technical Recruiter</h4>
                                    <Row className='footer-row'>
                                        <Col sm={9} className='loc-text'>
                                        <p>Irving, Texas, United States</p>
                                        </Col>
                                        <Col sm={2} className='icon-text'>
                                        <p><BsArrowRightCircle/></p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3} className='openposition-col'>
                        <Row className='heading-rowbg'>
                             <h6>Sales/Marketing</h6>
                                <Col className='text-col'>
                                    <h4>US Technical Recruiter-Noida, India(Remote)</h4>
                                    <Row className='footer-row'>
                                        <Col sm={9} className='loc-text'>
                                        <p>Noida, Uttar Pradesh India</p>
                                        </Col>
                                        <Col sm={2} className='icon-text'>
                                        <p><BsArrowRightCircle/></p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>   


                    </Row>
                </div>
            
            
        </>
    )
}
export default Internaljob
