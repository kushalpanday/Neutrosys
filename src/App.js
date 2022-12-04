import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/service-section/header/Header';
import Ourservice from './components/service-section/ourservice/Ourservice';
import Letschat from './components/service-section/letschat/Letschat';
import Map from './components/service-section/Map/Map';
import Formservice from './components/service-section/formservice/Formservice';

function App() {
 const [state, setstate] = useState(true)
  const closeme=(state)=>{
    setstate(false)
  }
  return (
    <div onClick={closeme} >
    <Header />
    <Ourservice  closeme={closeme}/>
    <Letschat />
   <Formservice />
    </div>
  );
}

export default App;
