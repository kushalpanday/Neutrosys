import React from "react";
import "./corevalues.css";
const Corevalues = () => {
  return (
    <div>
      <h2 className="ctext"> Our Core Values</h2>

      <div className="coregrid">
        <div className="valuetext1">
          <img className="icon1" src="../Aboutimage/cs.jpg" alt="" />
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
          <img className="icon2" src="../Aboutimage/cs3.jpg" alt="" />
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
          <img className="icon3" src="../Aboutimage/cv.png" alt="" />
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
