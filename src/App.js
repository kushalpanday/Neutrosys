
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Details from './Component/Jobs/Details';

import Routing from './Routing';

// import WorkWithUs from './Component/WorkWithUs/Workwithus';

function App() {
  return (
    <div className="App">
     
      <Routes>
      <Route path="/" element={<Routing/>}/>
        <Route path="/Details/sales" element={<Details/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
