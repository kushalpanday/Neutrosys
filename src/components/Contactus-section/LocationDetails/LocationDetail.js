import React, { useState } from 'react';
import '../contactUs.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { BsPrinterFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';



export default function LocationDetail() {
    const [show, setShow] = useState(false);
    return(
        <>
            <Row className='location-row'>
                <h3 className='detail-heading'>Location With Details</h3>
                    <Col sm={3} className='location-col mb-5'>
                    <div className='timeicon-div'>
                        <img src='./images/contact-us/timer.png' height={33} width={33} alt="icons"></img>
                    </div>
                        <h6>Working hours</h6>
                        <p>Monday to Friday<br></br>
                        8:30 AM to 5:00 PM</p>
                            
                    </Col>
                    <Col sm={3} className='location-col mb-5'>
                    <div className='locationicon-div'>
                        <img src='./images/contact-us/iconlocation.png' height={35} width={35} alt="icons"></img>
                    </div>
                      <h6>Headquarters</h6>
                        <p>1431 Greenway Drive, 8th floor,<br></br>
                        Irving, TX 75038, United States</p>
                    <div className='viewlocation-div'>
                        <div style={{cursor:"pointer",color:"blue",textDecoration:"underline"}}onClick={() => setShow(true)}>View Location</div>
                    </div>
                    <Modal
                        
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="my-modal"
                        aria-labelledby="example-custom-modal-styling-title">
                        <Modal.Header closeButton className='close-btn'>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Our Location 
                        </Modal.Title>
                        <Button className='map-btn'>
                            <p><BsPrinterFill/></p>
                            <span className='tooltiptext'>Print Map</span>
                        </Button>
                        </Modal.Header>
                        <Modal.Body>
                        
                       <iframe title="map" style={{height:'350px',width:'100%'}} id="gmap_canvas"
                        src="https://maps.google.com/maps?q=neutrosys.Inc&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                        </Modal.Body>
                    </Modal>
                                    
                    </Col>
                    <Col sm={3} className='location-col mb-5'>
                    <div className='socialicon-div'>
                        <img src='./images/contact-us/social.png' height={35} width={35} alt="icons"></img>
                    </div>
                        <h6>Socials</h6>
                        <p className='follow-para'>Follow us</p>
                        <div className='socialsicon-div'>
                            <a href='/#'><img src='./images/contact-us/fbicon.png' className='image-class' height={40} width={40} alt="icons"></img></a>
                            <a href='/#'><img src='./images/contact-us/linkedinicon.png' height={41} width={41} alt="icons"></img></a>
                        </div>
                    </Col>
            </Row>
               
               
            
           
        </>
    )
}