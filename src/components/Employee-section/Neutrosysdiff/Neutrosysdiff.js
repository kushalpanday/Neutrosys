import React from 'react';
// import team from "../Components/team.png";
import "./Neutrosysdiff.css";
import DifferentA from "../Employeeimages/A.png"
import DifferentB from "../Employeeimages/B.png"
import DifferentC from "../Employeeimages/C.png"
import DifferentD from "../Employeeimages/D.png"


const Different = () => {
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
        <div className='difference-circle'></div>
        {/* <div className='diff-img-white'> */}
          <img src={DifferentA} alt="" className='difference-image1 diff-img'/>
          {/* </div> */}
          <img src={DifferentB} alt="" className='difference-image2 diff-img'/>
          <img src={DifferentC} alt="" className='difference-image3 diff-img'/>
          <img src={DifferentD} alt="" className='difference-image4 diff-img'/>
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

export default Different;