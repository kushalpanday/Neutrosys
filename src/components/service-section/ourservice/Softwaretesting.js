import React from 'react'
import './softwaretesting.css'
import softwaredata from './softwaredata'
const Softwaretesting = () => {
  return (
    <div className="softwaretesting">
    <h4>Software Development</h4>
    
 
   <div className="softwaredatabox">
    {softwaredata.map((curElem)=>{
       return (
        <div className="dataitems" key={curElem.id}>
        <div className="images">
           <img src={curElem.image} alt=""  class="center"/>
        </div>
        
         <h5>{curElem.headings}</h5>
         <p>{curElem.discrip}</p>
        </div>
       )
    })}
   </div>
    </div>
  )
}

export default Softwaretesting