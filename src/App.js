import React from 'react'
import Header from './components/Aboutus/header/header'
import Diffrent from './components/Aboutus/difference/difference'
import CoreValues from './components/Aboutus/corevalues/Corevalues'
import Mission from './components/Aboutus/mission/mission'
import Howwork from './components/Aboutus/how_work/Work'
import Map from './components/Aboutus/map/map'

const App = () => {
  return (
    <div className='aboutus_page'>  
           <Header /> 
           <Diffrent />
           <CoreValues />
            <Mission />
            <Howwork />
            <Map />
           
           
               
           


    </div>
  )
}

export default App