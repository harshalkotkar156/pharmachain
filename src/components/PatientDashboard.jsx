import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import React, { useState } from "react";
import Profile from '../assets/img/Profile.png';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PatientDashboard = () => {

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Immunization Progress',
        data: [30, 50, 70, 85, 95, 100],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />

      <div className={`flex-grow ${sidebarExpanded ? "ml-2" : "ml-0"} bg-white`}>
        
        <div className="bg-[#576C8B] rounded-xl text-left p-4">
          <h1 className="text-5xl text-white font-semibold">Dashboard</h1>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          <div className="bg-white shadow-lg hover:shadow-2xl hover:shadow-[#BED0EF] transition-all rounded-lg p-6 w-full">
            <div className="flex flex-col items-center">
              <img
                src={Profile}
                alt="Profile"
                className="w-[50%] h-[50%] rounded-full mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
              <p className="text-gray-600">Patient ID: 123456</p>
            </div>
          </div>

          <div className="bg-white shadow-lg hover:shadow-2xl hover:shadow-[#BED0EF] transition-all rounded-lg p-6 w-full col-span-1 md:col-span-1 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="font-bold text-lg mb-2">General Info</h3>
                <ul className="list-none pl-0 space-y-2 text-gray-600">
                  <li><strong>Gender:</strong> Male</li>
                  <li><strong>DOB:</strong> January 1, 1990</li>
                  <li><strong>Preferred Language:</strong> English</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg mb-2">Contact Info</h3>
                <ul className="list-none pl-0 space-y-2 text-gray-600">
                  <li><strong>Phone:</strong> (555) 123-4567</li>
                  <li><strong>Emergency Contact:</strong> (555) 987-6543</li>
                  <li><strong>Email:</strong> johndoe@example.com</li>
                  <li><strong>Permanent Address:</strong> 123 Main St, Cityville</li>
                  <li><strong>Mailing Address:</strong> 123 Main St, Cityville</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className="text-left grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          <div className="bg-white shadow-lg hover:shadow-2xl hover:shadow-[#BED0EF] transition-all rounded-lg p-6 w-full">
            <h2 className="text-xl font-bold mb-4">Health Updates</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <strong>Last Check-Up:</strong> January 15, 2025
                <br />
                <strong>Doctor:</strong> Dr. Sarah Miller
              </div>
              <div>
                <strong>Last Test Done:</strong> December 5, 2024
                <br />
                <strong>Test:</strong> Blood Test
              </div>
              <div>
                <strong>Next Check-Up:</strong> April 10, 2025
                <br />
                <strong>Doctor:</strong> Dr. Sarah Miller
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md hover:shadow-2xl hover:shadow-[#BED0EF] transition-all rounded-lg p-6 col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold text-left mb-4">Primary Diagnosis</h2>
            <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
          </div>

          <div className="bg-white shadow-md hover:shadow-2xl hover:shadow-[#BED0EF] transition-all rounded-lg p-6 col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold text-left mb-4">Current Medication</h2>
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-gray-600">Medication</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-600">Dosage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">Metformin</td>
                  <td className="px-6 py-4">500mg</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Lisinopril</td>
                  <td className="px-6 py-4">10mg</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Aspirin</td>
                  <td className="px-6 py-4">81mg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        
          <div className="bg-white shadow-md hover:shadow-2xl hover:shadow-[#BED0EF] transition-all rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-2">
            <h2 className=" text-xl font-bold text-left mb-4">Immunizations</h2>
            <div className="w-full h-64">
              <Line data={chartData} />
            </div>
          </div>

          <div className="bg-white shadow-md hover:shadow-2xl hover:shadow-[#BED0EF] transition-all rounded-lg p-6 col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold text-left mb-4">Allergies</h2>
            <ul className="list-disc text-left pl-5 space-y-2">
              <li>Peanuts</li>
              <li>Penicillin</li>
              <li>Latex</li>
              <li>Shellfish</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
