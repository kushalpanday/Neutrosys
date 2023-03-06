import React from "react";
import "./difference.css";
import imagediff from "../Aboutimage/what.jpeg"


function Difference() {
  return (
    <div>
      <h2  className="text1">Who We Are</h2>
      <div className="second">
       
        <div className="image">
          <img src={imagediff} alt="" />
         
        </div>
        <div className="textBox">
          <h5>About Neutrosys Inc.</h5>
          <p>
          Neutrosys was founded in 2015 out of a desire to solve the problem of experienced professionals
          struggling to find jobs. Despite having years of experience, many individuals face difficulty in
          securing employment. In response to this challenge, we created a solution, Neutrosys, to help
          bridge the gap between skilled professionals and companies in need of their expertise.<br></br>
          &ensp;&ensp;At Neutrosys, we have started offering more than just staffing services. Our team is also
          equipped to provide expert Software Development, Outsourcing, and Software Testing solutions
          to help your business succeed. Whether you're looking for top talent to join your team, or need
          custom software solutions to streamline your operations, we have the expertise to deliver.
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Difference;
