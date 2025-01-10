import React, { useState } from "react";
import HealthCareSidebar from "./HealtchCareSidebar";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Expiry = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [ManufacturingDate, setManufacturingDate] = useState("");
  const [ExpiryDate, setExpiryDate] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const medicines = [

  {
  name: "Metformin",
  batch: "B006",
  manufacturing: "2022-11-15",
  expiry: "2024-11-15",
  quantity: 90,
  mrp: "₹45",
  },
  {
  name: "Atorvastatin",
  batch: "B007",
  manufacturing: "2023-05-25",
  expiry: "2026-05-25",
  quantity: 110,
  mrp: "₹55",
  },
  {
    name: "Paracetamol",
    batch: "B001",
    manufacturing: "2023-01-01",
    expiry: "2025-01-01",
    quantity: 120,
    mrp: "₹25",
    },
    {
    name: "Pantoprazole",
    batch: "B008",
    manufacturing: "2023-06-10",
    expiry: "2025-06-10",
    quantity: 130,
    mrp: "₹80",
    },
    {
    name: "Ranitidine",
    batch: "B009",
    manufacturing: "2023-07-01",
    expiry: "2025-07-01",
    quantity: 140,
    mrp: "₹40",
    },
    {
    name: "Omeprazole",
    batch: "B010",
    manufacturing: "2022-10-20",
    expiry: "2024-10-20",
    quantity: 70,
    mrp: "₹50",
    },
    {
    name: "Ibuprofen",
    batch: "B002",
    manufacturing: "2022-12-10",
    expiry: "2024-12-10",
    quantity: 150,
    mrp: "₹50",
    },
    {
    name: "Aspirin",
    batch: "B003",
    manufacturing: "2023-02-15",
    expiry: "2025-02-15",
    quantity: 100,
    mrp: "₹35",
    },
    {
    name: "Amoxicillin",
    batch: "B004",
    manufacturing: "2023-03-05",
    expiry: "2026-03-05",
    quantity: 80,
    mrp: "₹60",
    },
    {
    name: "Ciprofloxacin",
    batch: "B005",
    manufacturing: "2023-04-20",
    expiry: "2025-04-20",
    quantity: 60,
    mrp: "₹70",
    },
  
  {
  name: "Simvastatin",
  batch: "B011",
  manufacturing: "2023-08-15",
  expiry: "2026-08-15",
  quantity: 50,
  mrp: "₹75",
  },
  {
  name: "Cetirizine",
  batch: "B012",
  manufacturing: "2023-09-10",
  expiry: "2025-09-10",
  quantity: 120,
  mrp: "₹25",
  },
  {
  name: "Gabapentin",
  batch: "B017",
  manufacturing: "2023-06-18",
  expiry: "2026-06-18",
  quantity: 110,
  mrp: "₹95",
  },
  {
  name: "Tramadol",
  batch: "B018",
  manufacturing: "2023-08-30",
  expiry: "2026-08-30",
  quantity: 70,
  mrp: "₹65",
  },
  {
  name: "Azithromycin",
  batch: "B019",
  manufacturing: "2022-11-01",
  expiry: "2024-11-01",
  quantity: 150,
  mrp: "₹55",
  },
  {
    name: "Clopidogrel",
    batch: "B013",
    manufacturing: "2023-01-25",
    expiry: "2025-01-25",
    quantity: 80,
    mrp: "₹90",
    },
    {
    name: "Losartan",
    batch: "B014",
    manufacturing: "2023-03-18",
    expiry: "2026-03-18",
    quantity: 140,
    mrp: "₹85",
    },
    {
    name: "Glimepiride",
    batch: "B015",
    manufacturing: "2022-09-30",
    expiry: "2025-09-30",
    quantity: 100,
    mrp: "₹30",
    },
    {
    name: "Furosemide",
    batch: "B016",
    manufacturing: "2023-04-22",
    expiry: "2025-04-22",
    quantity: 60,
    mrp: "₹20",
    },
  {
  name: "Hydrochlorothiazide",
  batch: "B020",
  manufacturing: "2023-01-15",
  expiry: "2025-01-15",
  quantity: 100,
  mrp: "₹85",
  }

  ];

  const handleAddClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const filteredMedicines = medicines.filter((medicine) => {
    const matchesSearchTerm = medicine.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesManufacturingDate =
      (!ManufacturingDate || new Date(medicine.manufacturing) >= new Date(ManufacturingDate)) ;
    const matchesExpiryDate =
      (!ExpiryDate || new Date(medicine.expiry) >= new Date(ExpiryDate)) ;
    return matchesSearchTerm && matchesManufacturingDate && matchesExpiryDate;
  });

  return (
    <div className="flex min-h-screen">
      <HealthCareSidebar sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
  
      <div className={`flex-grow ${sidebarExpanded ? "ml-2" : "ml-0"} bg-white`}>
        
        <div className="bg-[#576C8B] rounded-xl text-left p-6 shadow-lg mb-8">
          <h1 className="text-5xl font-semibold text-white">Expired Stock</h1>
        </div>
  
       
        <div className="p-8 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
           
            <div className="flex justify-center w-full md:w-auto">
              <input
                type="text"
                placeholder="Search by name"
                className="border rounded-lg p-3 w-full max-w-md shadow focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
  
            
            <div className="flex flex-wrap gap-6">
              
              <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-md">
                <label
                  htmlFor="manufacturing-date"
                  className="text-gray-600 text-sm font-medium mb-2"
                >
                  Manufacturing Date
                </label>
                <input
                  id="manufacturing-date"
                  type="date"
                  className="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={ManufacturingDate}
                  onChange={(e) => setManufacturingDate(e.target.value)}
                />
              </div>
  
             
              <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-md">
                <label
                  htmlFor="expiry-date"
                  className="text-gray-600 text-sm font-medium mb-2"
                >
                  Expiry Date
                </label>
                <input
                  id="expiry-date"
                  type="date"
                  className="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={ExpiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
            </div>
          </div>
  
         
          <div className="overflow-x-auto shadow-2xl max-h-[600px] p-6 rounded-xl bg-gray-50">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-2 text-left font-medium text-gray-600">Name</th>
                  <th className="px-6 py-2 text-left font-medium text-gray-600">Batch No.</th>
                  <th className="px-6 py-2 text-left font-medium text-gray-600">Manufacturing Date</th>
                  <th className="px-6 py-2 text-left font-medium text-gray-600">Expiry Date</th>
                  <th className="px-6 py-2 text-left font-medium text-gray-600">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {filteredMedicines.map((medicine, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-2">{medicine.name}</td>
                    <td className="px-6 py-2">{medicine.batch}</td>
                    <td className="px-6 py-2">{medicine.manufacturing}</td>
                    <td className="px-6 py-2">{medicine.expiry}</td>
                    <td className="px-6 py-2">{medicine.quantity}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Expiry;
