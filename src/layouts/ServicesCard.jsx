import React from "react";
import Button from "./Button";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-grow flex-col text-center gap-4 w-full lg:w-1/2 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out relative">
      
      <div className="flex items-center gap-4"> 
        <div className="w-[80px] h-[80px] opacity-50">
          {icon}
        </div>
        <h3 className=" flex flex-row-reverse font-semibold text-4xl">{title}</h3>
      </div>

      <p className="text-lg text-left">{description}</p>

      <div className="mt-1">
      <Button title="Learn more" className="bg-[#D2D9E1] px-3 py-1 rounded-md cursor-pointer hover:text-[#0000] transition duration-300 ease-in-out pt-3 mt-1" />
        
        </div>
    </div>
  );
};

export default ServicesCard;
