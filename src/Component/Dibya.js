import React, {useState}from 'react'
import dbyadata from './dbyadata'

const Dibya = () => {
    const [state, setstate] = useState("red")
    const[bool,setBool]=useState(null)
   
  const dibbya=(curElem)=>{
    // console.log(curElem.id)
    // const di=dbyadata.filter((item)=>(item.id!==curElem.id))
    //  console.log(di)
    // setstate(di.background="grey")
  }
  return ( <div className="dbyas">
     <div className="dbya">
       {dbyadata.map((curElem)=>{
        return(
        <div className="dbyadatamain" key={curElem.id}>
          <button className='btn' value={curElem.value}  onClick={()=>dibbya(curElem)}  > {curElem.name}</button>
        </div>
  )})}
     </div>
     </div>
  )
}

export default Dibya