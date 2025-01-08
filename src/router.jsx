import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import PatientDashboard from './components/PatientDashboard';
import MedicalHistory from './components/MedicalHistory';
import Prescription from './components/Prescription';
import LabReports from './components/LabReports';
import HealthCareDashboard from './components/HealthCareDashboard';

const RouterSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/medical-history" element={<MedicalHistory />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/lab-reports" element={<LabReports />} />
        <Route path="/healthcare-dashboard" element={<HealthCareDashboard />} />
      </Routes>
    </Router>
  );
};

export default RouterSetup;
