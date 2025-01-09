import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MedicalHistory = () => {
  
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="flex min-h-screen">
  <Sidebar sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />

  <div className={`flex-grow ${sidebarExpanded ? "ml-2" : "ml-0"} bg-white`}>
    
  <div className="bg-[#576C8B] rounded-xl text-left p-6 shadow-lg mb-8">
  <h1 className="text-5xl font-semibold text-white">Medical History</h1>
    </div>

    <div className="p-8 space-y-8">
      
     
      <div className="flex">
        <h2 className="text-2xl font-bold text-left mb-4">Medical History</h2>
        <button
          onClick={() => alert('Download initiated')}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-auto"
        >
          Download Report
        </button>
      </div>

      
      <div className="overflow-x-auto shadow-2xl max-h-[600px] p-6 rounded-xl bg-gray-50">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-2 text-left font-medium text-gray-600">Diagnosis</th>
              <th className="px-6 py-2 text-left font-medium text-gray-600">Doctor</th>
              <th className="px-6 py-2 text-left font-medium text-gray-600">Medication</th>
              <th className="px-6 py-2 text-left font-medium text-gray-600">Date</th>
              <th className="px-6 py-2 text-left font-medium text-gray-600">Surgeries/Procedures</th>
              <th className="px-6 py-2 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className="border-b">
              <td className="px-6 py-2">Lorem ipsum dolor sit amet</td>
              <td className="px-6 py-2">Dr. John Doe</td>
              <td className="px-6 py-2">Metformin</td>
              <td className="px-6 py-2">2023-12-12</td>
              <td className="px-6 py-2">Appendectomy</td>
              <td className="px-6 py-2 flex gap-4">
                <button className="text-yellow-500 hover:underline">View</button>
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          

                <tr className="border-b">
                 <td className="px-6 py-2">Lorem ipsum dolor sit amet</td>
                 <td className="px-6 py-2">Dr. Jane Smith</td>
                 <td className="px-6 py-2">Aspirin</td>
                 <td className="px-6 py-2">2022-09-05</td>
                 <td className="px-6 py-2">Knee Replacement</td>
                <td className="px-6 py-2 flex gap-4">
                  <button className="text-yellow-500 hover:underline">View</button>
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              <tr className="border-b">
                   <td className="px-6 py-2">Lorem ipsum dolor sit amet</td>
                   <td className="px-6 py-2">Dr. Jane Smith</td>
                   <td className="px-6 py-2">Aspirin</td>
                   <td className="px-6 py-2">2022-09-05</td>
                   <td className="px-6 py-2">Knee Replacement</td>
                  <td className="px-6 py-2 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                   <td className="px-6 py-2">Chronic Migraine</td>
                   <td className="px-6 py-2">Dr. John Doe</td>
                   <td className="px-6 py-2">Sumatriptan</td>
                   <td className="px-6 py-2">2022-10-01</td>
                   <td className="px-6 py-2">None</td>
                  <td className="px-6 py-2 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                   <td className="px-6 py-2">Hypertension</td>
                   <td className="px-6 py-2">Dr. Mary Johnson</td>
                   <td className="px-6 py-2">Lisinopril</td>
                   <td className="px-6 py-2">2021-12-15</td>
                   <td className="px-6 py-2">Angioplasty</td>
                  <td className="px-6 py-2 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                   <td className="px-6 py-2">Type 2 Diabetes</td>
                   <td className="px-6 py-2">Dr. Alice White</td>
                   <td className="px-6 py-2">Metformin</td>
                   <td className="px-6 py-2">2021-08-10</td>
                   <td className="px-6 py-2">None</td>
                  <td className="px-6 py-2 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                   <td className="px-6 py-2">Asthma</td>
                   <td className="px-6 py-2">Dr. Emily Davis</td>
                   <td className="px-6 py-2">Albuterol</td>
                   <td className="px-6 py-2">2020-05-18</td>
                   <td className="px-6 py-2">Bronchial Dilation</td>
                  <td className="px-6 py-2 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                   <td className="px-6 py-2">Osteoarthritis</td>
                   <td className="px-6 py-2">Dr. Peter Brown</td>
                   <td className="px-6 py-2">Ibuprofen</td>
                   <td className="px-6 py-2">2022-07-23</td>
                   <td className="px-6 py-2">Joint Replacement</td>
                  <td className="px-6 py-2 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                   <td className="px-6 py-2">COPD</td>
                   <td className="px-6 py-2">Dr. Olivia Green</td>
                   <td className="px-6 py-2">Salbutamol</td>
                   <td className="px-6 py-2">2020-12-02</td>
                   <td className="px-6 py-2">Lung Transplant</td>
                  <td className="px-6 py-2 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                   <td className="px-6 py-2">Hyperthyroidism</td>
                   <td className="px-6 py-2">Dr. Laura Black</td>
                   <td className="px-6 py-2">Levothyroxine</td>
                   <td className="px-6 py-2">2019-06-14</td>
                   <td className="px-6 py-2">Thyroidectomy</td>
                  <td className="px-6 py-2 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                   <td className="px-6 py-2">Chronic Kidney Disease</td>
                   <td className="px-6 py-2">Dr. Matthew Grey</td>
                   <td className="px-6 py-2">Losartan</td>
                   <td className="px-6 py-2">2021-09-13</td>
                   <td className="px-6 py-2">Kidney Transplant</td>
                  <td className="px-6 py-2 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                   <td className="px-6 py-2">Heart Attack</td>
                   <td className="px-6 py-2">Dr. Henry Ford</td>
                   <td className="px-6 py-2">Atenolol</td>
                   <td className="px-6 py-2">2020-02-25</td>
                   <td className="px-6 py-2">Bypass Surgery</td>
                  <td className="px-6 py-2 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                   <td className="px-6 py-2">Depression</td>
                   <td className="px-6 py-2">Dr. Julia Bell</td>
                   <td className="px-6 py-2">Fluoxetine</td>
                   <td className="px-6 py-2">2022-03-18</td>
                   <td className="px-6 py-2">Cognitive Behavioral Therapy</td>
                  <td className="px-6 py-2 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
