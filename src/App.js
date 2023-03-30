
import './App.css';
import Navbar from './Components/Navbar';
import JobsContainer from './Components/JobsContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from './Components/Description';
import DataState from './context/DataState';

function App() {
  let pageSize = 20;
  return (
   <>
   <DataState>
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path="/" element={<JobsContainer pageSize = {pageSize}/>}/>
          <Route path="/job/:id" element={<Description/>} />
        
      </Routes>
    </BrowserRouter>
   
    </DataState>
   </>
  );
}

export default App;
