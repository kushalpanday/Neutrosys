import React from "react";
import "./footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="footer_logo">
        <img src="/images/neutrosys.png" alt="" />
      </div>
      <div className="footer_getintouch">
        <h6>Get in touch</h6>
        <p>info@neutrosys.com</p>
        <p>+1 (214) 321-543</p>
        <p>1431 Greenway Dr 8th floor, Irving,</p>
        <p>TX 75038, United States</p>
      </div>
      <div className="footer_links">
        <h6>Some Links</h6>
        <p>
          {" "}
          <a href="/">About Us</a>
        </p>
        <p>
          <a href="/">Services</a>
        </p>
        <p>
          <a href="/">Careers</a>
        </p>
        <p>
          <a href="/">Contact Us</a>
        </p>
      </div>
      <div className="footer_socials">
        <h6>Social Media</h6>
        <div className="social">
          <div style={{width:"30px", height:"30px", margin:"0 .2rem"}} >
          <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" alt="" />
          </div>
          <div style={{width:"30px", height:"30px",  margin:"0 .2rem"}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" />
          </div>
          <div style={{width:"30px", height:"30px",  margin:"0 .2rem"}}>
          <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
