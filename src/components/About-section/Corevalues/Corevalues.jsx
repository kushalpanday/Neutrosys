import React from "react";
import "./corevalues.css";
import imageabout1 from "../Aboutimage/cs.jpg"
import imageabout2 from "../Aboutimage/cs3.jpg"
import imageabout3 from "../Aboutimage/cv.png"


const Corevalues = () => {
  return (
    <div>
      <h2 className="ctext"> Our Core Values</h2>

      <div className="coregrid">
        <div className="valuetext1">
          <img className="core-icon1" src={imageabout1} alt="" />
          <p className="cvp">Customer Satisfaction</p>
          <p className="corep">
          Text is text 1 this is text 2Lorem ipsum dolor sit amet consectetur
            a Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            eius rerum repellendus, expedita numquam tenetur minus aliquid! Qui
            obcaecati officia maiores placeadipisicing elit
          </p>
        </div>
<div className="line">
  <hr />
</div>

        <div className="valuetext2">
          <img className="core-icon2" src={imageabout2} alt="" />
          {/* <hr
        className="line"
        style={{
           color: "blue",
           transform: "rotate(90deg)",
        }}
      /> */}
          <p className="cvp">Long Sightedness</p>

          <p className="corep">
          Text is text 2 this is text 2Lorem ipsum dolor sit amet consectetur
            a Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            eius rerum repellendus, expedita numquam tenetur minus aliquid! Qui
            obcaecati officia maiores placeadipisicing elit
          </p>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="valuetext3">
          <img className="core-icon3" src={imageabout3} alt="" />
          <p className="cvp">Strong bond</p>
          <p className="corep"> 
            Text is text 3 this is text 2Lorem ipsum dolor sit amet consectetur
            a Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            eius rerum repellendus, expedita numquam tenetur minus aliquid! Qui
            obcaecati officia maiores placeadipisicing elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Corevalues;
