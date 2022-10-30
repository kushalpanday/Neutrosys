import React from 'react'
import './softwarequality.css'
import qualitydata from './qualitydata'
const Softwarequality = () => {
  return (
    <div className="softwarequality">
    <h2>SoftwareQuality Assurance</h2>
      <div className="qualityitem">
      {
        qualitydata.map((qitem)=>{
           return(
            <div className="mainitem" key={qitem.id}>
            <img src={qitem.images} alt="" />
            <h4>{qitem.heading}</h4>
            <p>{qitem.para}</p>

            </div>
           )
        })
      }
      </div>
    </div>
  )
}

export default Softwarequality