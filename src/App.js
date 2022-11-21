import Header from './Component/Header/Header';
import WorkWithUs from './Component/WorkWithUs/Workwithus';
import Jobs from './Component/Jobs/JobsBtn';
import Resume from './Component/Resume/Resume'

// import WorkWithUs from './Component/WorkWithUs/Workwithus';

function App() {
  return (
    <div className="App">
      <Header/>
      <WorkWithUs/>
      <Jobs/>
      <Resume/>
      {/* <WorkWithUs/> */}
    </div>
  );
}

export default App;
