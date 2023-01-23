import React from "react";
import "./difference.css";
import imagediff from "../Aboutimage/what.jpeg"


function Difference() {
  return (
    <div>
      <h2  className="text1">What Makes Neutrosys Different?</h2>
      <div className="second">
        {/* <div className="none"></div> */}
        <div className="image">
          <img src={imagediff} alt="" />
          {/* <img className="imagediff" src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="pic" /> */}
        </div>
        <div className="textBox">
          <h3 >Neutrosys</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius
            rerum repellendus, expedita numquam tenetur minus aliquid! Qui
            obcaecati officia maiores placeat ducimus expedita numquam tenetur
            minus aliquid! Qui obcaecati officia maiores placeat ducimus
            expedita numquam tenetur minus aliquid! Qui obcaecati officia
            maiores placeat ducimus atque voluptatum voluptate tenetur numquam
            tenetur minus aliquid! Qui obcaecati officia maiores placeat.
          </p>
        </div>
        {/* <div className="nonee"></div> */}
      </div>
    </div>
  );
}

export default Difference;
