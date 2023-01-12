import React, { useRef, useState } from "react";
import "./resume.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Container, FloatingLabel, Form, Modal } from "react-bootstrap";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import UploadFiles from "../jobSection/UploadFiles";
// import ReactToPrint from 'react-to-print';
import Select from "react-select";


export default function Resume(props) {
  const ref=useRef();
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [mobile, setMobile] = useState("+977");
  const [state, setState] = useState(false);
  const countries = Country.getAllCountries();
  const [show, setShow] = useState(false);

  const Componentref = useRef();
  // const setCou=countries.map(item=>item.isoCode)

  const states = State.getAllStates().filter(
    (item) => item.countryCode === "IN"
  );

  // const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    resetField();
    swal("Form has been Submitted");
  };

  
  

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const selectCountry = (val) => 
  {
    setCountry(val);
    
  }
  const selectRegion = (val) => {
    setRegion(val);

  };

  const selectOption = [
    { value: "Consulting", label: "Consulting" },
    { value: "Internal job", label: "Internal job" },
    { value: "Internship", label: "Internship" },
    
  ];

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

            <div className="btn-submitdiv">
              <Button
                size="lg"
                className="rbtn"
                onClick={handleShow}
              >
                Submit Resume
              </Button>

              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton className="jobs-modal-header">
                  <Modal.Title className="top-form">
                    ENTER YOUR INFORMATION
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <Container>
                    <Row className="mt-2">
                      <Col sm={12} className="p-1">
                      <Select
                        isMulti
                        name="colors"
                        options={selectOption}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        menuPortalTarget={document.body} 
                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                      />
                      </Col>
                    </Row>
                      <Row className="mt-2">
                        <Col lg={6} md={12} sm={12} className="p-1">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="First Name"
                            className="input-field"
                          >
                            <Form.Control
                              type="text"
                              placeholder="name@example.com"
                              name="name"
                              {...register("name", {
                                required: "Required",
                                minLength: 3,
                              })}
                              error={!!errors?.name}
                            />
                          </FloatingLabel>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-1">
                          <FloatingLabel
                            // lg={3}
                            controlId="floatingPassword"
                            label="Middle Name (If applicable)"
                            className="input-field"
                            name="middlename"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Middle Name (If applicable)"
                            
                              name="Mname"
                              {...register("Mname")}
                              error={!!errors?.Mname}
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} md={12} sm={12} className="p-1">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Last Name"
                            className="input-field p-0"
                            name="lastname"
                          >
                            <Form.Control
                              type="text"
                              placeholder="name@example.com"
                              {...register("lastname", {
                                required: "Required",
                              })}
                              error={!!errors?.lastname}
                            />
                          </FloatingLabel>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-1">
                          <Form.Select
                            aria-label="Default select example"
                            className="p-3 input-field"
                            name="gender"
                            {...register("gender", { required: "Required" })}
                            error={!!errors?.gender}
                           
                          >
                           <option value="" disabled selected hidden > Gender</option> 
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="unspecified">Unspecified</option>
                            <option value="undisclosed">Undisclosed</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={6} md={12} sm={12} className="p-1">
                          <PhoneInput  
                            country={"nep"}
                            value={mobile}
                            inputProps={{}}
                            type="number"
                            onChange={(phone) => setMobile(phone)}
                            className="input-field"
                            name="status"
                           {...register("status")}
                           
                          />
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-1 mt-0">
                          <FloatingLabel
                            controlId="floatingPassword"
                            label="Phone"
                            className="input-field"
                          >
                            <Form.Control
                              type="number"
                              name="phone"
                              placeholder="phone"
                             
                              {...register("phone", {
                                required: "Required",
                                
                              })}
                              error={!!errors?.phone}
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                  <Col lg={6} md={12} sm={12} className="p-1 mb-2">
                    <CountryDropdown
                      className="input-field select"
                      value={country}
                      onChange={(val) => selectCountry(val)}
                      

                      priorityOptions={["CA", "US", "GB","NP","IN","MX","FI"]}
                     
                    
                            
                    />
                  </Col>

                  <Col lg={6} md={12} sm={12} className="p-1 mb-2">
                    <RegionDropdown
                      className="input-field select"
                      label="region"
                      // showDefaultOption={false}
                      country={country}
                      // showDefaultOption="true"
                      blankOptionLabel="Choose State/province"
                      value={region}
                      onChange={(val) => selectRegion(val)}
                    />
                  </Col>
                </Row>

                      <Row>
                        <Col lg={6} md={12} sm={12} className="p-1">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="City"
                            className="input-field"
                          >
                            <Form.Control
                              type="text"
                              placeholder="name@example.com"
                              name="cityname"
                              {...register("cityname", {
                                required: "Required",
                                
                              })}
                              error={!!errors?.cityname}
                            />
                          </FloatingLabel>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-1">
                          <FloatingLabel
                            controlId="floatingPassword"
                            label="Current Address"
                            className="input-field"
                            name="address"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Middle Name (If applicable)"
                              {...register("address", {
                                required: "Required",
                                
                              })}
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={6} md={12} sm={12} className="p-1">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className="input-field"
                          >
                            <Form.Control
                              type="email"
                              placeholder="name@example.com"
                              {...register("email", {
                                required: "Required field",
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                                  message: "Invalid email address",
                                },
                              })}
                              error={!!errors?.email}
                            />
                          </FloatingLabel>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-1">
                          <FloatingLabel
                            controlId="floatingPassword"
                            label="Expected Salary/Salary Range(Optional)"
                            className="input-field"
                          >
                            <Form.Control
                              type="number"
                              placeholder="Expected Salary/Salary Range(Optional)"
                              name="salary"
                              {...register("salary")}
                              error={!!errors?.salary}
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={6} md={12} sm={12} className="p-1">
                          <Form.Select
                            aria-label="Default select example"
                            className="mb-3 input-field"
                            name="joblevel"
                            {...register("joblevel", { required: "Required" })}
                            error={!!errors?.joblevel}
                            label="gender"
                           
                          >
                          <option value="" disabled selected hidden > Job Level </option>
                            <option  value="0" >Applying for Seniority Level of</option>
                            <option value="1">Not Applicable</option>
                            <option value="2">Internship</option>
                            <option value="3">Entry Level</option>
                            <option value="4">Associate(Junior)</option>
                            <option value="5">Mid Level</option>
                            <option value="6">Senior</option>
                            <option value="7">Director</option>
                            <option value="5">Executive</option>
                          </Form.Select>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-1">
                          {/* <div className="dashed-border input-field mb-3 "> */}
                          <UploadFiles accept={["application/pdf"]}/>
                          {/* </div> */}
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={6} md={12} sm={12} className="p-1">
                          <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Message(Optional)"
                            className="input-field"
                            name="message"
                          >
                            <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: "100px" }}
                              {...register("message", {
                                required: "Required",
                                
                              })}

                            />
                          </FloatingLabel>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-1">
                        <UploadFiles accept={["application/pdf"]}/>

                        </Col>
                      </Row>

                      <Row>
                        <Col lg={8} md={8} sm={12}>
                          <div className="check-container">
                            {" "}
                            <input type="checkbox" name="check" id="" />
                            <p className="check">
                              By checking this box, I certify that the
                              information submitted in this application is true
                              and correct to the best of my knowledge.
                            </p>
                          </div>
                        </Col>

                        <Col lg={4} md={4} sm={12}>
                          <Button
                            variant="success"
                            id="submit-btn"
                            type="submit"
                          >
                            Submit
                          </Button>{" "}
                        </Col>
                      </Row>
                    </Container>
                  </form>
                  {/* </Form> */}
                </Modal.Body>
              </Modal>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
