import React from "react";
import "./resume.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import ReactToPrint from 'react-to-print';

export default function Resume() {

  return (
    <>
      <div className="resume-maindiv">
        <Row className="resume-row">
          <Col className="resume-col1">
            <img src="./images/career/resume.jpg" alt="hello"></img>
          </Col>
          <Col className="resume-col2">
            <h2>Looking for new Opportunities?</h2>
            <p>
              Submit your resume and we may get back to you when we have an
              opportunity that matches your experience.
            </p>

            <div className="btn-3div">
              <Button size="lg" className="rbtn">
                Consulting
              </Button>
              <Button size="lg" className="rbtn">
                Internal job
              </Button>
              <Button size="lg" className="rbtn">
                Internship
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
