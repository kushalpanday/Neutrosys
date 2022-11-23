import React, { useState } from "react";
import "./Contractjob.css";
import Textcoldescribe from "./Textcoldescribe";
import Textcoldescribe2 from "./Textcoldescribe2";
import Textcoldescribe3 from "./Textcoldescribe3";
import Textcoldescribe4 from "./Textcoldescribe4";
import Textcoldescribe5 from "./Textcoldescribe5";
import Textcoldescribe6 from "./Textcoldescribe6";
import OpenJobs from "./OpenJobs";

const Contractjob = () => {
  // const [describe, setJob] = useState(<Textcoldescribe />);
  const [number, setNumber] = useState(0);
  const widths = ["0%", "20%", "40%", "60%", "80%", "100%"];
  const titles = [
    {
      id: "1",
      name: "Know your need",
    },
    { id: 2, name: "Match skill with opportunities" },
    { id: 3, name: "Prepare for interview" },
    { id: 4, name: "Smooth Onboarding" },
    { id: 5, name: "Continuous Follow Up" },
    { id: 6, name: "New Opportunities" },
  ];
  const [currentTab, setCurrentTab] = useState("1");


  return (
    <>
      <div className="contract-div">
        <h2>Work as an Consultant</h2>
        <p>
          Opportunity to work with our top clients in different areas such as
          Healthcare, banking finance, etc, all over the country.
        </p>

        <div className="work-for-us-progress-bar-container">
          <ul>
            {titles.map((title, i) => {
              return (
                <li
                  name={title.name}
                  key={i}
                  id={title.id}
                  className={`work-for-us-step ${i <= number && "active"}`}
                  onClick={(e) => {
                    setNumber(i);
                   setCurrentTab(e.target.getAttribute("id"));
                   console.log(e.target.getAttribute("name"))
                  }}
                >
                  <div
                    className="step-box"
                    name={title.name}
                    id={title.id}
                  ></div>{" "}
                  <div className="step-inner" id={title.id}>
                    {title.name}
                  </div>
                </li>
              );
            })}
          </ul>
          <br />

          <div className="work-for-us-line-container">
            <div className="work-for-us-line">
              <div
                className="work-for-us-line-process"
                style={{ width: widths[number] }}
              ></div>
            </div>
          </div>
       
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
            {currentTab === "1" ? (
              <Textcoldescribe />
            ) : currentTab === "2" ? (
              <Textcoldescribe2 />
            ) : currentTab === "3" ? (
              <Textcoldescribe3 />
            ) : currentTab === "4" ? (
              <Textcoldescribe4 />
            ) : currentTab === "5" ? (
              <Textcoldescribe5 />
            ) : (
              <Textcoldescribe6 />
            )}
          </div>
      {/* open position */}
      <OpenJobs />
    </>
  );
};
export default Contractjob;
