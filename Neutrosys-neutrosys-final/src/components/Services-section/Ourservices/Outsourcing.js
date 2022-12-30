import React from "react";
import "./Outsourcing.css";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
const Outsourcing = () => {
  return (
    <div className="outsourcingmain">
      <h4>OutSourcing</h4>
      
      <div className="outsourcingbox">
        <div className="outbox1">
          <div className="box11">
          <div className="box111">
          <RadioButtonCheckedIcon
           fontSize="small"
          className="staffBoxHeadicon"
          />
            <h5>Professional</h5></div>
          
            <p>
              Involves being reliable, setting your own high standards, and
              showing that you care about every aspect of your job.
            </p>
          </div>
          <div className="box11">
           
          <div className="box111">
          <RadioButtonCheckedIcon
           fontSize="small"
          className="staffBoxHeadicon"
          />
            <h5>Call Center</h5></div>
            <p>
              Involves being reliable, setting your own high standards, and
              showing that you care about every aspect of your job.
            </p>
          </div>
        </div>
        <div className="outbox2">
          <img src="../Servicesimages/outsourcing.png" alt="" />
        </div>
        <div className="outbox3">
          <div className="box11">
            
          <div className="box111">
          <RadioButtonCheckedIcon
           fontSize="small"
          className="staffBoxHeadicon"
          />
            <h5>SoftwareTesting</h5></div>
            <p>
              Involves being reliable, setting your own high standards, and
              showing that you care about every aspect of your job.
            </p>
          </div>
          <div className="box11">
            
          <div className="box111">
          <RadioButtonCheckedIcon
           fontSize="small"
          className="staffBoxHeadicon"
          />
            <h5>Project</h5></div>
            <p>
              Involves being reliable, setting your own high standards, and
              showing that you care about every aspect of your job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outsourcing;