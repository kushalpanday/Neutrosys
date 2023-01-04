import React, { useRef, useState } from "react";
import "./Detail.css";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdEmail } from "react-icons/md";
import { HiPrinter } from "react-icons/hi";
import { MdFileCopy } from "react-icons/md";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Country, State, City } from "country-state-city";
import { FileUploader } from "react-drag-drop-files";
// import { ICountry } from "country-state-city";
import Button from "react-bootstrap/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Modal } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { FaSuitcase } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { CopyToClipboard } from "react-copy-to-clipboard";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

const Detail = () => {
  const [mobile, setMobile] = useState("+977");
  const [state, setState] = useState(false);
  const countries = Country.getAllCountries();
  const [show, setShow] = useState(false);
  console.log(countries);
  const data = {
  countries: [
    
    { name: "USA"},
    {
      name: "Nepal",
      states: [
        { name: "Province1" },
        { name: "Lumbini Province" },
         { name: "Bagmati Province" },
         { name: "Gandaki Province" },
         { name: "Karnali Province" },
         { name: "sudurpashchim Province" }
      ]
    },
    
  ]
};

  const [selectedCountry, setSelectedCountry] = React.useState();
  const [selectedState, setSelectedState] = React.useState();
  const [selectedCity, setSelectedCity] = React.useState();

  const availableState = data.countries.find((c) => c.name === selectedCountry);
  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );

  const Componentref = useRef();
  // const setCou=countries.map(item=>item.isoCode)

  const states = State.getAllStates().filter(
    (item) => item.countryCode === "IN"
  );

  const navigate = useNavigate();

  console.log(states);
  // console.log()

  // const applyHandler = () => {
  //   setState(true);
  // };
  // const crossHandler = () => {
  //   setState(false);
  // };

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
  };
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };


  return (
    <div className="main-divbg">
      <Container className="details-container">
        <Row className="back-row">
          <Col className="back-col">
            <button className="back-btn" onClick={() => navigate(-1)}>
              Back
            </button>
            {/* <button className='iconborder-btn'><BsFillArrowLeftCircleFill/>&nbsp;&nbsp;Back</button> */}
          </Col>
        </Row>

        <Row className="top-row">
          <Col sm={9} className="jobs-top-col">
            <h2>Sales Intern - On-site</h2>
          </Col>

          <Col sm={3} className="jobs-top-col2">
            {/* <button className="jobs-top-btn" onClick={applyHandler}>
              <a href="/#">Apply Now</a>
            </button> */}
            <Button
              variant="primary"
              onClick={handleShow}
              className="jobs-top-btn"
            >
              Apply Now
            </Button>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton className="jobs-modal-header">
            <Modal.Title className="top-form">
              ENTER YOUR INFORMATION
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Form> */}
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}

            <form className="form"  onSubmit={handleSubmit(onSubmit)}>
              <Container>
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
                        {...register("name", { required: "Required", minLength: 3 })}
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
                        {...register("middlename")}
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
                        {...register("lastname", { required: "Required" })}
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
                      <option> Gender</option>
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
                      onChange={(phone) => setMobile(phone)}
                      className="input-field"
                    />
                  </Col>

                  <Col lg={6} md={12} sm={12} className="p-1 mt-0">
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Phone"
                      className="input-field"
                    >
                      <Form.Control type="number" placeholder="phone" />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} md={12} sm={12} className="p-1 mb-2">
                    <Form.Select
                      aria-label="Default select example"
                      className="input-field select"
                      placeholder="Country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                      <option>Country</option>
          {data.countries.map((value, key) => {
            return (
              <option value={value.name} key={key}>
                {value.name}
              </option>
            );
          })}
                    </Form.Select>
                  </Col>

                  <Col lg={6} md={12} sm={12} className="p-1 mb-2">
                    <Form.Select
                      aria-label="Default select example"
                      className="input-field select"
                      placeholder="State"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
                    >
                     <option> State</option>
          {availableState?.states.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e.name}
              </option>
            );
          })}
                    </Form.Select>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} md={12} sm={12} className="p-1">
                      <FloatingLabel
                      controlId="floatingPassword"
                      label="Cities"
                      className="input-field"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Middle Name (If applicable)"
                      />
                    </FloatingLabel>
                  </Col>

                  <Col lg={6} md={12} sm={12} className="p-1">
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Current Address"
                      className="input-field"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Middle Name (If applicable)"
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
                        placeholder="Middle Name (If applicable)"
                       
                      />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} md={12} sm={12} className="p-1">
                    <Form.Select
                      aria-label="Default select example"
                      className="mb-3 input-field"
                      
                    >
                      <option>Applying for Seniority Level of</option>
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
                    <div className="dashed-border input-field mb-3 ">
                   
                    <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    
                    label="Upload file"
                     
                    dropMessageStyle={{backgroundColor: 'red'}}
                  />
                  <p>
                      {file
                        ? `File name: ${file[0].name}`
                        : ""}
                    </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} md={12} sm={12} className="p-1">
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Message(Optional)"
                      className="input-field"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col lg={6} md={12} sm={12} className="p-1">
                    <div className="dashed-border input-field mb-3 neutroDetail ">
                      <div className="uploadpart  ">
                      <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    
                    label="Upload File"
                     
                   
                  />
                      </div>
                      <div className="contentpart"> or Dropthem</div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={8} md={8} sm={12}>
                    <div className="check-container">
                      {" "}
                      <input type="checkbox" name="check" id="" />
                      <p className="check">
                        By checking this box, I certify that the information
                        submitted in this application is true and correct to the
                        best of my knowledge.
                      </p>
                    </div>
                  </Col>

                  <Col lg={4} md={4} sm={12}>
                    <Button variant="success" id="submit-btn" type="submit">
                      Submit
                    </Button>{" "}
                  </Col>
                </Row>
              </Container>
            </form>
            {/* </Form> */}
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>

        <Row className="jobs-outer-row">
          <Col sm={4} className="outer-col">
            <Row className="second-row">
              <Col sm={12} className="left-col">
                <h3>Job Overview</h3>
                <p>
                  Req #:<span> 1017</span>
                </p>

                <div className="section section-first">
                  <i className="fa-solid">
                    <ImLocation />
                  </i>
                  <div className="inner-section inner-loc">
                    <h1>Location:</h1>
                    <span>Irving, Texas, United States</span>
                  </div>
                </div>

                <div className="section">
                  <i className="fa-solid">
                    <FaSuitcase />
                  </i>
                  <div className="inner-section">
                    <h1>Job Category:</h1>
                    <span>Technology</span>
                  </div>
                </div>

                <div className="section">
                  <i className="fa-solid">
                    <FaRegClock />
                  </i>
                  <div className="inner-section">
                    <h1>Date Posted:</h1>
                    <span>2021-11-09 16:30:20</span>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="leftbottom-row">
              <Col sm={12} className="leftbottom-col">
                <h4>Share this job</h4>
                <Row className="share-row">
                  <Col sm={6} className="share-col ">
                    <div className="socials">
                      <a href="/#">
                        <i class="fa-brands">
                          <ImFacebook2 />
                        </i>
                      </a>

                      <a href="/#">
                        <i class="fa-brands">
                          <ImLinkedin />
                        </i>
                      </a>

                      <a href="/#">
                        <i class="fa-brands twitticon">
                          <FaTwitterSquare />
                        </i>
                      </a>
                    </div>
                  </Col>
                  <Col sm={6} className="share-col2">
                    <div className="vertical-div">
                      <p>
                        <MdEmail />
                        &nbsp;&nbsp;
                        <span
                          onClick={(e) => {
                            window.location.href =
                              "mailto:neutroline@gmail.com";
                          }}
                        >
                          Email this job
                        </span>
                      </p>
                      <p>
                        <HiPrinter />

                        <ReactToPrint
                          trigger={() => (
                            <span style={{ marginLeft: ".7rem" }}>
                              Print me
                            </span>
                          )}
                          content={() => Componentref.current}
                        />
                      </p>
                      <p>
                        <MdFileCopy />
                        &nbsp;&nbsp;
                        <span>
                          <CopyToClipboard
                            text="http://localhost:3000/Details/sales#"
                            onCopy={() =>
                              swal({
                                title: "Good job!",
                                text: "Job link has been copied!",
                                icon: "success",
                                button: "ok",
                              })
                            }
                          >
                            <span>Copy</span>
                          </CopyToClipboard>
                        </span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col sm={8} className="right-col" ref={Componentref}>
            <h3>Job Description</h3>
            <p>
              Neutrosys Inc is looking for a few recent graduate individuals to
              join a growing office in the staffing business. This is a great
              opportunity to get your foot into the door with a staffing firm to
              start a career in either recruitment or sales. The ideal candidate
              would be a self-starter, self-motivated, persuasive, and
              enthusiastic, and enjoy working in a group or individual.
            </p>

            <h6>Responsibilities</h6>
            <ul>
              <li>Involve in new business development</li>
              <li>
                Update and manage all sales activities, opportunities, and
                account information
              </li>
              <li>Emailing/cold calling new accounts</li>
              <li>Information gathering and sorting</li>
              <li>Work closely with Recruitment and Operations teams</li>
            </ul>

            <h6> Qualifications:</h6>
            <ul>
              <li>1 year of relevant work experience is preferred</li>
              <li>Excellent communication skills (Written & Verbal)</li>
              <li>Ability to multitask, organize, and prioritize work</li>
              <li>
                Self-directed, can-do attitude and sense of humor appreciated
              </li>
              <li>Authorized to work in the United States</li>
            </ul>

            <h6>Why join us?</h6>
            <p>
              We are committed to a diversified and happy employee working
              culture with the opportunity to grow. We are a company that
              rewards employees for their performance and dedication. We believe
              that employees’ happiness is the key to level-up the company. We
              are committed to the enjoyable and flexible working environment.
            </p>

            <p className="benefits">Some of our benefits include:</p>
            <ul>
              <li>Competitive Base Salary</li>
              <li>Competitive Commission Structure</li>
              <li>Bonus</li>
              <li>PTO</li>
              <li>Flexible Working Hours</li>
            </ul>

            <p className="italic">
              Neutrosys Inc is an EEO Employer providing IT solutions in United
              States, Asia, and Europe.
            </p>
            <button
              className="apply-btn"
              variant="primary"
              onClick={handleShow}
            >
              <a href="/#">Apply Now</a>
            </button>
            {/* <Button
              variant="primary"
              onClick={handleShow}
              className="jobs-top-btn"
            >
              Apply Now
            </Button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
