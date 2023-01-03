import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Offer.css";

const Offer = () => {
 
  return (
    <div className="offer">
      <div className="left">
        <div className="title">What we offer?</div>
        <div className="title-info">
          Select the procedure you want to work with us?
        </div>
        <p className="offer-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet
          consectetur labore iure voluptate repellat? Cupiditate laborum
          corporis blanditiis delectus, quibusdam porro ut enim quas dolores
          amet inventore aut accusantium quis earum perferendis ducimus quia,
          quam consequatur ad rerum laudantium sunt? Excepturi quod eos
          necessitatibus accusantium hic, pariatur exercitationem ullam!
        </p>
        
<Accordion  style={{width:"100%"}} flush={true}>
{/* defaultActiveKey="0" */}
<Accordion.Item eventKey="0" className="parent bg-color-contract">
        <Accordion.Header className="offer-btn">Contract</Accordion.Header>
        <Accordion.Body className="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="parent bg-color-hire">
        <Accordion.Header className="offer-btn" >Direct Hire</Accordion.Header>
        <Accordion.Body className="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="parent bg-color-cont2hire">
        <Accordion.Header className="offer-btn">Contract to Hire </Accordion.Header>
        <Accordion.Body className="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        {/* </div> */}
      </div>
      <div className="right">
        <div className="right-title">How It Works</div>
        <div className="subtitle">Our Process</div>
        <div className="processes">
          <div className="process">
            <div className="process-title">
              <div className="circle">01</div>
              <div className="process-text">Fill up form </div>
            </div>
            <div className="process-content">
              lipsum as it is sometimes known, is dummy text used in laying out
              print that are fit for you.
            </div>
          </div>

          <div className="process">
            <div className="process-title">
              <div className="circle">02</div>
              <div className="process-text">Online Examination</div>
            </div>
            <div className="process-content">
              lipsum as it is sometimes known, is dummy text used in laying out
              print that are fit for you.
            </div>
          </div>

          <div className="process">
            <div className="process-title">
              <div className="circle">03</div>
              <div className="process-text">Interview</div>
            </div>
            <div className="process-content">
              lipsum as it is sometimes known, is dummy text used in laying out
              print that are fit for you.
            </div>
          </div>

          <div className="process">
            <div className="process-title">
              <div className="circle">04</div>
              <div className="process-text">Selection</div>
            </div>
            <div className="process-content">
              lipsum as it is sometimes known, is dummy text used in laying out
              print that are fit for you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
