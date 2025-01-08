import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { BsPrescription2 } from "react-icons/bs";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="flex">
      <div
        className={`fixed left-0 top-0 h-screen bg-[#576C8B] text-white text-opacity-60 hover:text-opacity-100 transition ${
          sidebarExpanded ? "w-64" : "w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Toggle Button */}
          <div className="flex justify-between items-center p-4">
            <button
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
              className="p-2 text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  sidebarExpanded ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
          </div>

          {/* Profile Icon */}
          <Link
            to="/patient-dashboard"
            className="flex justify-center items-center w-12 h-12 mx-auto mt-4 bg-white text-[#576C8B] rounded-full hover:text-opacity-100 transition"
          >
            <CgProfile className="w-8 h-8" />
          </Link>

          {/* Navigation Links */}
          <div
            className={`${
              sidebarExpanded
                ? "flex flex-col px-4 py-6 space-y-4"
                : "flex-grow flex flex-col justify-center items-center mt-8 space-y-8"
            }`}
          >
            {!sidebarExpanded && (
              <>
                <Link
                  to="/home"
                  className="flex justify-center items-center w-12 h-12 mx-auto text-white hover:text-opacity-100 transition"
                >
                  <FiHome className="w-6 h-6" />
                </Link>
                <Link
                  to="/prescription"
                  className="flex justify-center items-center w-12 h-12 mx-auto text-white hover:text-opacity-100 transition"
                >
                  <BsPrescription2 className="w-6 h-6" />
                </Link>
                <Link
                  to="/lab-reports"
                  className="flex justify-center items-center w-12 h-12 mx-auto text-white hover:text-opacity-100 transition"
                >
                  <LiaNotesMedicalSolid className="w-6 h-6" />
                </Link>
              </>
            )}

            {sidebarExpanded && (
              <>
                <Link
                  to="/home"
                  className="text-white text-left text-opacity-60 hover:text-opacity-100 transition"
                >
                  <span className="ml-3">Home</span>
                </Link>
                <Link
                  to="/prescription"
                  className="text-white text-left text-opacity-60 hover:text-opacity-100 transition"
                >
                  <span className="ml-3">Prescriptions</span>
                </Link>
                <Link
                  to="/lab-reports"
                  className="text-white text-left text-opacity-60 hover:text-opacity-100 transition"
                >
                  <span className="ml-3">Lab Reports</span>
                </Link>
              </>
            )}
          </div>

          {/* Settings and Help at the Bottom */}
          <div className="mt-auto px-4 py-6 space-y-4">
            {sidebarExpanded ? (
              <>
                <Link
                  to="/settings"
                  className="text-white text-opacity-60 hover:text-opacity-100 transition flex items-center"
                >
                  <CiSettings className="w-6 h-6" />
                  <span className="ml-3">Settings</span>
                </Link>
                <Link
                  to="/help"
                  className="text-white text-opacity-60 hover:text-opacity-100 transition flex items-center"
                >
                  <span className="ml-3">Help</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/settings"
                  className="flex justify-center items-center w-12 h-12 mx-auto text-white hover:text-opacity-100 transition"
                >
                  <CiSettings className="w-6 h-6" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-grow ${sidebarExpanded ? "ml-64" : "ml-20"} p-8`}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
