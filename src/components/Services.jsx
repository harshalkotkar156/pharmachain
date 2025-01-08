import React from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import Patient from "../assets/img/Patient.png";
import HealthCare from "../assets/img/HealthCare.png";

const servicesCardData = [
  {
    title: 'Patients',
    description: 'Quick and secure access to your health records and verified medications.',
    icon: <img className="h-24 w-24 object-cover" src={Patient} alt="Patient Icon" />
  },
  {
    title: 'Healthcare Providers',
    description: 'Reliable tools to ensure secure and traceable medicine distribution.',
    icon: <img className="h-24 w-24 object-cover" src={HealthCare} alt="Healthcare Icon" />
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-16 px-2 pt-8 lg:pt-8">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
        <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quidem.
          </p>
        </div>
        <div className="mt-1">
          <Button title="See Services" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 pt-14 w-full justify-center">
        {servicesCardData.map(({ title, description, icon }, index) => (
          <ServicesCard
            key={index}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
