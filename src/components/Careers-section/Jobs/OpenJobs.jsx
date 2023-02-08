import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "./openJobs.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function OpenJobs() {
  return (
    <div>
      <Container className="openjob-container">
        {" "}
        <h2>Our open Positions</h2>
        {/* <div className="select-opt">
          <label htmlFor="num">No. of jobs per page:&nbsp;&nbsp;</label>
          <select name="jobs" id="num">
            <option value="number">12</option>
            <option value="saab">13</option>
                                <option value="opel">14</option>
                                <option value="audi">15</option> 
          </select>
        </div> */}
        <Row className="outer-row">
          <Col sm={10} className="outer-col">
            <Navbar collapseOnSelect expand="md">
              <Container className="bgjob">
                <Navbar.Brand href="#home">All jobs</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <div className="div-right">
                      <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                          id="dropdown-custom-1"
                          className="openpos-btn"
                        >
                          Location
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors locationeg">
                        <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                              className="dropdown-check"
                            ></input>
                            <label htmlFor="office" value="AL">Alabama</label>
                          </div> 
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="AK">Alaska</label>
                          </div> 
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="AZ">Arizona</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="AR">Arkansas</label>
                          </div> 
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="CA">California</label>
                          </div>  
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="CO">Colorado</label>
                          </div>  
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="CT">Connecticut</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="DE">Delaware</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="DC">District Of Columbia</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="FL">Florida</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="GA">Georgia</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="HI">Hawaii</label>
                          </div> 
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="ID">Idaho</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="IL">Illinois</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="IN">Indiana</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="IA">Iowa</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="KS">Kansas</label>
                          </div> 
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="KY">Kentucky</label>
                          </div>  
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="LA">Louisiana</label>
                          </div> 
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office"  value="ME">Maine</label>
                          </div> 
                            <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office"  value="MD">Maryland</label>
                          </div> 
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="MA">Massachusetts</label>
                          </div>  
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="MI">Michigan</label>
                          </div>   
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="MN">Minnesota</label>
                          </div>  
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="MS">Mississippi</label>
                          </div>   
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="MO">Missouri</label>
                          </div>  
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="MT">Montana</label>
                          </div>  
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="NE">Nebraska</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="NV">Nevada</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office"value="NH">New Hampshire</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="NJ">New Jersey</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="NM">New Mexico</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="NY">New York</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="NC">North Carolina</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="ND">North Dakota</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="OH">Ohio</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="OK">Oklahoma</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="OR">Oregon</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="PA">Pennsylvania</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="RI">Rhode Island</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="SC">South Carolina</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="SD">South Dakota</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="TN">Tennessee</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="TX">Texas</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="UT">Utah</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="VT">Vermont</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="VA">Virginia</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="WA">Washington</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="WV">West Virginia</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="WI">Wisconsin</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office" value="WY">Wyoming</label>
                          </div>
                            
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                          id="dropdown-custom-1"
                          className="openpos-btn"
                        >
                          Categories
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors2">
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office">Office Administrator</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="human"
                            ></input>
                            <label htmlFor="human">Human Resource</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="sales"
                            ></input>
                            <label htmlFor="sales">Sales/Marketing</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="technology"
                            ></input>
                            <label htmlFor="technology">Technology</label>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                          id="dropdown-custom-1"
                          className="openpos-btn"
                        >
                          Job Types
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors3">
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="full"
                            ></input>
                            <label htmlFor="full">Full Time</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="part"
                            ></input>
                            <label htmlFor="part">Part Time</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="cantract"
                            ></input>
                            <label htmlFor="contract">Contract</label>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Button variant="primary" className="filter-btn my-2">
                        Filter
                      </Button>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            {/* </div> */}
            <input type="checkbox" id="readmore"></input>
          <div className="scroll-bar-div">
          
            <div className="div-bggrey">
              <Row className="inner-row">
                <Col sm={9} className="inner-col">
                  <h5>
                    <Link to="jobSection">Sales Intern -On-site</Link>
                    <Outlet />

                    {/* <a href="/careers/jobSection">Sales Intern -On-site</a> */}
                  </h5>
                  <h6>Irving, Texas, United States | Technology | Full Time</h6>
                  <p>
                    Neutrosys Inc is looking for a few recent graduate
                    individuals to join a growing office in the staffing
                    business. This is a great opportunity to ...
                  </p>
                  <p className="num-p">
                    2021-11-09 16:30:20 -{" "}
                    <span style={{ color: "green" }}>
                      Accepting Applications
                    </span>
                  </p>
                </Col>
                <Col sm={2} className="inner-col2">
                  <h5>
                  <Link to="jobSection"><a>Apply</a></Link>
                    <Outlet />
                  </h5>
                </Col>
                {/* <hr style={{border:'2px dotted grey', width:'93%', marginLeft:'2rem'}}></hr> */}
              </Row>
            </div>

            <div className="white-box-shadow">
              <Row className="inner-row">
                <Col sm={9} className="inner-col">
                  <h5>
                    <Link to="salesIntern">Sales Intern</Link>
                    <Outlet />
                  </h5>
                  <h6>Irving, Texas, United States | Technology | Full Time</h6>
                  <p>
                    Neutrosys Inc is looking for a few recent graduate
                    individuals to join a growing office in the staffing
                    business. This is a great opportunity to ...
                  </p>
                  <p className="num-p">
                    2021-09-01 19:46:20 -{" "}
                    <span style={{ color: "red" }}>Position Closed</span>
                  </p>
                </Col>
                <Col sm={2} className="inner-col2">
                  <h5>
                    <a href="/#">Apply</a>
                  </h5>
                </Col>
                {/* <hr style={{border:'2px dotted grey', width:'93%', marginLeft:'2rem'}}></hr> */}
              </Row>
            </div>
            <div className="div-bggrey">
              <Row className="inner-row">
                <Col sm={9} className="inner-col">
                  <h5>
                    <a href="/#">Account Manager</a>
                  </h5>
                  <h6>Irving, Texas, United States | Technology | Full Time</h6>
                  <p>
                    Neutrosys Inc, a talent and business solutions provider, is
                    seeking to hire an enthusiastic, persuasive, <br></br>
                    enthusiastic, persuasive, organized and motivated IT
                    Staffing sales professional.
                    <br></br>If you believe in ...
                  </p>
                  <p className="num-p">
                    2021-09-01 19:35:26 -{" "}
                    <span style={{ color: "red" }}>Position Closed</span>
                  </p>
                </Col>
                <Col sm={2} className="inner-col2">
                  <h5>
                    <a href="/#">Apply</a>
                  </h5>
                </Col>
                {/* <hr style={{border:'2px dotted grey', width:'93%', marginLeft:'2rem'}}></hr> */}
              </Row>
            </div>
            <div className="white-box-shadow">
              <Row className="inner-row ">
                <Col sm={9} className="inner-col">
                  <h5>
                    <a href="/#">Linux Administrator - Chicago</a>
                  </h5>
                  <h6>
                    Chicago, Illinois, United States | Technology | Contract
                  </h6>
                  <p>
                    <span style={{ fontWeight: "500" }}>
                      Responsibilities of the role:
                    </span>
                    <li>Design and Implement serverless software solutions.</li>
                    <li>
                      Play role in understanding business needs in context, from
                      ...
                    </li>
                  </p>
                  <p className="num-p">
                    2021-07-01 23:50:09 -{" "}
                    <span style={{ color: "red" }}>Position Closed</span>
                  </p>
                </Col>
                <Col sm={2} className="inner-col2">
                  <h5>
                    <a href="/#">Apply</a>
                  </h5>
                </Col>
                {/* <hr style={{border:'2px dotted grey', width:'93%', marginLeft:'2rem'}}></hr> */}
              </Row>
            </div>
             <div className="div-bggrey">
              <Row className="inner-row">
                <Col sm={9} className="inner-col">
                  <h5>
                    <a href="/#">Facets Tester - Remote</a>
                  </h5>
                  <h6>MO, Missouri, United States | Technology | Contract</h6>
                  <p>
                    We are looking for multiple Healthcare Facets Tester to fill
                    the urgent requirement for one of our clients.
                  </p>
                  <p className="num-p">
                    2021-06-16 20:42:35 -{" "}
                    <span style={{ color: "red" }}>Position Closed</span>
                  </p>
                </Col>
                <Col sm={2} className="inner-col2">
                  <h5>
                    <a href="/#">Apply</a>
                  </h5>
                </Col>
                
              </Row>
            </div> 

            
            <div className="white-box-shadow">
              <Row className="inner-row">
                <Col sm={9} className="inner-col">
                  <h5>
                    <Link to="salesIntern">Sales Intern</Link>
                    <Outlet />
                  </h5>
                  <h6>Irving, Texas, United States | Technology | Full Time</h6>
                  <p>
                    Neutrosys Inc is looking for a few recent graduate
                    individuals to join a growing office in the staffing
                    business. This is a great opportunity to ...
                  </p>
                  <p className="num-p">
                    2021-09-01 19:46:20 -{" "}
                    <span style={{ color: "red" }}>Position Closed</span>
                  </p>
                </Col>
                <Col sm={2} className="inner-col2">
                  <h5>
                    <a href="/#">Apply</a>
                  </h5>
                </Col>
               
              </Row>
            </div> 
            <div className="div-bggrey">
              <Row className="inner-row">
                <Col sm={9} className="inner-col">
                  <h5>
                    <a href="/#">Facets Tester - Remote</a>
                  </h5>
                  <h6>MO, Missouri, United States | Technology | Contract</h6>
                  <p>
                    We are looking for multiple Healthcare Facets Tester to fill
                    the urgent requirement for one of our clients.
                  </p>
                  <p className="num-p">
                    2021-06-16 20:42:35 -{" "}
                    <span style={{ color: "red" }}>Position Closed</span>
                  </p>
                </Col>
                <Col sm={2} className="inner-col2">
                  <h5>
                    <a href="/#">Apply</a>
                  </h5>
                </Col>
              
              </Row>
            </div>  
            
           
            
          </div>
          <label for="readmore" className="contract-viewmore" >View </label>  
         
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OpenJobs;