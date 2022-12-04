import Header from './Component/Header/Header';
import WorkWithUs from './Component/WorkWithUs/Workwithus';
import Jobs from './Component/Jobs/JobsBtn';
import Resume from './Component/Resume/Resume';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './Component/Jobs/Detail';
import Routing from './Routing';
// import WorkWithUs from './Component/WorkWithUs/Workwithus';

function App() {
  return (
    <div className="App">
    <Routes >
     <Route path='/' element={<Routing />} />
      <Route path="/Details/sales" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
