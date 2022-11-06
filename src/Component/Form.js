import React from "react";
import { Col, Row } from "react-bootstrap";
import FormWithMui from "./FormWithMui";

function Form() {
  return (
    <>
      <Row className="form-row mb-4">
        <Col sm={9} className="form-col">
          <h4 className="heading-form">Contact Us</h4>
          <p className="heading-para">I'm interested in..</p>
          <Row className="field-row1">
            <Col sm={2} className="field-col1">
              <p>Talent Solutions</p>
            </Col>

            <Col sm={2} className="field-col1">
              <p>Software Development</p>
            </Col>

            <Col sm={2} className="field-col1">
              <p>Outsourcing</p>
            </Col>

            <Col sm={2} className="field-col1">
              <p>Software Testing</p>
            </Col>

            <Col sm={2} className="field-col1">
              <p>Looking for a job</p>
            </Col>

            <Col sm={2} className="field-col1">
              <p>Other</p>
            </Col>
          </Row>
          <FormWithMui />
        </Col>
      </Row>
    </>
  );
}

export default Form;
