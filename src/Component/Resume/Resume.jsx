import React, { Component ,useRef } from 'react';
import './resume.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ReactToPrint from 'react-to-print';

export default function Resume() {
   const Componentref =useRef();


    return(
        <>
        <div className='resume-maindiv'>
       <ReactToPrint trigger={()=> <button>print me</button>} 
        content={()=>Componentref.current}
       />

            <Row className='resume-row' ref={Componentref} >
                <Col  className='resume-col1'>
                    <img src='resume.jpg'></img>
                </Col>

                <Col  className='resume-col2'>
                    <h2>Looking for new Opportunities?</h2>
                    <p>Submit your resume and we may get back to you when we have an opportunity 
                    that matches your experience.</p>

                    <div className='btn-3div'>
                        <Button size="lg" className='rbtn'>Consulting</Button>
                        <Button size="lg" className='rbtn'>Internal job</Button>
                        <Button size="lg" className='rbtn'>Internship</Button>
                    </div>
                </Col>
                
            </Row>
        </div>
        </>
    )
}