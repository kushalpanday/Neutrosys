import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "./openJobs.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const employees = [
  {
    id: 1,
    title: "Software Engineer",
    location: "New York",
    type: "Full Time",
  },
  {
    id: 2,
    title: "Product Manager",
    location: "San Francisco",
    type: "Full Time",
  },
  { id: 3, title: "Designer", location: "Los Angeles", type: "Part Time" },
  {
    id: 4,
    title: "Marketing Intern",
    location: "New York",
    type: "Internship",
  },
  {
    id: 5,
    title: "Data Scientist",
    location: "San Francisco",
    type: "Full Time",
  },
];

function OpenJobs() {
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const filteredJobs = employees.filter((job) => {
    if (location && job.location.toLowerCase() !== location.toLowerCase()) {
      return false;
    }
    if (jobType && job.type.toLowerCase() !== jobType.toLowerCase()) {
      return false;
    }
    return true;
  });
  return (
    <div>
      <Container className="openjob-container">
        {" "}
        <h2>Our open Positions</h2>
        <div className="select-opt">
          <label htmlFor="num">No. of jobs per page:&nbsp;&nbsp;</label>
          <select name="jobs" id="num">
            <option value="number">12</option>
            {/* <option value="saab">13</option>
                                <option value="opel">14</option>
                                <option value="audi">15</option> */}
          </select>
        </div>
        <Row className="outer-row">
          <Col sm={10} className="outer-col">
            <Navbar collapseOnSelect expand="md">
              <Container className="bgjob">
                <Navbar.Brand href="#home">All jobs</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <div className="div-right">
                      <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                          id="dropdown-custom-1"
                          className="openpos-btn"
                        >
                          Location
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors locationeg">
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="horns">Afghanistan</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="human"
                            ></input>
                            <label htmlFor="human">Albania</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="sales"
                            ></input>
                            <label htmlFor="sales">Brazil</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="technology"
                            ></input>
                            <label htmlFor="technology">Canada</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="technology"
                            ></input>
                            <label htmlFor="technology">Finland</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="technology"
                            ></input>
                            <label htmlFor="technology">India</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="technology"
                            ></input>
                            <label htmlFor="technology">Singapore</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="technology"
                            ></input>
                            <label htmlFor="technology">Texas</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="technology"
                            ></input>
                            <label htmlFor="technology">United Kingdom</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="technology"
                            ></input>
                            <label htmlFor="technology">Vietnam</label>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                          id="dropdown-custom-1"
                          className="openpos-btn"
                        >
                          Categories
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors2">
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="office"
                            ></input>
                            <label htmlFor="office">Office Administrator</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="human"
                            ></input>
                            <label htmlFor="human">Human Resource</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="sales"
                            ></input>
                            <label htmlFor="sales">Sales/Marketing</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="technology"
                            ></input>
                            <label htmlFor="technology">Technology</label>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                          id="dropdown-custom-1"
                          className="openpos-btn"
                          onChange={handleJobTypeChange}
                        >
                          Job Types
                        </Dropdown.Toggle>
                        {/* <Dropdown.Menu className="super-colors3">
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="full"
                              value="full"
                            ></input>
                            <label htmlFor="full">Full Time</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="part"
                              value="part"
                            ></input>
                            <label htmlFor="part">Part Time</label>
                          </div>
                          <div className="jobitems">
                            <input
                              type="checkbox"
                              id="tech"
                              name="contract"
                              value="contract"
                            ></input>
                            <label htmlFor="contract">Contract</label>
                          </div>
                        </Dropdown.Menu> */}

                        <label htmlFor="type-select">Select a Job Type:</label>
                        <select
                          id="type-select"
                          value={jobType}
                          onChange={handleJobTypeChange}
                        >
                          <option value="">All</option>
                          <option value="Full Time">Full Time</option>
                          <option value="Part Time">Part Time</option>
                          <option value="Internship">Internship</option>
                        </select>
                      </Dropdown>
                      <Button variant="primary" className="filter-btn my-2">
                        Filter
                      </Button>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            {/* </div> */}

            {/* <ul> */}
            {filteredJobs.map((job) => (
              //  <li key={job.id}>
              <div key={job.id} className="div-bggrey">
                <Row className="inner-row">
                  <Col sm={9} className="inner-col">
                    <h5>
                      <Link to="jobSection">{job.title}</Link>
                      <Outlet />

                      {/* <a href="/careers/jobSection">Sales Intern -On-site</a> */}
                    </h5>
                    <h6>
                      Irving, Texas, United States | Technology | {job.type}
                    </h6>
                    <p>
                      Neutrosys Inc is looking for a few recent graduate
                      individuals to join a growing office in the staffing
                      business. This is a great opportunity to ...
                    </p>
                    <p className="num-p">
                      2021-11-09 16:30:20 -{" "}
                      <span style={{ color: "green" }}>
                        Accepting Applications
                      </span>
                    </p>
                  </Col>
                  <Col sm={2} className="inner-col2">
                    <h5>
                      <a href="/#">Apply</a>
                    </h5>
                  </Col>
                </Row>
              </div>
              // </li>
            ))}
            {/* </ul> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OpenJobs;
