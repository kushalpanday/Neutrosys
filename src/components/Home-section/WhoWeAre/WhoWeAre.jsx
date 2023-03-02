import React from "react";
import "./whoWeAre.css";
function WhoWeAre() {
  return (
    <section className="whoweare_container">
      <div className="whoweare_image"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="people sitting in office" /></div>
      <div className="whoweare_desc">
      <h2>Who We Are</h2>
      <p>
       We are a leading IT staffing and software development company that was established in 2015. Our company is committed
       to providing exceptional services and solutions that help businesses achieve their goals and succed in a fast-paced
       and rapidlychanging market.<br></br>
      &emsp;At neutrosys, we take pride in our team of experienced professionals who have extensive expertise in IT staffing, software development, outsourching,
      and software testing. We believe that our success is based on our people, and we work hard to ensure that our team is always
      up to date with the latest technologies and best practices.<br></br>
       &emsp;Our mission is to help businesses of all sizes achieve their goals by providing high-quality services and solutions that
        are customized to meet their specific needs. We believe in building strong and lasting relationships with our clients, and
        we are committed to delivering exceptional service and support.
      </p>
      <div className="know-more-btn-div">
      <a href="./aboutus" target="_blank" rel="noopener noreferrer"><button className="know-btn">Know more</button></a>
      </div>
      </div>
      
    </section>
  );
}

export default WhoWeAre;
