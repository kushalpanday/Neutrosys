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
        <h2>Connect with Us!</h2>
        <p>
          If you're looking for exceptional services, we're here to help! Contact us today and let our team take your 
          business to the next level with our expert solutions and suport.
        </p>
       
      </div>
    </div>
  );
};

export default Letschat;
