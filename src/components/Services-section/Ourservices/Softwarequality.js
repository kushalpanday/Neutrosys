import React from "react";
import "./softwarequality.css";
import qualitydata from "./qualitydata";
const Softwarequality = () => {
  return (
    <div className="softwarequality">
      <h4>SoftwareQuality Assurance</h4>
      <div className="qualityitem">
        {qualitydata.map((qitem) => {
          return (
            <div className="mainitem" key={qitem.id}>
              <div className="softwarequalityimage">
                <img src={qitem.images} alt="" />
              </div>

              <h5>{qitem.heading}</h5>
              <p>{qitem.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Softwarequality;