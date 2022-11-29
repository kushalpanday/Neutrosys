import React from 'react';
import './WorkWithUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiTeamFill } from 'react-icons/ri';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { MdOutlineComputer } from 'react-icons/md';
import { MdGames } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';


export default function Workwithus() {
    return(
        <>
            <div className='workwithus-maindiv'>
                <h2>Why work with us?</h2>
                <Container className="work-with-us-container">
                    <Row className='box-row mt-3'>
                        <Col md={6} lg={4}className='box-col'>
                        <div className='parabox-text'>
                            <div className='icon1'><RiTeamFill/></div>
                            <h5 className='icon1-h5'>Team</h5>
                            <p className='box1-text'>We drive transformative results for our clients without
                            of the box marketing magic we're really good at what we do.</p>
                        </div>
                           
                        </Col>

                        <Col md={6} lg={4} className='box-col'>
                        <div className='parabox-text'>
                            <div className='icon2'><GiSatelliteCommunication/></div>
                            <h5 className='icon1-h5'>Communication</h5>
                            <p className='box1-text'>We drive transformative results for our clients without
                            of the box marketing magic we're really good at what we do.</p>
                        </div>
                        </Col>

                        <Col md={6} lg={4} className='box-col'>
                        <div className='parabox-text'>
                            <div className='icon3'><MdOutlineComputer/></div>
                            <h5 className='icon1-h5'>Technology</h5>
                            <p className='box1-text'>We drive transformative results for our clients without
                            of the box marketing magic we're really good at what we do.</p>
                        </div>
                        </Col>
                    {/* <Row className='box-row2'> */}
                        <Col md={6} lg={4}className='box-col2'>
                        <div className='parabox-text'>
                            <div className='icon4'><MdGames/></div>
                            <h5 className='icon1-h5'>Game Changers</h5>
                            <p className='box1-text'>We drive transformative results for our clients without
                            of the box marketing magic we're really good at what we do.</p>
                        </div>
                        </Col>

                        <Col md={6} lg={4} className='box-col3'>
                        <div className='parabox-text'>
                            <div className='icon5'><BsFillSunFill/></div>
                            <h5 className='icon5-h5'>Environment Friendly</h5>
                            <p className='box1-text'>We drive transformative results for our clients without
                            of the box marketing magic we're really good at what we do.</p>
                        </div>
                        </Col>
                        </Row>

                    {/* </Row> */}
                </Container>
            </div>
        </>
    )
}