import React from 'react';
import './contactUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from './Form';
import FormWithMui from './FormWithMui';



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
                <FormWithMui />
            </Container>
            </div>
            
        </>
    )
}