import Sidebar from './Sidebar';
import React, { useState } from "react";

const LabReports = () => {

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const [reports, setReports] = useState([
    { reportDate: '2023-12-12', testName: 'Blood Test', testStatus: 'Completed', interpretation: 'Normal', doctorNotes: 'No issues', id: 1 },
    { reportDate: '2023-12-13', testName: 'X-ray', testStatus: 'Pending', interpretation: 'N/A', doctorNotes: 'Further review required', id: 2 },
    { reportDate: '2023-12-14', testName: 'Urine Test', testStatus: 'Completed', interpretation: 'Abnormal', doctorNotes: 'Consult with doctor', id: 3 },
    { reportDate: '2023-12-15', testName: 'ECG', testStatus: 'Completed', interpretation: 'Normal', doctorNotes: 'Monitor heart rate', id: 4 },
    { reportDate: '2023-12-16', testName: 'Blood Sugar Test', testStatus: 'Completed', interpretation: 'Normal', doctorNotes: 'Maintain healthy diet', id: 5 },
    { reportDate: '2023-12-17', testName: 'MRI Scan', testStatus: 'Completed', interpretation: 'Abnormal', doctorNotes: 'Further tests needed', id: 6 },
    { reportDate: '2023-12-18', testName: 'CT Scan', testStatus: 'Pending', interpretation: 'N/A', doctorNotes: 'Waiting for results', id: 7 },
    { reportDate: '2023-12-19', testName: 'Cholesterol Test', testStatus: 'Completed', interpretation: 'High', doctorNotes: 'Reduce fat intake', id: 8 },
    { reportDate: '2023-12-20', testName: 'Liver Function Test', testStatus: 'Completed', interpretation: 'Normal', doctorNotes: 'Good results', id: 9 },
    { reportDate: '2023-12-21', testName: 'Thyroid Test', testStatus: 'Completed', interpretation: 'Low', doctorNotes: 'Monitor levels', id: 10 },
    { reportDate: '2023-12-22', testName: 'COVID-19 Test', testStatus: 'Completed', interpretation: 'Negative', doctorNotes: 'Continue precautions', id: 11 },
    { reportDate: '2023-12-23', testName: 'Pregnancy Test', testStatus: 'Completed', interpretation: 'Positive', doctorNotes: 'Consult with gynecologist', id: 12 },
    { reportDate: '2023-12-24', testName: 'Vitamin D Test', testStatus: 'Completed', interpretation: 'Normal', doctorNotes: 'Maintain vitamin intake', id: 13 },
    { reportDate: '2023-12-25', testName: 'Allergy Test', testStatus: 'Pending', interpretation: 'N/A', doctorNotes: 'Awaiting lab report', id: 14 },
    { reportDate: '2023-12-26', testName: 'Dental X-ray', testStatus: 'Completed', interpretation: 'Normal', doctorNotes: 'Good oral health', id: 15 },
    { reportDate: '2023-12-27', testName: 'Spirometry Test', testStatus: 'Completed', interpretation: 'Normal', doctorNotes: 'Good lung function', id: 16 },
    { reportDate: '2023-12-28', testName: 'Ultrasound', testStatus: 'Pending', interpretation: 'N/A', doctorNotes: 'Test under review', id: 17 },
    { reportDate: '2023-12-29', testName: 'Bone Density Test', testStatus: 'Completed', interpretation: 'Normal', doctorNotes: 'Monitor calcium intake', id: 18 },
    { reportDate: '2023-12-30', testName: 'HIV Test', testStatus: 'Completed', interpretation: 'Negative', doctorNotes: 'Continue with precautions', id: 19 },
    { reportDate: '2023-12-31', testName: 'Lung X-ray', testStatus: 'Completed', interpretation: 'Normal', doctorNotes: 'No concerns', id: 20 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const filteredReports = reports.filter(report => {
    const withinDateRange = (!dateRange.start || new Date(report.reportDate) >= new Date(dateRange.start)) && 
                            (!dateRange.end || new Date(report.reportDate) <= new Date(dateRange.end));
    const matchesSearch = report.testName.toLowerCase().includes(searchQuery.toLowerCase());
    return withinDateRange && matchesSearch;
  });

  const openModal = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedReport(null);
  };

  return (
      <div className="flex min-h-screen">
      <Sidebar sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
    
      <div className={`flex-grow rounded-xl ${sidebarExpanded ? "ml-2" : "ml-0"} bg-gray-50`}>
        
        <div className="bg-[#576C8B] rounded-xl py-4 px-6 shadow-lg mb-4">
          <h1 className="text-5xl text-left font-semibold text-white">Lab Reports</h1>
        </div>
    
        <div className="p-8">
          <div className="flex justify-between mb-8">
            <input
              type="text"
              placeholder="Search by Test Name"
              className="border border-gray-300 rounded-lg p-4 w-1/3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex gap-4">
              <input
                type="date"
                className="border border-gray-300 rounded-lg p-4"
                value={dateRange.start}
                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              />
              <input
                type="date"
                className="border border-gray-300 rounded-lg p-4"
                value={dateRange.end}
                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredReports.map((report) => (
              <div key={report.id} 
              className="bg-white p-6 rounded-xl hover:border-blue-500 hover:border-2 shadow-md hover:shadow-2xl hover:shadow-[#BED0EF] transition-all">
                <h3 className="text-xl font-bold mb-2">{report.testName}</h3>
                <p className="text-left"><strong>Report Date:</strong> {report.reportDate}</p>
                <p className="text-left"><strong>Status:</strong> {report.testStatus}</p>
                <button
                  onClick={() => openModal(report)}
                  className="mt-4 text-blue-500 hover:underline"
                >
                  View Report
                </button>
              </div>
            ))}
          </div>
          
          {showModal && selectedReport && (
            <div 
              className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
              onClick={closeModal} 
            >
              <div 
                className="bg-white p-8 rounded-xl max-w-2xl w-full text-left"
                onClick={(e) => e.stopPropagation()} 
              >
                <h3 className="text-2xl text-center font-bold mb-4">{selectedReport.testName}</h3>
                <p><strong>Report Date:</strong> {selectedReport.reportDate}</p>
                <p><strong>Status:</strong> {selectedReport.testStatus}</p>
                <p><strong>Interpretation:</strong> {selectedReport.interpretation}</p>
                <p><strong>Doctor’s Notes:</strong> {selectedReport.doctorNotes}</p>
                <div className="mt-4 flex gap-4 justify-center">
                  <button
                    onClick={closeModal}
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => alert('Download initiated')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Download Report
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  
  );
};

export default LabReports;
