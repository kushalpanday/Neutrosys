import React from 'react';
import './Career.css';


export default function Header() {
    return(
        <>
            <div className='header-image mb-5'>
                <img src='careerbg.jpg'></img>
                <div className='text'>
                    <h2 className='heading-career'>Careers</h2>
                    <p>Neutrosys is an IT staffing and software development company.<br></br>
                    We are currently providing IT services mainly in the US and <br></br>Nepal. We provide 
                    services from USA, Nepal, India and Finland.</p>
                </div>
            </div>
        </>
    )
}