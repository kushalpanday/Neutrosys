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

            <Col sm={2} className="field-col1">
            <FormGroup className="formgroup-check" row={true} >
            <FormControlLabel control={<Button name="interest" value="Talent Solution" 
            {...register("interest")}/>}  label="Talent Solution" />
            <FormControlLabel  control={<Checkbox />} name="interest" value="Software Development" 
            {...register("interest")} label="Software Development" />
            <FormControlLabel control={<Checkbox />} name="interest" value="outSourcing" 
            {...register("interest")} label="outSourcing" />
            <FormControlLabel  control={<Checkbox />} name="interest" value="Software Testing" 
            {...register("interest")} label="Software Testing" />
            <FormControlLabel control={<Checkbox />} name="interest" value="Looking for a job" 
            {...register("interest")} label="Looking for a job" />
            <FormControlLabel  control={<Checkbox />} name="interest" value="Other" 
            {...register("interest")} label="other" />
          </FormGroup>
            </Col>





          </Row>
          <FormWithMui />
        </Col>
      </Row>
    </>
  );
}

export default Form;
