import React,{useState} from 'react'
import './ourservice.css'
import data from './data'
import { servicedata } from './ServiceData';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import Staffing from './Staffing';
import Softwaretesting from './Softwaretesting';
import Outsourcing from './Outsourcing';
import ServiceData from './ServiceData';
const Ourservice = () => {
  const [state, setstate] = useState(false)
 
  const callMe=(item)=>{
      setstate(!state);
      console.log(item.id)
      console.log(servicedata.id)
      

    
  }
  const closeButton=()=>{
    setstate(false)
  }
 
 
  return (
    
   <div className="Servicemainbody">
   <div className="mainbox">
   {data.map((item)=>{return(
   <div className="mainData" key={item.id} onClick={()=>callMe(item)}>
   <img src={item.image} alt="" />
   <h4>{item.heading}</h4>
   <p>{item.disc}</p>
   </div>)
   })}
   </div>
   <Modal  dialogClassName="modalmain" show={state} className='dbyaModal'>
   <Modal.Header closeButton onClick={closeButton}>
  </Modal.Header>
   <Modal.Body>
   {servicedata.map((curElem)=>{
    return(
      <div className="serviceDataMain" key={curElem.id}>

      {curElem.mydata}
      </div>
    )
    
   })}
    
   </Modal.Body>
   
   </Modal>
   </div>
   
  )
}

export default Ourservice