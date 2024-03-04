import React from 'react';
import './App.css';
import HomePage from './Pages/Home.js';
import Navbar from './Components/NavBar.jsx';
import Model from './Pages/Model.js';
import CuratedModels from './Pages/CuratedPicks.js';
import ModelForm from './Pages/ModelForm.js';
import ModelDetail from './Pages/ModelDetail.js';
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
            <Route path="/models/:category" element={<Model />} />
            <Route path="/models/:category/:subcategory" element={<Model />} />
            <Route path="/models/detail/:id" element={<ModelDetail />} />
            <Route path="/curated" element={<CuratedModels />} />
            <Route path="/add-model" element={<ModelForm />} /> 
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
