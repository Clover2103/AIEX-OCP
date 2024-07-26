import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Preview } from '../pages/Preview';
import { Scopes } from '../pages/scopes';
import { ApproachVigilancia } from '../pages/approach-vigilancia';
import { ApproachSupervisor } from '../pages/approach-supervisor';
import { ApproachEscolta } from '../pages/approach-escolta';
import { ApproachOMT } from '../pages/approach-OMT';
import { ApproachAOEA } from '../pages/approach-AOEA';
import { ApproachGISC } from '../pages/approach-GISC';
import { ApproachRiesgos } from '../pages/approach-riesgos';
import { Consultation } from '../pages/consultation';
import { Contact } from '../pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scopes" element={<Scopes />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/approach-vigilancia" element={<ApproachVigilancia />} />
        <Route path="/approach-supervisor" element={<ApproachSupervisor />} />
        <Route path="/approach-escolta" element={<ApproachEscolta />} />
        <Route path="/approach-OMT" element={<ApproachOMT />} />
        <Route path="/approach-AOEA" element={<ApproachAOEA />} />
        <Route path="/approach-GISC" element={<ApproachGISC />} />
        <Route path="/approach-riesgos" element={<ApproachRiesgos />} />
      </Routes>
    </Router>
  );
}

export { App };

