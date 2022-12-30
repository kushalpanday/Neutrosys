import React, { useState } from "react";
import "./Letschat.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Formservice from "../Formservice/Formservice";

const Letschat = () => {
  return (
    <div className="letschatmain">
      <div className="letschatcontent">
        <h2>We would love to hear about your business and technology goals</h2>
        <p>
          It's time to make your business more successful with our professional
          IT solutions. Let’s connect to find out how our company can
          benefit you from our services.
        </p>
       
      </div>
    </div>
  );
};

export default Letschat;
