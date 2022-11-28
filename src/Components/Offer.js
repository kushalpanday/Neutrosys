import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Offer.css";

const Offer = () => {
  // const [status1, setStatus1] = useState(false);
  // const [status2, setStatus2] = useState(false);
  // const [status3, setStatus3] = useState(false);

  // const handleBox1 = () => {
  //   setStatus1((status1) => !status1);
  // };

  // const handleBox2 = () => {
  //   setStatus2((status2) => !status2);
  // };

  // const handleBox3 = () => {
  //   setStatus3((status3) => !status3);
  // };
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
        {/* <div className="boxes"> */}
          {/* <div className="parent">
            <div className="box" id="box1" onClick={handleBox1}>
              Contract <i class="fa-solid fa-angle-down"></i>
            </div>
            <div
              className="details detail1"
              style={{ display: status1 ? "" : "none" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis obcaecati facere labore iste qui amet culpa libero esse
              autem odit placeat, totam tenetur repellat ut! Fuga libero
              distinctio iusto dignissimos.
            </div>
          </div>

          <div className="parent">
            <div className="box" id="box2" onClick={handleBox2}>
              Direct Hire <i class="fa-solid fa-angle-down"></i>
            </div>
            <div
              className="details detail2"
              style={{ display: status2 ? "" : "none" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis obcaecati facere labore iste qui amet culpa libero esse
              autem odit placeat, totam tenetur repellat ut! Fuga libero
              distinctio iusto dignissimos.
            </div>
          </div>

          <div className="parent">
            <div className="box" id="box3" onClick={handleBox3}>
              Contract to Hire <i class="fa-solid fa-angle-down"></i>
            </div>
            <div
              className="details detail3"
              style={{ display: status3 ? "" : "none" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis obcaecati facere labore iste qui amet culpa libero esse
              autem odit placeat, totam tenetur repellat ut! Fuga libero
              distinctio iusto dignissimos.
            </div>
          </div> */}
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
