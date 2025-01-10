import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import PatientDashboard from './components/PatientDashboard';
import MedicalHistory from './components/MedicalHistory';
import Prescription from './components/Prescription';
import LabReports from './components/LabReports';
import HealthCareDashboard from './components/HealthCareDashboard';
import InStock from './components/InStock';
import OutOfStock from './components/OutOfStock';
import Expiry from './components/Expiry';

const RouterSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/medical-history" element={<MedicalHistory />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/lab-reports" element={<LabReports />} />
        <Route path="/healthcare-dashboard" element={<HealthCareDashboard />} />
        <Route path="/in-stock" element={<InStock />} />
        <Route path="/out-of-stock" element={<OutOfStock />} />
        <Route path="/expiry" element={<Expiry />} />
      </Routes>
    </Router>
  );
};

export default RouterSetup;
