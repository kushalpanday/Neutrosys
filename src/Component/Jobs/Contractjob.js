import React, { useState } from 'react';
import './Contractjob.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Textcoldescribe from "./Textcoldescribe";
import Textcoldescribe2 from './Textcoldescribe2';
import Textcoldescribe3 from './Textcoldescribe3';
import Textcoldescribe4 from './Textcoldescribe4';
import Textcoldescribe5 from './Textcoldescribe5';
import Textcoldescribe6 from './Textcoldescribe6';
import { BsCircleFill } from 'react-icons/bs';
import ProgressBar from 'react-bootstrap/ProgressBar';


 const Contractjob = () => {
    const [describe,setJob]=useState(<Textcoldescribe/>)
        const text1des=()=>{
        setJob(<Textcoldescribe/>);
        }
        const text2des=()=>{
        setJob(<Textcoldescribe2/>);
        }
        const text3des=()=>{
         setJob(<Textcoldescribe3/>);
        }
        const text4des=()=>{
        setJob(<Textcoldescribe4/>);
         }
        const text5des=()=>{
        setJob(<Textcoldescribe5/>);
        }
        const text6des=()=>{
        setJob(<Textcoldescribe6/>);
         }
    return(
        <>
            <div className='contract-div'>
                <h2>Work as an Consultant</h2>
                <p>Opportunity to work with
                 our top clients in different areas such as Healthcare, banking finance, etc,
                all over the country.</p>
            <Container>
                <Row className='top-row'>
                    <Col sm={2} className='top-col' onClick={text1des}>
                        <div className='cricle-div'></div>
                        <h5>Know your need</h5>
                    </Col>
                    <Col sm={2} className='top-col' onClick={text2des}>
                    <div className='cricle-div'></div>
                        <h5>Match skill with opportunities</h5>
                    </Col>
                     <Col sm={2} className='top-col' onClick={text3des}>
                    <div className='cricle-div'></div>
                        <h5>Prepare for interview</h5>
                    </Col>
                    <Col sm={2} className='top-col' onClick={text4des}>
                    <div className='cricle-div'></div>
                        <h5>Smooth Onboarding</h5>
                    </Col>
                    <Col sm={2} className='top-col' onClick={text5des}>
                    <div className='cricle-div'></div>
                        <h5>Continuous Follow Up</h5>
                    </Col>
                    <Col sm={2} className='top-col' onClick={text6des}>
                    <div className='cricle-div'></div>
                        <h5>New Opportunities</h5>
                    </Col>
                    
                    
                    <div className='progress-div'>
                    <ProgressBar>
                        <ProgressBar  animated now={20} key={1} className='bar1'/>
                        <ProgressBar  animated now={20} key={2} className='bar2'/>
                        <ProgressBar  animated now={20} key={3} className='bar3'/>
                        <ProgressBar  animated now={20} key={4} className='bar4'/>
                        <ProgressBar  animated now={20} key={5} className='bar5'/>
                        
                    </ProgressBar>
                    </div>
                    
                    

                <p>{describe}</p>
                </Row>
                
                

        
                
            </Container>
            </div>
        </>
    )
}
export default Contractjob
