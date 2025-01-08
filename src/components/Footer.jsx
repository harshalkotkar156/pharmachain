import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D2D9E1] rounded-3xl text-black mt-8 md:mt-0 text-left">
      <div className="container">
        {/* Titles and Content */}
        <div className="flex flex-col md:flex-row justify-between items-start p-8 md:px-16 px-5">
          {/* PharmaChain Section */}
          <div className="w-full md:w-1/2 text-left">
            <h1 className="font-semibold text-3xl">PharmaChain</h1>
            <p className="text-m mt-2">
              A value-driven initiative that focuses on maximizing data transparency and accessibility in the world of healthcare.
            </p>
          </div>

          {/* About Us Section */}
          <div className="w-auto text-left">
            <h1 className="font-medium text-xl">About Us</h1>
            <div className="flex flex-col gap-2 mt-2">
              <a href="#" className="text-opacity-60 text-black hover:text-opacity-100 transition">
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

          {/* Social Section */}
          <div className="w-auto text-left">
            <h1 className="font-medium text-xl">Social</h1>
            <div className="flex flex-col gap-2 mt-2">
              <a href="#" className="text-opacity-60 text-black hover:text-opacity-100 transition">
                LinkedIn
              </a>
              <a href="#" className="text-opacity-60 text-black hover:text-opacity-100 transition">
                X
              </a>
              <a href="#" className="text-opacity-60 text-black hover:text-opacity-100 transition">
                YouTube
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

        {/* Footer Credits */}
        <div>
          <p className="text-center py-4">Designed and developed by</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;