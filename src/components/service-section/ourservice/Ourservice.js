import React, { useState } from "react";
import "./ourservice.css";
import data from "./data";
import { servicedata } from "./ServiceData";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Staffing from "./Staffing";
import Softwaretesting from "./Softwaretesting";
import Outsourcing from "./Outsourcing";
import ServiceData from "./ServiceData";
import Softwarequality from "./Softwarequality";

const Ourservice = () => {
  const [state, setstate] = useState(false);
  const [nextstate, setNextstate] = useState();
  const callMe = (item) => {
    if (item.id == 1) {
      setstate(!state);
      setNextstate(<Staffing />);
    } else if (item.id == 2) {
      setstate(!state);
      setNextstate(<Softwaretesting />);
    } else if (item.id == 3) {
      setstate(!state);
      setNextstate(<Outsourcing />);
    } else {
      setstate(!state);
      setNextstate(<Softwarequality />);
    }
  };
  const closeButton = () => {
    setstate(false);
  };

  return (
    <div className="Servicemainbody">
      <h2>We are currently providing IT services</h2>
      <p style={{ color: "blue" }}>
        We provide services from USA, Nepal, India, and Finland.
      </p>
      <div className="mainbox">
        {data.map((item) => {
          return (
            <div
              className="mainData"
              key={item.id}
              onClick={() => callMe(item)}
            >
              <div className="service-image">
                <img src={item.image} alt="" />
              </div>
              <h4>{item.heading}</h4>
              <p>{item.disc}</p>
            </div>
          );
        })}
      </div>
      <Modal
        dialogClassName="modalmain"
        style={{ paddingLeft: "0px" }}
        show={state}
        className="dbyaModal"
      >
        <Modal.Header closeButton onClick={closeButton}></Modal.Header>
        <Modal.Body>{nextstate}</Modal.Body>
      </Modal>
    </div>
  );
};

export default Ourservice;
