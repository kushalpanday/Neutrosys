import React, { useState } from "react";
import "./letschat.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Letschat = () => {
  return (
    <div className="letschatmain">
      <div className="letschatcontent">
        <h3>We would love to hear about your business and technology goals</h3>
        <p>
          It's time to make your business more successful with our professional
          IT solutions.Let’s connect to find out how our company can
          benefit you from our services.
        </p>
        {/* <button>let's Chat</button> */}
      </div>
    </div>
  );
};

export default Letschat;
