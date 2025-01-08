
import React, { useState } from "react";

const HealthCareProviderDashboard = () => {

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className=" min-h-screen">

      <div className="bg-[#D2D9E1] rounded-xl text-left p-4">
      <h1 className="text-4xl font-semibold">Dashboard</h1>
      </div>

      <h1>Welcome to Healthcare Provider Dashboard</h1>
      <p>Your provider tools will be displayed here.</p>
    </div>
    
  );
};

export default HealthCareProviderDashboard;