import React from 'react';
import group from "../Components/group.jpg";
import "./Different.css";

const Features = () => {
  return (
      <div className="features">
          <div className="section-title">What Makes Us Different?</div>
          <div className="content">
          <div className="part1">
              <div className="part-content">
                  <div className="different-title">No Hiring Woes</div>
                  <div className="content">We will manage hiring and resource retention, so you can focus on growing your business while we take care of the rest.</div>
              </div>
                  <div className="part-content">
                    <div className="different-title">Scalable Teams</div>
                  <div className="content">We will manage hiring and resource retention, so you can focus on growing your business while we take care of the rest.</div>   
              </div>
          </div>
        <div className="part2">
          <img src={group} alt="" />
          </div>
              <div className="part3">
                       <div className="part-content">
                  <div className="different-title">Painless Communication</div>
                  <div className="content">Don’t worry, our engineers use project management tools to ensure complete transparency of work no matter where they are located.</div>
              </div>
                  <div className="part-content">
                    <div className="different-title">No Hiring Woes</div>
                  <div className="content">We will manage hiring and resource retention, so you can focus on growing your business while we take care of the rest.</div>   
              </div>
        </div>
        
              </div>
    </div>
  )
}

export default Features