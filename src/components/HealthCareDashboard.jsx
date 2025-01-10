import React, { useState } from "react";
import HealtchCareSidebar from './HealtchCareSidebar';
import Profile from '../assets/img/Profile.png';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from "react-icons/fi";

const HealthCareDashboard = () => {

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="flex min-h-screen">
      <HealtchCareSidebar sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />

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
              <p className="text-gray-600">User ID: 123456</p>
            </div>
          </div>

          <div className="bg-white shadow-lg hover:shadow-2xl hover:shadow-[#BED0EF] transition-all rounded-lg p-6 w-full col-span-1 md:col-span-1 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Information</h2>
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
                  <li><strong>Email:</strong> johndoe@example.com</li>
                  <li><strong>Permanent Address:</strong> 123 Main St, Cityville</li>
                  <li><strong>Mailing Address:</strong> 123 Main St, Cityville</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className="text-left grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        <div className="bg-white shadow-md hover:shadow-2xl hover:shadow-[#BED0EF] transition-all rounded-lg p-6 flex flex-col items-center justify-between w-full">
          <h2 className="text-xl font-bold mb-4">In Stock</h2>
          <p className="text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quidem.</p>
          <Link to="/in-stock">
            <FiArrowRightCircle className="text-yellow-300 hover:text-yellow-500 text-3xl" />
          </Link>
        </div>

          <div className="bg-white shadow-md hover:shadow-2xl hover:shadow-[#BED0EF] transition-all rounded-lg p-6 flex flex-col items-center justify-between w-full">
            <h2 className="text-xl font-bold mb-4">Out of Stock</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quidem.</p>
            <Link to="/out-of-stock">
            <FiArrowRightCircle className="text-yellow-300 hover:text-yellow-500 text-3xl" />
          </Link>
          </div>

          <div className="bg-white shadow-md hover:shadow-2xl hover:shadow-[#BED0EF] transition-all rounded-lg p-6 flex flex-col items-center justify-between w-full">
            <h2 className="text-xl font-bold mb-4">Expired Stock</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quidem.</p>
            <Link to="/expiry">
            <FiArrowRightCircle className="text-yellow-300 hover:text-yellow-500 text-3xl" />
          </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HealthCareDashboard;
