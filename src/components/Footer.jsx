import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#D2D9E1] rounded-3xl text-black mt-8 md:mt-0 text-left">
      <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-end  p-8 md:px-24 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">PharmaChain</h1>

          <p className=" text-m">
            A value driven initiative that focuses on maximising data transparency and accessibility in the world of healthcare.
          </p>

        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <div className=" flex flex-col gap-2">

            <a href="#" 
            className="text-opacity-60 text-black hover:text-opacity-100 transition">
                About
            </a>

            <a href="#" className="text-opacity-60 text-black hover:text-opacity-100 transition">
                Patient
            </a>

            <a href="#" className="text-opacity-60 text-black hover:text-opacity-100 transition">
              HealthCare Providers
            </a>

          </div>
        </div>

        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Social </h1>

          <div className=" flex flex-col gap-2">
            <a href="#" className="text-opacity-60 text-black hover:text-opacity-100 transition">
            LinkedIn
            </a>

            <a href="#" className="text-opacity-60 text-black hover:text-opacity-100 transition">
            X
            </a>

            <a href="#" className="text-opacity-60 text-black hover:text-opacity-100 transition">
            Youtube
            </a>

            <a href="#" className="text-opacity-60 text-black hover:text-opacity-100 transition">
            Instagram
            </a>

            <a href="#" className="text-opacity-60 text-black hover:text-opacity-100 transition">
            Facebook
            </a>

          </div>
        </div>
      </div>
      
       <div>
          <p className=" text-center py-4">
            Designed and developed by 
          </p>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
