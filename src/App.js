import logo from './logo.svg';
import './App.css';

import Header from './components/service-section/header/Header';
import Ourservice from './components/service-section/ourservice/Ourservice';
import Letschat from './components/service-section/letschat/Letschat';
import Map from './components/service-section/Map/Map';

function App() {
  return (
    <div>
    <Header />
    <Ourservice />
    <Letschat />
    
    </div>
  );
}

export default App;
