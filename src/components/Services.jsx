import React from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import Patient from "../assets/img/Patient.png";
import HealthCare from "../assets/img/HealthCare.png";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-16 px-2 lg:py-16 py-8 pt-0 lg:pt-0">
      
      <div className="text-center mb-8">
        <h1 className="text-4xl text-left font-semibold">Our Services</h1>
        <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quidem.
          </p>
      </div>

      
      <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
        
        <div className="lg:w-1/2 flex justify-center">
          <ServicesCard
            title="Patients"
            description="Quick and secure access to your health records and verified medications."
            icon={<img className="h-20 w-20 object-cover" src={Patient} alt="Patient Icon" />}
          />
        </div>

        <div className="lg:w-1/2 text-left">
          <h2 className="text-2xl font-bold mb-4">Patients</h2>
          <p className="text-md text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam labore rerum tempore tenetur commodi natus quos itaque voluptatum repudiandae nostrum accusantium vero voluptate aspernatur totam, laboriosam aut, et quae consequatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam labore rerum tempore tenetur commodi natus quos itaque voluptatum repudiandae nostrum accusantium vero voluptate aspernatur totam, laboriosam aut, et quae consequatur?
          </p>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
        
        <div className="lg:w-1/2 flex justify-center">
          <ServicesCard
            title="Healthcare Providers"
            description="Reliable tools to ensure secure and traceable medicine distribution."
            icon={<img className="h-20 w-20 object-cover" src={HealthCare} alt="Healthcare Icon" />}
          />
        </div>

        
        <div className="lg:w-1/2 text-left">
          <h2 className="text-2xl font-bold mb-4">Healthcare Providers</h2>
          <p className="text-md text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam labore rerum tempore tenetur commodi natus quos itaque voluptatum repudiandae nostrum accusantium vero voluptate aspernatur totam, laboriosam aut, et quae consequatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam labore rerum tempore tenetur commodi natus quos itaque voluptatum repudiandae nostrum accusantium vero voluptate aspernatur totam, laboriosam aut, et quae consequatur?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
