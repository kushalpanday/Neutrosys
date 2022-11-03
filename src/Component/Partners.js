import React, { useState } from 'react';
import './Career.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Partners() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <>
        <div className='mainbg-div'>
            <h2>Our Partners</h2>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className='partners-bg mb-5'>
        <Row className='partner-row'>
            <Col sm={7} className='partner-col'>
                <Row className='inner-row'>
                    <Col sm={3} className='cirleimage'>
                        <img src='partner1.jpg'></img>
                    </Col>
                    <Col sm={8} className='textparagraph'>
                    <p>Neutrosys is an IT staffing and software development company.
                    We are currently providing IT services mainly in the US and Nepal. We provide 
                    services from USA, Nepal, India and Finland.Neutrosys is an IT staffing and software development company.
                    We are currently providing IT services mainly in the US and Nepal. We provide 
                    services from USA, Nepal, India and Finland.</p>
                    </Col>
                </Row>
            </Col>
        </Row>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='partners-bg mb-5'>
        <Row className='partner-row'>
            <Col sm={7} className='partner-col'>
                <Row className='inner-row'>
                    <Col sm={3} className='cirleimage'>
                        <img src='partner2.jpg'></img>
                    </Col>
                    <Col sm={8} className='textparagraph'>
                    <p>Neutrosys is an IT staffing and software development company.
                    We are currently providing IT services mainly in the US and Nepal. We provide 
                    services from USA, Nepal, India and Finland.Neutrosys is an IT staffing and software development company.
                    We are currently providing IT services mainly in the US and Nepal. We provide 
                    services from USA, Nepal, India and Finland.</p>
                    </Col>
                </Row>
            </Col>
        </Row>
      </div>

        
      </Carousel.Item>
      <Carousel.Item>
      <div className='partners-bg mb-5'>
        <Row className='partner-row'>
            <Col sm={7} className='partner-col'>
                <Row className='inner-row'>
                    <Col sm={3} className='cirleimage'>
                        <img src='partner3.jpg'></img>
                    </Col>
                    <Col sm={8} className='textparagraph'>
                    <p>Neutrosys is an IT staffing and software development company.
                    We are currently providing IT services mainly in the US and Nepal. We provide 
                    services from USA, Nepal, India and Finland.Neutrosys is an IT staffing and software development company.
                    We are currently providing IT services mainly in the US and Nepal. We provide 
                    services from USA, Nepal, India and Finland.</p>
                    </Col>
                </Row>
            </Col>
        </Row>
      </div>
        
        
      </Carousel.Item>
    </Carousel>
        </div>
      
        </>
    )
    }