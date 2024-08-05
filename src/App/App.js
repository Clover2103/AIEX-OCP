import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from '../pages/home';
import { Policies } from '../pages/policies';
import { Preview } from '../pages/Preview';
import { Scopes } from '../pages/scopes';
import { ApproachVigilancia } from '../pages/approach-vigilancia';
import { ApproachSupervisor } from '../pages/approach-supervisor';
import { ApproachEscolta } from '../pages/approach-escolta';
import { ApproachOMT } from '../pages/approach-OMT';
import { ApproachAOEA } from '../pages/approach-AOEA';
import { ApproachGISC } from '../pages/approach-GISC';
import { ApproachRiesgos } from '../pages/approach-riesgos';
import { ScopesRules } from '../pages/scopes-rules';
import { ScopesRAndD } from '../pages/scopes-r-and-d';
import { ScopesFA } from '../pages/scopes-f-a';
import { Consultation } from '../pages/consultation';
import { Contact } from '../pages/contact';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const location = useLocation();

  const showModal = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  return (
    <div>
      {location.pathname !== "/" && <NavBar showModal={showModal} />}
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home" element={<Home showModal={showModal}/>} />
        <Route path="/policies" element={<Policies />} />
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
        <Route path="/scopes-rules" element={<ScopesRules />} />
        <Route path="/scopes-r-and-d" element={<ScopesRAndD />} />
        <Route path="/scopes-f-a" element={<ScopesFA showModal={showModal}/>} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
      <Modal isVisible={isModalVisible} hideModal={hideModal} content={modalContent} />
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export { AppWithRouter as App };
