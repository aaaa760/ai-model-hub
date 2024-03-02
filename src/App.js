import React from 'react';
import './App.css';
import HomePage from './Pages/Home.js';
import Navbar from './Components/NavBar.jsx'; 
import Model from './Pages/Model.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/models" element={<Model />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
