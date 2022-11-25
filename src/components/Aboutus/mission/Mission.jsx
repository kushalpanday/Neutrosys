import React from "react";
import "./mission.css";
import {GiMissileLauncher} from "react-icons/gi"
import{AiOutlineEye} from "react-icons/ai"
import{MdCenterFocusStrong} from "react-icons/md"
import{BiUserCircle} from "react-icons/bi"

function mission() {
  return (
    <div className="mainmission">
      <h2 className="titleM">Our Mission</h2>
      <div>
        <div className="Mgrid">
          <div>
            <p className="missleft">
              This is text 2Lorem ipsum dolor sit amet consectetur a Lorem ipsum
              dolor sit amet adipisicing elit. Omnis eius rerum
            </p>
            <hr className="Linem"></hr>
          </div>
          <div className="box">
            <p className="Micon">
              < GiMissileLauncher/>

            </p>
            {/* <img className="mission-image i1" src="../Aboutimage/focus1.jpeg" alt="" /> */}
            <h4 className="box-heading mission">Mission</h4>
            {/* <img className='m1'
      src="../Aboutimage/vector.png"  alt="" /> */}
          </div>

          <div className="box">
          <p className="Ficon">
              < MdCenterFocusStrong/>

            </p>
          {/* <img className="mission-image i2" src="../Aboutimage/focus.jpeg" alt="" /> */}
            <h4 className="fhead">Focus</h4>
            {/* <img className='m2'
      src="../Aboutimage/vector1.png"  alt="" /> */}
          </div>

          <div>
            <p className="missright">
              This is text 2Lorem ipsum dolor sit amet consectetur a Lorem ipsum
              dolor sit amet adipisicing elit. Omnis eius rerum
            </p>
            <hr className="Linem2"></hr>
          </div>

          <div>
            <p className="missleft">
              This is text 2Lorem ipsum dolor sit amet consectetur a Lorem ipsum
              dolor sit amet adipisicing elit. Omnis eius rerum
            </p>
            <hr className="linem3" ></hr>
          </div>
          <div className="box">
          <p className="Eicon">
              < BiUserCircle/>

            </p>
          {/* <img className="mission-image i3" src="../Aboutimage/focuse.jpg" alt="" /> */}
            <h4 className="ehead">Expertise</h4>
            {/* <img className='m3'
      src="../Aboutimage/vector 2.png"  alt="" /> */}
          </div>
          <div className="box">
          <p className="vicon">
              < AiOutlineEye/>

            </p>
          {/* <img className="mission-image i4" src="../Aboutimage/icon.jpg" alt="" /> */}
            <h4 className="vhead">Vision</h4>
            {/* <img className='m4'
      src="../Aboutimage/vector 3.png"  alt="" /> */}
          </div>
          <div>
            <p className="missright">
              This is text 2Lorem ipsum dolor sit amet consectetur a Lorem ipsum
              dolor sit amet adipisicing elit. Omnis eius rerum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mission;

