import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { usePDF } from 'react-to-pdf';
import { Download, ArrowLeft } from 'lucide-react';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MedicalHistory = () => {

  
  const { toPDF, targetRef } = usePDF({ filename: 'medicalhistroy.pdf' });

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

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

  const medicalHistoryData = [
    { diagnosis: "Diabetes", doctor: "Dr. Smith", medication: "Metformin", date: "2023-12-12", surgery: "None" },
    { diagnosis: "Hypertension", doctor: "Dr. Johnson", medication: "Amlodipine", date: "2023-11-10", surgery: "Heart Bypass" },
    { diagnosis: "Asthma", doctor: "Dr. Lee", medication: "Salbutamol", date: "2023-10-05", surgery: "None" },
    { diagnosis: "Arthritis", doctor: "Dr. Brown", medication: "Ibuprofen", date: "2023-09-20", surgery: "Knee Replacement" },
    { diagnosis: "Chronic Migraine", doctor: "Dr. White", medication: "Topiramate", date: "2023-08-15", surgery: "None" },
    { diagnosis: "COPD", doctor: "Dr. Green", medication: "Tiotropium", date: "2023-07-30", surgery: "Lung Transplant" },
    { diagnosis: "Anxiety Disorder", doctor: "Dr. Black", medication: "Sertraline", date: "2023-06-25", surgery: "None" },
    { diagnosis: "Epilepsy", doctor: "Dr. Grey", medication: "Levetiracetam", date: "2023-05-10", surgery: "None" },
    { diagnosis: "Pneumonia", doctor: "Dr. Davis", medication: "Amoxicillin", date: "2023-04-05", surgery: "None" },
    { diagnosis: "Gastroenteritis", doctor: "Dr. White", medication: "Ondansetron", date: "2023-03-20", surgery: "Appendectomy" },
    { diagnosis: "Back Pain", doctor: "Dr. Miller", medication: "Paracetamol", date: "2023-02-15", surgery: "None" },
    { diagnosis: "Cancer", doctor: "Dr. Wilson", medication: "Chemotherapy", date: "2023-01-10", surgery: "Tumor Removal" }
  ];

  return (
    <div className="flex min-h-screen">
      
      <Sidebar sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />

     
      <div
        className={`flex-grow ${
          sidebarExpanded ? "ml-2" : "ml-0"
        }  bg-white `}
      >
        
        <div className="bg-[#D2D9E1] rounded-xl text-left p-4">
          <h1 className="text-4xl font-semibold">Medical History</h1>
        </div>
        
        <div className="p-8 space-y-8">
         
          <div className="grid grid-cols-1 rounded-xl  md:grid-cols-2 gap-6 shadow-lg">
            
            <div className="bg-white shadow-md rounded-lg p-6 ">
              <h2 className="text-xl font-bold text-left  mb-4">Primary Diagnosis</h2>
              <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
            </div>

            
            <div className="bg-white shadow-md rounded-lg p-6 border-[#576C8B]">
            <h2 className="text-xl font-bold text-left  mb-4">Current Medication</h2>
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

            <div className="bg-white shadow-md rounded-lg p-6 border-[#576C8B]">
            <h2 className="text-xl font-bold text-left  mb-4">Allergies</h2>
              <ul className="list-disc text-left pl-5 space-y-2">
                <li>Peanuts</li>
                <li>Penicillin</li>
                <li>Latex</li>
                <li>Shellfish</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 ">
            <h2 className="text-xl font-bold text-left  mb-4">Immunizations</h2>
              <div className="w-full h-64">
                <Line data={chartData} />
              </div>
            </div>
          </div>

          <div className="flex">

          <h2 className="text-2xl font-bold text-left  mb-4">Medical History</h2>

          <button
          onClick={() => toPDF()}
          className="flex ml-auto items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out text-sm">
          <Download className="w-5 h-5" />
          <span>Download PDF</span>
        </button>
        </div>

          <div className="overflow-auto shadow-2xl max-h-96">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Diagnosis</th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Doctor</th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Medication</th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Date</th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Surgeries/Procedures</th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
        
              <tr className="border-b">
                <td className="px-6 py-4">Lorem ipsum dolor sit amet</td>
                <td className="px-6 py-4">Dr. John Doe</td>
                <td className="px-6 py-4">Metformin</td>
                <td className="px-6 py-4">2023-12-12</td>
                <td className="px-6 py-4">Appendectomy</td>
                <td className="px-6 py-4 flex gap-4">
                  <button className="text-yellow-500 hover:underline">View</button>
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              
              <tr className="border-b">
                <td className="px-6 py-4">Lorem ipsum dolor sit amet</td>
                <td className="px-6 py-4">Dr. Jane Smith</td>
                <td className="px-6 py-4">Aspirin</td>
                <td className="px-6 py-4">2022-09-05</td>
                <td className="px-6 py-4">Knee Replacement</td>
                <td className="px-6 py-4 flex gap-4">
                  <button className="text-yellow-500 hover:underline">View</button>
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              <tr className="border-b">
                  <td className="px-6 py-4">Lorem ipsum dolor sit amet</td>
                  <td className="px-6 py-4">Dr. Jane Smith</td>
                  <td className="px-6 py-4">Aspirin</td>
                  <td className="px-6 py-4">2022-09-05</td>
                  <td className="px-6 py-4">Knee Replacement</td>
                  <td className="px-6 py-4 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4">Chronic Migraine</td>
                  <td className="px-6 py-4">Dr. John Doe</td>
                  <td className="px-6 py-4">Sumatriptan</td>
                  <td className="px-6 py-4">2022-10-01</td>
                  <td className="px-6 py-4">None</td>
                  <td className="px-6 py-4 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4">Hypertension</td>
                  <td className="px-6 py-4">Dr. Mary Johnson</td>
                  <td className="px-6 py-4">Lisinopril</td>
                  <td className="px-6 py-4">2021-12-15</td>
                  <td className="px-6 py-4">Angioplasty</td>
                  <td className="px-6 py-4 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4">Type 2 Diabetes</td>
                  <td className="px-6 py-4">Dr. Alice White</td>
                  <td className="px-6 py-4">Metformin</td>
                  <td className="px-6 py-4">2021-08-10</td>
                  <td className="px-6 py-4">None</td>
                  <td className="px-6 py-4 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4">Asthma</td>
                  <td className="px-6 py-4">Dr. Emily Davis</td>
                  <td className="px-6 py-4">Albuterol</td>
                  <td className="px-6 py-4">2020-05-18</td>
                  <td className="px-6 py-4">Bronchial Dilation</td>
                  <td className="px-6 py-4 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4">Osteoarthritis</td>
                  <td className="px-6 py-4">Dr. Peter Brown</td>
                  <td className="px-6 py-4">Ibuprofen</td>
                  <td className="px-6 py-4">2022-07-23</td>
                  <td className="px-6 py-4">Joint Replacement</td>
                  <td className="px-6 py-4 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4">COPD</td>
                  <td className="px-6 py-4">Dr. Olivia Green</td>
                  <td className="px-6 py-4">Salbutamol</td>
                  <td className="px-6 py-4">2020-12-02</td>
                  <td className="px-6 py-4">Lung Transplant</td>
                  <td className="px-6 py-4 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4">Hyperthyroidism</td>
                  <td className="px-6 py-4">Dr. Laura Black</td>
                  <td className="px-6 py-4">Levothyroxine</td>
                  <td className="px-6 py-4">2019-06-14</td>
                  <td className="px-6 py-4">Thyroidectomy</td>
                  <td className="px-6 py-4 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4">Chronic Kidney Disease</td>
                  <td className="px-6 py-4">Dr. Matthew Grey</td>
                  <td className="px-6 py-4">Losartan</td>
                  <td className="px-6 py-4">2021-09-13</td>
                  <td className="px-6 py-4">Kidney Transplant</td>
                  <td className="px-6 py-4 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4">Heart Attack</td>
                  <td className="px-6 py-4">Dr. Henry Ford</td>
                  <td className="px-6 py-4">Atenolol</td>
                  <td className="px-6 py-4">2020-02-25</td>
                  <td className="px-6 py-4">Bypass Surgery</td>
                  <td className="px-6 py-4 flex gap-4">
                    <button className="text-yellow-500 hover:underline">View</button>
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4">Depression</td>
                  <td className="px-6 py-4">Dr. Julia Bell</td>
                  <td className="px-6 py-4">Fluoxetine</td>
                  <td className="px-6 py-4">2022-03-18</td>
                  <td className="px-6 py-4">Cognitive Behavioral Therapy</td>
                  <td className="px-6 py-4 flex gap-4">
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
