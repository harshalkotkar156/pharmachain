import React from 'react';
import { Link } from 'react-router-dom'; 

const PatientDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-3xl font-semibold mb-8">Patient Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <Link to="/medical-history" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl">
          <h2 className="text-xl font-bold mb-4">Medical History</h2>
          <p className="text-gray-600">View your detailed medical history.</p>
        </Link>

        
        <Link to="/prescription" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl">
          <h2 className="text-xl font-bold mb-4">Prescription</h2>
          <p className="text-gray-600">View your current prescriptions.</p>
        </Link>

        
        <Link to="/lab-reports" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl">
          <h2 className="text-xl font-bold mb-4">Lab Reports</h2>
          <p className="text-gray-600">View your recent lab reports.</p>
        </Link>
      </div>
    </div>
  );
};

export default PatientDashboard;
