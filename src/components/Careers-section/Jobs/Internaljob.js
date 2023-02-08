import React from "react";
import "./Internaljob.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowRightCircle } from "react-icons/bs";
import employeeimg1 from "../Careersimages/emp1.jpg";
import employeeimg2 from "../Careersimages/emp2.jpg";
import employeeimg3 from "../Careersimages/emp3.jpg";
import { Routes, Route, Link, Outlet } from "react-router-dom"; 

const Internaljob = () => {
  
  return (
    <>
      <div className="internal-maindiv">
      <h2>Work as an Employee</h2>

        <div className="internal-div">
         
          <Row className="emp-row">
            <Col sm={5} className="emp-col1 emp-topm">
              <img src={employeeimg1} alt="employee1"></img>
            </Col>
            <Col sm={6} className="emp-col2">
              <h5>Uncover Limitless Opportunities</h5>
              <p>
                We give you the platform to learn more than you already know,
                <br></br>
                experiment your skills and prove your mettle at<br></br> every
                step of your journey.
              </p>
            </Col>
          </Row>
          <Row className="emp-row">
            <Col sm={6} className="emp-col2 col-text2">
              <h5>Uncover Limitless Opportunities</h5>
              <p>
                We give you the platform to learn more than you already know,
                <br></br>
                experiment your skills and prove your mettle at<br></br> every
                step of your journey.
              </p>
            </Col>
            <Col sm={5} className="emp-col1">
              <img src={employeeimg2} alt="employee2"></img>
            </Col>
          </Row>
          <Row className="emp-row">
            <Col sm={5} className="emp-col1 col-buttom">
              <img src={employeeimg3} alt="employee3"></img>
            </Col>
            <Col sm={6} className="emp-col2">
              <h5>Uncover Limitless Opportunities</h5>
              <p>
                We give you the platform to learn more than you already know,
                <br></br>
                experiment your skills and prove your mettle at<br></br> every
                step of your journey.
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <h2 className="openposition-heading">Our open positions</h2>
    <div className="scrollbar-outerdiv">
      <input type="checkbox" id="readmore"></input>
      <div className="scrollbar-internaljob">
      
        <Row className="openposition-row">
        
          <Col lg={3} className="openposition-col">
            <Row className="heading-rowbg">
              <h6>Sales/Marketing</h6>
              <Col className="text-col">
                <h4>US Technical Recruiter-Noida, India(Remote)</h4>
                <Row className="footer-row">
                  <Col sm={9} className="loc-text">
                    <p>Noida, Uttar Pradesh India</p>
                  </Col>
                  <Col sm={2} className="icon-text">
                  <Link to="salesNoida"><p>
                      <BsArrowRightCircle />
                    </p></Link>
                    <Outlet />
                  </Col>

                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="openposition-col">
            <Row className="heading-rowbg">
              <h6>Sales/Marketing</h6>
              <Col className="text-col">
                <h4>US Technical Recruiter-Noida, India(Remote)</h4>
                <Row className="footer-row">
                  <Col sm={9} className="loc-text">
                    <p>Noida, Uttar Pradesh India</p>
                  </Col>
                  <Col sm={2} className="icon-text">
                    <p>
                      <BsArrowRightCircle />
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="openposition-col">
            <Row className="heading-rowbg">
              <h6>Technology</h6>
              <Col className="text-col">
                <h4>IT/Technical Recruiter</h4>
                <Row className="footer-row">
                  <Col sm={9} className="loc-text">
                    <p>Irving, Texas, United States</p>
                  </Col>
                  <Col sm={2} className="icon-text">
                    <p>
                      <BsArrowRightCircle />
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="openposition-col">
            <Row className="heading-rowbg">
              <h6>Sales/Marketing</h6>
              <Col className="text-col">
                <h4>US Technical Recruiter-Noida, India(Remote)</h4>
                <Row className="footer-row">
                  <Col sm={9} className="loc-text">
                    <p>Noida, Uttar Pradesh India</p>
                  </Col>
                  <Col sm={2} className="icon-text">
                    <p>
                      <BsArrowRightCircle />
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        
          <Col lg={3} className="openposition-col openposition-col2">
            <Row className="heading-rowbg">
              <h6>Sales/Marketing</h6>
              <Col className="text-col">
                <h4>US Technical Recruiter-Noida, India(Remote)</h4>
                <Row className="footer-row">
                  <Col sm={9} className="loc-text">
                    <p>Noida, Uttar Pradesh India</p>
                  </Col>
                  <Col sm={2} className="icon-text">
                    <p>
                      <BsArrowRightCircle />
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="openposition-col openposition-col2">
            <Row className="heading-rowbg">
              <h6>Sales/Marketing</h6>
              <Col className="text-col">
                <h4>US Technical Recruiter-Noida, India(Remote)</h4>
                <Row className="footer-row">
                  <Col sm={9} className="loc-text">
                    <p>Noida, Uttar Pradesh India</p>
                  </Col>
                  <Col sm={2} className="icon-text">
                    <p>
                      <BsArrowRightCircle />
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="openposition-col openposition-col2">
            <Row className="heading-rowbg">
              <h6>Sales/Marketing</h6>
              <Col className="text-col">
                <h4>US Technical Recruiter-Noida, India(Remote)</h4>
                <Row className="footer-row">
                  <Col sm={9} className="loc-text">
                    <p>Noida, Uttar Pradesh India</p>
                  </Col>
                  <Col sm={2} className="icon-text">
                    <p>
                      <BsArrowRightCircle />
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="openposition-col openposition-col2">
            <Row className="heading-rowbg">
              <h6>Sales/Marketing</h6>
              <Col className="text-col">
                <h4>US Technical Recruiter-Noida, India(Remote)</h4>
                <Row className="footer-row">
                  <Col sm={9} className="loc-text">
                    <p>Noida, Uttar Pradesh India</p>
                  </Col>
                  <Col sm={2} className="icon-text">
                    <p>
                      <BsArrowRightCircle />
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          


        </Row>
        
      </div>
      <label for="readmore" className="internal-viewmore" >View </label> 
    </div>
    </>
  );
};
export default Internaljob
