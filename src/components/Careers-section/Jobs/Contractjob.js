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
      name: "Know your Need",
      desc: "Our team will assess your experience and education to suggest the right path for your career growth. With proper training from our experts, we are confident that we will steer you in the right direction to succeed in your desired profession field.",
    },
    {
      id: 2,
      name: "Match skill with Opportunities",
      desc: "Whether you have years of experience under your belt, or you are recently starting out, our excellent matching program which we have developed through years of expertise in the field will match you to the right job ensuring your career growth and stability.",
    },
    {
      id: 3,
      name: "Prepare for Interview",
      desc: "We provide training and guidance through resume and cover letter screenings along with multiple stages of mock interviews. We have an excellent team of technical recruiting experts who will help you prepare and crack interviews using their proven expertise.",
    },
    {
      id: 4,
      name: "Smooth Onboarding",
      desc: "We will make your transition to and from client projects a smooth, fun, and hassle-free experience. Our onboarding process is seamless and easy to navigate.",
    },
    {
      id: 5,
      name: "Continuous Follow Up",
      desc: "You will always be a part of the Neutrosys’ family and we will be in constant communication with you even after you get hired to your dream job. Our commitment towards our consultants has helped us retain them for multiple projects.",
    },
    {
      id: 6,
      name: "New Opportunities",
      desc: "Our association with industry leading clients and fortune 500 companies in different areas such as Healthcare, Banking, Finance, and many more all over the country gives you ample opportunities to land your dream job.",
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
    <div className="contract-job-responsive-bg">
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
    </div>
      {/* open position */}
      <OpenJobs />
    </>
  );
};
export default Contractjob;
