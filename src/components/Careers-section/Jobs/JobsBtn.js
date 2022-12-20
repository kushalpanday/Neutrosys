
import React from 'react';
import './JobsBtn.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Contractjob from "./Contractjob";
import Internaljob from "./Internaljob";

export default function JobsBtn() {
    const [job,setJob]=useState(<Contractjob/>)
        const cont=()=>{
        setJob(<Contractjob/>);
        }
        const inte=()=>{
        setJob(<Internaljob/>);
        }
        
    return(
        <>
            <div className='buttonjobs-maindiv'>
                <div className='btns-div'>
                    <Button variant="outline-primary" size="lg" className='contract-btn' onClick={cont}>Contract jobs</Button>
                  
                    <Button variant="outline-primary" size="lg" className='primary-btn' onClick={inte}>Internal jobs</Button>
                </div>
                <div className='job-btn'>{job}</div>
            </div>
        </>
    )
}