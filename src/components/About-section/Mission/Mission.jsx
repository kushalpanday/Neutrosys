import React from "react";
import "./mission.css";
import { GiMissileLauncher } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";
import { MdCenterFocusStrong } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

function Mission() {
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
            <div className="mission-icon">
              <GiMissileLauncher className="i1" size={40} color="green"/>
            </div>
            <h4 className="box-heading mission">Mission</h4>
          </div>

          <div className="box">
            <div className="focus-icon">
              <MdCenterFocusStrong className="i2" size={40} color="green" />
            </div>
            <h4 className="box-heading mission-focus">Focus</h4>
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
            <div className="expertise-icon">
              <BiUserCircle className="i3" size={40} color="green"/>
            </div>
            <h4 className="box-heading mission-expertise">Expertise</h4>
          </div>
          <div className="box">
            <div className="focus-icon">
              <AiOutlineEye className="i4" size={40} color="green" />
            </div>
            <h4 className="box-heading mission-vision">Vision</h4>
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

export default Mission;
