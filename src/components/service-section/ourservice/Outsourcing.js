import React from "react";
import "./outsourcing.css";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
const Outsourcing = () => {
  return (
    <div className="outsourcingmain">
      <h2>OutSourcing</h2>
      
      <div className="outsourcingbox">
        <div className="outbox1">
          <div className="box11">
            <h4>Professional</h4>
            <p>
              Involves being reliable, setting your own high standards, and
              showing that you care about every aspect of your job.
            </p>
          </div>
          <div className="box11">
           
            <h4>Call Center</h4>
            <p>
              Involves being reliable, setting your own high standards, and
              showing that you care about every aspect of your job.
            </p>
          </div>
        </div>
        <div className="outbox2">
          <img src="../images/outsourcing.png" alt="" />
        </div>
        <div className="outbox3">
          <div className="box11">
            
            <h4>Project</h4>
            <p>
              Involves being reliable, setting your own high standards, and
              showing that you care about every aspect of your job.
            </p>
          </div>
          <div className="box11">
            
            <h4>Software Testing</h4>
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
