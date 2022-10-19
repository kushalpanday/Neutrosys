import React, { useState } from 'react';
import './contactUs.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';



export default function LocationDetail() {
    const [show, setShow] = useState(false);
    return(
        <>
            <Row className='location-row'>
                <h3 className='detail-heading'>Location With Details</h3>
                    <Col sm={3} className='location-col mb-5'>
                    <div className='timeicon-div'>
                        <img src='timer.png' height={33} width={33}></img>
                    </div>
                        <h6>Working hours</h6>
                        <p>Open Sunday to Friday from<br></br>
                        10:00 AM to 6:00 PM</p>
                            
                    </Col>
                    <Col sm={3} className='location-col mb-5'>
                    <div className='locationicon-div'>
                        <img src='iconlocation.png' height={35} width={35}></img>
                    </div>
                      <h6>Headquarters</h6>
                        <p>Shitalnagar, Devdaha 7,<br></br>
                        Rupandehi, Nepal</p>
                    <div className='viewlocation-div'>
                        <p><a href='#' onClick={() => setShow(true)}>View Location</a></p>
                    </div>
                    <Modal
                        size='lg'
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                       
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Our Location
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                       <iframe style={{height:'450px', width:'100%'}} id="gmap_canvas" src="https://maps.google.com/maps?q=neutrosys.Inc&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </Modal.Body>
                    </Modal>
                                    
                    </Col>
                    <Col sm={3} className='location-col mb-5'>
                    <div className='socialicon-div'>
                        <img src='social.png' height={35} width={35}></img>
                    </div>
                        <h6>Socials</h6>
                        <p>Follow us on</p>
                        <div className='socialsicon-div'>
                            <a href='#'><img src='fbicon.png' className='image-class' height={40} width={40}></img></a>
                            <a href='#'><img src='linkedinicon.png' height={41} width={41}></img></a>
                        </div>
                    </Col>
            </Row>
               
               
            
           
        </>
    )
}