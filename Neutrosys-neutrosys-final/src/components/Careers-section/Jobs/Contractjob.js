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
  const heights = ["0%", "20%", "40%", "60%", "80%", "100%"];
  const titles = [
    {
      id: "1",
      name: "Know your need",
      desc: "Our team will assess your experience and education to suggest the right path for your career growth. With proper training from our experts, we are confident that we will steer you to right direction to succeed in your desired profession field.",
    },
    {
      id: 2,
      name: "Match skill with opportunities",
      desc: "Our team will assess your experience and education to suggest the right path for your career growth. With proper training from our experts, we are confident that we will steer you to right direction to succeed in your desired profession field.",
    },
    {
      id: 3,
      name: "Prepare for interview",
      desc: "Our team will assess your experience and education to suggest the right path for your career growth. With proper training from our experts, we are confident that we will steer you to right direction to succeed in your desired profession field.",
    },
    {
      id: 4,
      name: "Smooth Onboarding",
      desc: "Our team will assess your experience and education to suggest the right path for your career growth. With proper training from our experts, we are confident that we will steer you to right direction to succeed in your desired profession field.",
    },
    {
      id: 5,
      name: "Continuous Follow Up",
      desc: "Our team will assess your experience and education to suggest the right path for your career growth. With proper training from our experts, we are confident that we will steer you to right direction to succeed in your desired profession field.",
    },
    {
      id: 6,
      name: "New Opportunities",
      desc: "Our team will assess your experience and education to suggest the right path for your career growth. With proper training from our experts, we are confident that we will steer you to right direction to succeed in your desired profession field.",
    },
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
                  onMouseOver={(e) => {
                    setNumber(i);
                    setCurrentTab(e.target.getAttribute("id"));
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
      <div style={{ textAlign: "center" }} className="work-for-us-content">
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
      {/* responsiveness */}

        {/* <ul> */}
        
      <div className="work-for-us-progress-bar-responsive-container
      
      "  >
          <div className="work-for-us-line-responsive-container">
            <div className="work-for-us-line">
              <div
                className="work-for-us-line-process"
                style={{ height: heights[number] }}
              ></div>
            </div>
          </div>
          {titles.map((title, i) => {
            return (
              <div
                name={title.name}
                key={i}
                id={title.id}
                className={`work-for-us-step ${i <= number && "active"}`}
                onClick={(e) => {
                  setNumber(i);
                  setCurrentTab(e.target.getAttribute("id"));
                }}
              >
                {/* <div className="step-box" name={title.name} id={title.id}></div>{" "} */}
                {/* <div className="step-inner" id={title.id}> */}
                  <h2>{title.name}</h2>
                  <p> {title.desc}</p>
                {/* </div> */}
              </div>
            );
          })}
        {/* </ul> */}
        <br />
        {/* 
          <div className="work-for-us-line-responsive-container">
            <div className="work-for-us-line">
          
              <div
                className="work-for-us-line-process"
                style={{ width: widths[number] }}
              >
            

              </div>
            </div>
          </div> */}
      </div>

      {/* open position */}
      <OpenJobs />
    </>
  );
};
export default Contractjob;
