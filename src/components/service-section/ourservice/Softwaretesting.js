import React from 'react'
import './softwaretesting.css'
import softwaredata from './softwaredata'
const Softwaretesting = () => {
  return (
    <div className="softwaretesting">
    <h2>Software Development</h2>
    
 
   <div className="softwaredatabox">
    {softwaredata.map((curElem)=>{
       return (
        <div className="dataitems" key={curElem.id}>
        <div className="images">
           <img src={curElem.image} alt=""  class="center"/>
        </div>
        
         <h4>{curElem.headings}</h4>
         <p>{curElem.discrip}</p>
        </div>
       )
    })}
   </div>
    </div>
  )
}

export default Softwaretesting