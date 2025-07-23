
import './App.css';
import './App2.css'
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Heromain from './components/heromain/heromain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './App2';

function App() {
  return (
    <BrowserRouter>
      <div className='Hero-container flex justify-between'>
        <Navbar />
        <div className='Subhero-container w-5/6'>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Heromain />
              </>
            } />
            <Route path="/project" element={<Project/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
