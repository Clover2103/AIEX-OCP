import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Preview } from '../pages/Preview';
import { Scopes } from '../pages/scopes';
import { Consultation } from '../pages/consultation';
import { Contact } from '../pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scopes" element={<Scopes />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export { App };

