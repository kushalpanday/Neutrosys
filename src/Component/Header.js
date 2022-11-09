import React from 'react';
import './contactUs.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Header() {
    return(
        <>

            <Row className='header-row '>
                <Col sm={5} className="col-p">
                    <h2 className='heading-h'>Contact Us</h2>
                    <p className='para-p'>Neutrosys is an IT staffing and software development company.<br></br>
                    We are currently providing IT services mainly in the US and <br></br>Nepal. We provide 
                    services from USA, Nepal, India and Finland.</p>
                </Col>

                <Col sm={7} className="col-image">
                    <img src='headerimg1.jpg' alt="icons"></img>
                </Col>
            </Row>
        </>
    
        )
    }
