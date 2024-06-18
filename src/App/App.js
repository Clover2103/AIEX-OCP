import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Preview } from '../pages/Preview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export { App };
