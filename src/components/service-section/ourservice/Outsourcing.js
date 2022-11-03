import React from "react";
import "./outsourcing.css";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
const Outsourcing = () => {
  return (
    <div className="outsourcingmain">
      <h3>OutSourcing</h3>
      <div className="hrcontent">
        <hr />
      </div>
      <div className="outsourcingbox">
        <div className="outbox1">
          <div className="box11">
            <div className="iconbox">
              <RadioButtonCheckedIcon
                fontSize="small"
                className="staffBoxHeadicon"
              />
            </div>
            <h3>Professional</h3>
            <p>
              Involves being reliable, setting your own high standards, and
              showing that you care about every aspect of your job.
            </p>
          </div>
          <div className="box11 ">
            <RadioButtonCheckedIcon
              fontSize="small"
              className="staffBoxHeadicon"
            />
            <h3>Call Center</h3>
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
            <RadioButtonCheckedIcon
              fontSize="small"
              className="staffBoxHeadicon"
            />
            <h3>Project</h3>
            <p>
              Involves being reliable, setting your own high standards, and
              showing that you care about every aspect of your job.
            </p>
          </div>
          <div className="box11">
            <RadioButtonCheckedIcon
              fontSize="small"
              className="staffBoxHeadicon"
            />
            <h3>Software Testing</h3>
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
