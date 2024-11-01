// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PositionalBuy from './pages/PositionalBuy.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/positional_buy" element={<PositionalBuy />} />
      </Routes>
      </Router>
  );

}

export default App;
