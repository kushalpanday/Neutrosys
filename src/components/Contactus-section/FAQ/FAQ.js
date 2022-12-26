import React from 'react';
import '../contactUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function LocationDetail() {
    return(
        <>
            <Container>
                <h3 className='faq'>FAQ</h3>
                <p className='faq-para'>Can't find the answer you're looking for?<br></br>
                We have shared some of our frequently asked questions to help you out.</p>
                <div className='faq-bgdiv'>
                <Row className='faq-row'>
                    <Col sm={3} className='faq-col1'>
                        <p>Careers</p>
                    </Col>
                    <Col sm={8} className='faq-col2'>
                        <p>What does Neutrosys do?</p>
                    </Col>
                </Row>
                <Row className='faq-row'>
                    <Col sm={3} className='faq-col1'>
                        <p>Services</p>
                    </Col>
                    <Col sm={8} className='faq-col2'>
                        <p>Will you sign a non-disclosure agreement?</p>
                    </Col>
                </Row>
                <Row className='faq-row'>
                    <Col sm={3} className='faq-col1'>
                        <p>Products</p>
                    </Col>
                    <Col sm={8} className='faq-col2'>
                        <p>Do you offer a free consultation?</p>
                    </Col>
                </Row>
                <Row className='faq-row'>
                    <Col sm={3} className='faq-col1'>
                        <p>Training & Support</p>
                    </Col>
                    <Col sm={8} className='faq-col2'>
                        <p>What results can I expect from working with a consultant?</p>
                    </Col>
                </Row>
                </div>
                
            </Container>
        </>
    )
}