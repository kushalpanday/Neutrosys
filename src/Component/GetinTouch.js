import React from 'react';
import './contactUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function LocationDetail() {
    return(
        <>
            <div className='Maingetintouch-div'>
            <Container>
                <h3 className='getintouch'>Get in Touch!!</h3>
                <p className='helpquote-p'>Let's connect and talk to find out how<br></br> our
                company csn benefit you from our services.</p>
                    <Row className='getintouch-row'>
                        <Col sm={3} className='getintouch-col'>
                            <div className='locationicon'>
                                <img src='locationicon.png'></img>
                            </div>
                            <p className='icon-para'>Irving, Texas, USA</p>
                        </Col>

                        <Col sm={3} className='getintouch-col'>
                        <div className='phoneicon'>
                                <img src='phoneicon.png'></img>
                            </div>
                            <p className='icon-para'>+1(214)382-6161</p>
                        </Col>

                        <Col sm={3} className='getintouch-col'>
                        <div className='emailicon'>
                                <img src='emailicon.png'></img>
                            </div>
                            <p className='icon-para'>Info@neutrosys.com</p>
                        </Col>
                    </Row>
                    <Row className='form-row mb-4'>
                        <Col sm={9} className='form-col'>
                            <h4 className='heading-form'>Contact Us</h4>
                            <p className='heading-para'>I'm interested in..</p>
                            <Row className='field-row1'>
                                <Col sm={2} className='field-col1'>
                                    <p>Talent Solutions</p>
                                </Col>

                                <Col sm={2} className='field-col1'>
                                <p>Software Development</p>
                                </Col>

                                <Col sm={2} className='field-col1'>
                                <p>Outsourcing</p>
                                </Col>

                                <Col sm={2} className='field-col1'>
                                <p>Software Testing</p>
                                </Col>

                                <Col sm={2} className='field-col1'>
                                    <p>Looking for a job</p>
                                </Col>

                                <Col sm={2} className='field-col1'>
                                <p>Other</p>
                                </Col>
                                
                            </Row>

                            {/* <Row className='field-row2 mt-1'>
                                <Col sm={2} className='field-col1'>
                                    <p>Looking for a job</p>
                                </Col>

                                <Col sm={2} className='field-col1'>
                                <p>Other</p>
                                </Col>

                                
                            </Row> */}
                            
                            <Row className='table-form-row'>
                                <Col>
                              
                                <input type="name" class="form-control" id="name" placeholder="Your name"
                                 name="name"></input>
                                </Col>
                            </Row>
                            <Row className='table-form-row'>
                                <Col>
                                
                                <input type="email" class="form-control" id="email" placeholder="Your email"
                                 name="email"></input>
                                </Col>
                            </Row>
                            <Row className='table-form-row'>
                                <Col sm={4}>
                                
                                <input type="number" class="form-control" id="country" placeholder="Nepal +977"
                                 name="country"></input>
                                </Col>
                                <Col sm={8}>
                                
                                <input type="number" class="form-control" id="number" placeholder="Your mobile/phone
                                 number"
                                 name="number"></input>
                                </Col>
                            </Row>
                            <Row className='table-form-row'>
                                <Col>
                                
                                <input type="location" class="form-control" id="location" placeholder="Your location
                                (Country, State/Province & City)"
                                 name="location"></input>
                                </Col>
                            </Row>
                            <Row className='table-form-row'>
                                <Col>
                                
                                <input type="subject" class="form-control" id="subject" placeholder="Your subject"
                                 name="subject"></input>
                                </Col>
                            </Row>
                            <Row className='table-form-row'>
                                <Col>
                                
                                <textarea class="form-control messagetxt"  id="comment" placeholder="Your message" 
                                name="text"></textarea>
                                </Col>
                            </Row>
                            <Row className='table-form-row mt-2'>
                                <Col sm={5}>
                                <input type="file" id="files" name="files" className="uploadfiles" multiple/>
                                </Col>
                            </Row>
                            <Row className='table-form-row button-row mb-4'>
                                <Col sm={5} className='button-col'>
                                <button type="submit" class="btn btn-primary">Send</button>
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>
                    
            </Container>
            </div>
            
        </>
    )
}