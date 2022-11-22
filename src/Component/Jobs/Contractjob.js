import React, { useState } from 'react';
import './Contractjob.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Textcoldescribe from "./Textcoldescribe";
import Textcoldescribe2 from './Textcoldescribe2';
import Textcoldescribe3 from './Textcoldescribe3';
import Textcoldescribe4 from './Textcoldescribe4';
import Textcoldescribe5 from './Textcoldescribe5';
import Textcoldescribe6 from './Textcoldescribe6';
import { BsCircleFill } from 'react-icons/bs';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

 const Contractjob = () => {
    const [describe,setJob]=useState(<Textcoldescribe/>)
        const text1des=()=>{
        setJob(<Textcoldescribe/>);
        }
        const text2des=()=>{
        setJob(<Textcoldescribe2/>);
        }
        const text3des=()=>{
         setJob(<Textcoldescribe3/>);
        }
        const text4des=()=>{
        setJob(<Textcoldescribe4/>);
         }
        const text5des=()=>{
        setJob(<Textcoldescribe5/>);
        }
        const text6des=()=>{
        setJob(<Textcoldescribe6/>);
         }
    return(
        <>
            <div className='contract-div'>
                <h2>Work as an Consultant</h2>
                <p>Opportunity to work with
                 our top clients in different areas such as Healthcare, banking finance, etc,
                all over the country.</p>
            <Container>
                <Row className='top-row'>
                    <Col sm={2} className='top-col' onClick={text1des}>
                        <div className='cricle-div'></div>
                        <h5>Know your need</h5>
                    </Col>
                    <Col sm={2} className='top-col' onClick={text2des}>
                    <div className='cricle-div'></div>
                        <h5>Match skill with opportunities</h5>
                    </Col>
                     <Col sm={2} className='top-col' onClick={text3des}>
                    <div className='cricle-div'></div>
                        <h5>Prepare for interview</h5>
                    </Col>
                    <Col sm={2} className='top-col' onClick={text4des}>
                    <div className='cricle-div'></div>
                        <h5>Smooth Onboarding</h5>
                    </Col>
                    <Col sm={2} className='top-col' onClick={text5des}>
                    <div className='cricle-div'></div>
                        <h5>Continuous Follow Up</h5>
                    </Col>
                    <Col sm={2} className='top-col' onClick={text6des}>
                    <div className='cricle-div'></div>
                        <h5>New Opportunities</h5>
                    </Col>
                    
                    
                    <div className='progress-div'>
                    <ProgressBar>
                        <ProgressBar  animated now={20} key={1} className='bar1'/>
                        <ProgressBar  animated now={20} key={2} className='bar2'/>
                        <ProgressBar  animated now={20} key={3} className='bar3'/>
                        <ProgressBar  animated now={20} key={4} className='bar4'/>
                        <ProgressBar  animated now={20} key={5} className='bar5'/>
                        
                    </ProgressBar>
                    </div>
                    
                <p>{describe}</p>
                </Row>
                
                    <div>
                        <h2>Our open Positions</h2>
                        <div className='select-opt'>
                            <label for="num">No. of jobs per page:&nbsp;&nbsp;</label>
                            <select name="jobs" id="num">
                                <option value="number">12</option>
                                {/* <option value="saab">13</option>
                                <option value="opel">14</option>
                                <option value="audi">15</option> */}
                            </select>
                         </div>

                         
                            <Row className='outer-row'>
                                <Col sm={10} className='outer-col'>
                                    <div className='bgjob'>
                                        <div className='alljob-div'>
                                            <h3>All jobs</h3>
                                        </div>

                                        <div className='div-right'>
                                        <Dropdown as={ButtonGroup}>
                                            <Dropdown.Toggle id="dropdown-custom-1">Location</Dropdown.Toggle>
                                            <Dropdown.Menu className="super-colors locationeg">
                                            <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="office"></input>
                                                    <label for="horns">Afghanistan</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="human"></input>
                                                    <label for="human">Albania</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="sales"></input>
                                                    <label for="sales">Brazil</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="technology"></input>
                                                    <label for="technology">Canada</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="technology"></input>
                                                    <label for="technology">Finland</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="technology"></input>
                                                    <label for="technology">India</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="technology"></input>
                                                    <label for="technology">Singapore</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="technology"></input>
                                                    <label for="technology">Texas</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="technology"></input>
                                                    <label for="technology">United Kingdom</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="technology"></input>
                                                    <label for="technology">Vietnam</label>
                                                </div>
                                           </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown as={ButtonGroup}>
                                            <Dropdown.Toggle id="dropdown-custom-1">Categories</Dropdown.Toggle>
                                            <Dropdown.Menu className="super-colors2">
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="office"></input>
                                                    <label for="office">Office Administrator</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="human"></input>
                                                    <label for="human">Human Resource</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="sales"></input>
                                                    <label for="sales">Sales/Marketing</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="technology"></input>
                                                    <label for="technology">Technology</label>
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown as={ButtonGroup}>
                                            <Dropdown.Toggle id="dropdown-custom-1">Job Types</Dropdown.Toggle>
                                            <Dropdown.Menu className="super-colors3">
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="full"></input>
                                                    <label for="full">Full Time</label>
                                                </div>
                                                <div className='jobitems'>
                                                <input type="checkbox" id="tech" name="part"></input>
                                                    <label for="part">Part Time</label>
                                                </div>
                                               <div className='jobitems'>
                                               <input type="checkbox" id="tech" name="cantract"></input>
                                                    <label for="contract">Contract</label>
                                               </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button variant="primary" className='filter-btn'>Filter</Button>
                                        </div>

                                    </div>

                                    <div className='div-bggrey'> 
                                    <Row className='inner-row'>
                                        <Col sm={9} className='inner-col'>
                                            <h5><a href='#'>Sales Intern -On-site</a></h5>
                                            <h6>Irving, Texas, United States | Technology | Full Time</h6>
                                            <p>Neutrosys Inc is looking for a few recent graduate individuals to 
                                            join a growing office in the staffing business. 
                                             This is a great opportunity to ...</p>
                                            <p className='num-p'>2021-11-09 16:30:20 - <span style={{color:'green'}}>Accepting Applications</span></p>
                                        </Col>
                                        <Col sm={2} className='inner-col2'>
                                            <h5><a href='#'>Apply</a></h5>
                                        </Col>
                                        {/* <hr style={{border:'2px dotted grey', width:'93%', marginLeft:'2rem'}}></hr> */}
                                    </Row>
                                    </div>
                                     
                                     <Row className='inner-row'>
                                        <Col sm={9} className='inner-col'>
                                            <h5><a href='#'>Sales Intern</a></h5>
                                            <h6>Irving, Texas, United States | Technology | Full Time</h6>
                                            <p>Neutrosys Inc is looking for a few recent graduate individuals to 
                                            join a growing office in the staffing business. 
                                             This is a great opportunity to ...</p>
                                            <p className='num-p'>2021-09-01 19:46:20 - <span style={{color:'red'}}>Position Closed</span></p>
                                        </Col>
                                        <Col sm={2} className='inner-col2'>
                                            <h5><a href='#'>Apply</a></h5>
                                        </Col>
                                        {/* <hr style={{border:'2px dotted grey', width:'93%', marginLeft:'2rem'}}></hr> */}
                                    </Row>
                                      
                                    
                                    <div className='div-bggrey'> 
                                    <Row className='inner-row'>
                                        <Col sm={9} className='inner-col'>
                                            <h5><a href='#'>Account Manager</a></h5>
                                            <h6>Irving, Texas, United States | Technology | Full Time</h6>
                                            <p>Neutrosys Inc, a talent and business solutions provider, is seeking to hire an  enthusiastic, persuasive, <br></br> 
                                            enthusiastic, persuasive, organized and motivated IT Staffing sales professional.
                                            <br></br>If you believe in ...</p>
                                            <p className='num-p'>2021-09-01 19:35:26 - <span style={{color:'red'}}>Position Closed</span></p>
                                        </Col>
                                        <Col sm={2} className='inner-col2'>
                                            <h5><a href='#'>Apply</a></h5>
                                        </Col>
                                        {/* <hr style={{border:'2px dotted grey', width:'93%', marginLeft:'2rem'}}></hr> */}
                                    </Row>
                                    </div>

                                    
                                    <Row className='inner-row-bg'>
                                        <Col sm={9} className='inner-col'>
                                            <h5><a href='#'>Linux Administrator - Chicago</a></h5>
                                            <h6>Chicago, Illinois, United States | Technology | Contract</h6>
                                            <p><span style={{fontWeight:"500"}}>Responsibilities of the role:</span>
                                            <li>Design and Implement serverless software solutions.</li>
                                            <li>Play role in understanding business needs in context, from ...</li>
                                            </p>
                                            <p className='num-p'>2021-07-01 23:50:09 - <span style={{color:'red'}}>Position Closed</span></p>
                                        </Col>
                                        <Col sm={2} className='inner-col2'>
                                            <h5><a href='#'>Apply</a></h5>
                                        </Col>
                                        {/* <hr style={{border:'2px dotted grey', width:'93%', marginLeft:'2rem'}}></hr> */}
                                    </Row>
                                    
                                    <div className='div-bggrey'> 
                                    <Row className='inner-row'>
                                        <Col sm={9} className='inner-col'>
                                            <h5><a href='#'>Facets Tester - Remote</a></h5>
                                            <h6>MO, Missouri, United States | Technology | Contract</h6>
                                            <p>We are looking for multiple Healthcare Facets Tester to fill the urgent 
                                                requirement for one of our clients.</p>
                                            <p className='num-p'>2021-06-16 20:42:35 - <span style={{color:'red'}}>Position Closed</span></p>
                                        </Col>
                                        <Col sm={2} className='inner-col2'>
                                            <h5><a href='#'>Apply</a></h5>
                                        </Col>
                                        {/* <hr style={{border:'2px dotted grey', width:'93%', marginLeft:'2rem'}}></hr> */}
                                    </Row>
                                    </div>

                                    
                                    <Row className='inner-row-bg'>
                                        <Col sm={9} className='inner-col'>
                                            <h5><a href='#'>Health Care ETL Tester - Remote</a></h5>
                                            <h6>TX, Texas, United States | Technology | Contract</h6>
                                            <p>We are looking for multiple Healthcare Facets Tester to fill the urgent 
                                                requirement for one of our clients.</p>
                                            <p className='num-p'>2021-05-21 20:50:39 - <span style={{color:'red'}}>Position Closed</span></p>
                                        </Col>
                                        <Col sm={2} className='inner-col2'>
                                            <h5><a href='#'>Apply</a></h5>
                                        </Col>
                                    </Row>
                                    
                                </Col>
                            </Row>
                         
                    </div>

        
                
            </Container>
            </div>
        </>
    )
}
export default Contractjob
