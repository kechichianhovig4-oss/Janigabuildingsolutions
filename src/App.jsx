import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Services from './Components/Services';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Plumbing from './Components/Services/Plumbing';
import AirConditioning from './Components/Services/Air Conditioning';
import Heating from './Components/Services/Heating';
import Remodeling from './Components/Services/Remodelling';




function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/Services" element={<Services/>} />
         <Route path="/" element={<HomePage/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Projects" element={<Projects/>} />
           <Route path="/Services/Plumbing" element={<Plumbing/>} />
            <Route path="/Services/air-conditioning" element={<AirConditioning/>} />
             <Route path="/Services/Heating" element={<Heating/>} />
             <Route path="/Services/Remodeling" element={<Remodeling/>} />


          
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;