import Sidebar from './Sidebar';
import React, { useState } from "react";
import { usePDF } from 'react-to-pdf';
import { Download } from 'lucide-react';

const Prescription = () => {

    const { toPDF } = usePDF({ filename: 'prescription.pdf' });
    const [sidebarExpanded, setSidebarExpanded] = useState(true);
  
    return (
      <div className="flex min-h-screen text-left">
        <Sidebar sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />

        <div className={`flex-grow ${sidebarExpanded ? "ml-2" : "ml-0"} bg-white`}>
        <div className="bg-[#576C8B] rounded-xl text-left p-6 shadow-lg mb-8">
        <h1 className="text-5xl font-semibold text-white">Prescription</h1>
          </div>

          <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="p-8 bg-white rounded-xl shadow-2xl">
              <h2 className="text-2xl text-center  font-bold mb-4">Doctor Information</h2>
              <p><strong>Physician:</strong> Dr. John Doe, MD</p>
              <p><strong>Contact:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> dr.johndoe@example.com</p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-2xl">
              <h2 className="text-2xl text-center font-bold mb-4">Pharmacy Information</h2>
              <p><strong>Pharmacy:</strong> HealthCare Pharmacy</p>
              <p><strong>Contact:</strong> +1 (555) 987-6543</p>
              <p><strong>Address:</strong> 123 Main St, City, State</p>
            </div>
          </div>
            
            <div className="overflow-auto shadow-2xl max-h-[600px] p-8 rounded-xl bg-gray-50">
              

            <div className="flex pt-2 mb-4">
              <h2 className="text-2xl font-bold text-left mb-4 pr-4">Medication List</h2>
              <button
                onClick={() => toPDF()}
                className="flex ml-auto items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out text-sm"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
            </div>

              <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-2 text-left font-medium text-gray-600">Drug Name</th>
                    <th className="px-6 py-2 text-left font-medium text-gray-600">Dosage & Form</th>
                    <th className="px-6 py-2 text-left font-medium text-gray-600">Quantity</th>
                    <th className="px-6 py-2 text-left font-medium text-gray-600">Instructions</th>
                    <th className="px-6 py-2 text-left font-medium text-gray-600">Start Date</th>
                    <th className="px-6 py-2 text-left font-medium text-gray-600">End Date</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr className="border-b">
                    <td className="px-6 py-2">Lorem ipsum dolor sit amet</td>
                    <td className="px-6 py-2">500 mg Tablet</td>
                    <td className="px-6 py-2">30</td>
                    <td className="px-6 py-2">Take 1 tablet every 8 hours</td>
                    <td className="px-6 py-2">2023-12-01</td>
                    <td className="px-6 py-2">2024-01-01</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-2">Lorem ipsum dolor sit amet</td>
                    <td className="px-6 py-2">250 mg Liquid</td>
                    <td className="px-6 py-2">15</td>
                    <td className="px-6 py-2">Take 1 teaspoon every 6 hours</td>
                    <td className="px-6 py-2">2023-12-05</td>
                    <td className="px-6 py-2">2024-01-05</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-2">Dolor sit amet consectetur</td>
                    <td className="px-6 py-2">200 mg Capsule</td>
                    <td className="px-6 py-2">60</td>
                    <td className="px-6 py-2">Take 1 capsule every 12 hours</td>
                    <td className="px-6 py-2">2023-11-15</td>
                    <td className="px-6 py-2">2024-01-15</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-2">Consectetur adipiscing elit</td>
                    <td className="px-6 py-2">50 mg Tablet</td>
                    <td className="px-6 py-2">20</td>
                    <td className="px-6 py-2">Take 1 tablet before meals</td>
                    <td className="px-6 py-2">2023-11-20</td>
                    <td className="px-6 py-2">2024-01-20</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-2">Sed do eiusmod tempor</td>
                    <td className="px-6 py-2">100 mg Injection</td>
                    <td className="px-6 py-2">5</td>
                    <td className="px-6 py-2">Inject 1 dose every week</td>
                    <td className="px-6 py-2">2023-12-01</td>
                    <td className="px-6 py-2">2024-01-01</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-2">Adipiscing elit ut aliquam</td>
                    <td className="px-6 py-2">10 mg Syrup</td>
                    <td className="px-6 py-2">30</td>
                    <td className="px-6 py-2">Take 2 teaspoons every 12 hours</td>
                    <td className="px-6 py-2">2023-12-10</td>
                    <td className="px-6 py-2">2024-01-10</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-grow grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              
              <div className="p-8  bg-white rounded-xl shadow-2xl lg:w-full w-full">
                <h2 className="text-2xl text-center font-bold mb-4">Indication</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt ante vitae feugiat fermentum.</p>
              </div>

             
              <div className="p-8  bg-white rounded-xl shadow-2xl w-full">
                <h2 className="text-2xl text-center font-bold mb-4">Special Instructions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, risus a aliquam varius, lorem dolor vehicula orci.</p>
              </div>

              
              <div className="p-8  bg-white rounded-xl shadow-2xl w-full">
                <h2 className="text-2xl text-center font-bold mb-4">Warnings</h2>
                <p>May cause drowsiness. Avoid alcohol while taking this medication.</p>
              </div>
            </div>


            <div className="flex  justify-center items-center h-full">
              <div className="p-8  bg-white rounded-xl shadow-2xl">
                <h2 className="text-2xl text-center font-bold mb-4">Doctor’s Notes</h2>
                <p>Ensure the patient follows the dosage instructions strictly and comes for a follow-up appointment in 4 weeks.</p>
              </div>
            </div>

          </div>
        </div>
      </div>


    );
  };
  

export default Prescription;
