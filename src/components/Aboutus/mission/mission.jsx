import React from "react";
import "./mission.css";

function mission() {
  return (
    <div className="mainmission">
      <h2 className="titleM">Our mission</h2>
      <div>
        <div className="Mgrid">
          <div>
            <p className="missleft">
              this is text 2Lorem ipsum dolor sit amet consectetur a Lorem ipsum
              dolor sit amet adipisicing elit. Omnis eius rerum
            </p>
          </div>
          <div className="box">
            <img className="mission-image i1" src="focus.jpeg" alt="" />
            <h4 className="box-heading mission">Mission</h4>
            {/* <img className='m1'
      src="../Aboutimage/vector.png"  alt="" /> */}
          </div>

          <div className="box">
          <img className="mission-image i2" src="focus.jpeg" alt="" />
            <h4 className="box-heading mission-focus">Focus</h4>
            {/* <img className='m2'
      src="../Aboutimage/vector1.png"  alt="" /> */}
          </div>

          <div>
            <p className="missright">
              this is text 2Lorem ipsum dolor sit amet consectetur a Lorem ipsum
              dolor sit amet adipisicing elit. Omnis eius rerum
            </p>
          </div>

          <div>
            <p className="missleft">
              this is text 2Lorem ipsum dolor sit amet consectetur a Lorem ipsum
              dolor sit amet adipisicing elit. Omnis eius rerum
            </p>
          </div>
          <div className="box">
          <img className="mission-image i3" src="focus.jpeg" alt="" />
            <h4 className="box-heading mission-expertise">Expertise</h4>
            {/* <img className='m3'
      src="../Aboutimage/vector 2.png"  alt="" /> */}
          </div>
          <div className="box">
          <img className="mission-image i4" src="focus.jpeg" alt="" />
            <h4 className="box-heading mission-vision">Vision</h4>
            {/* <img className='m4'
      src="../Aboutimage/vector 3.png"  alt="" /> */}
          </div>
          <div>
            <p className="missright">
              this is text 2Lorem ipsum dolor sit amet consectetur a Lorem ipsum
              dolor sit amet adipisicing elit. Omnis eius rerum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mission;

