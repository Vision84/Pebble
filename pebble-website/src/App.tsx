import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, AboutUs, Team, Download } from './pages';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
