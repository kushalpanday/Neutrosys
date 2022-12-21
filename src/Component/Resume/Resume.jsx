import React, { Component ,useRef } from 'react';
import './resume.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';


export default function Resume() {
   


    return(
        <>
        <div className='resume-maindiv'>
            <Row className='resume-row'>
                <Col  className='resume-col1'>
                    <img src='resume.jpg'></img>
                </Col>

                <Col  className='resume-col2'>
                    <h2>Looking for new Opportunities?</h2>
                    <p>Submit your resume and we may get back to you when we have an opportunity 
                    that matches your experience.</p>

                    <div className='btn-3div'>
                        <button className='rbtn1'>Consulting</button>
                        <button className='rbtn2'>Internal job</button>
                        <button className='rbtn3'>Internship</button>
                    </div>
                </Col>
                
            </Row>
        </div>
        </>
    )
}