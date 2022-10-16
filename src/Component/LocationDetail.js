import React from 'react';
import './contactUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function LocationDetail() {
    return(
        <>
            <Row className='location-row'>
                <h3 className='detail-heading'>Location With Details</h3>
                    <Col sm={3} className='location-col mb-5'>
                    <div className='locationicon-div'>
                        <img src='iconlocation.png' height={35} width={35}></img>
                    </div>
                      <h6>Location</h6>
                        <p>Shitalnagar, Devdaha 7,<br></br>
                        Rupandehi, Nepal</p>
                            
                    </Col>
                    <Col sm={3} className='location-col mb-5'>
                    
                        
                    </Col>
                    <Col sm={3} className='location-col mb-5'>
                    <div className='timeicon-div'>
                        <img src='timer.png' height={30} width={30}></img>
                    </div>
                        <h6>Working hours</h6>
                        <p>Open Sunday to Friday from<br></br>
                        10:00 AM to 6:00 PM</p>
                    </Col>
            </Row>
               
               
            
           
        </>
    )
}