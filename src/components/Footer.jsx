import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Alias for react-scroll Link
import { Link as RouterLink } from "react-router-dom"; // Alias for react-router-dom Link

const Footer = () => {
  return (
    <footer className="bg-[#D2D9E1] rounded-3xl text-black mt-8 md:mt-0 text-left">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start p-8 md:px-16 px-5">
          <div className="w-full md:w-1/2 text-left">
            <h1 className="font-semibold text-3xl">PharmaChain</h1>
            <p className="text-m mt-2">
              A value-driven initiative that focuses on maximizing data transparency and accessibility in the world of healthcare.
            </p>
          </div>

          <div className="w-auto text-left">
            <h1 className="font-medium text-xl">About Us</h1>
            <div className="flex flex-col gap-2 mt-2">
              {/* For scrolling within the page */}
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="text-opacity-60 text-black hover:text-opacity-100 transition"
              >
                About Us
              </ScrollLink>

              {/* For routing to other pages */}
              <RouterLink
                to="/patient-dashboard"
                className="text-opacity-60 text-black hover:text-opacity-100 transition"
              >
                Patient
              </RouterLink>

              <RouterLink
                to="/healthcare-dashboard"
                className="text-opacity-60 text-black hover:text-opacity-100 transition"
              >
                HealthCare Providers
              </RouterLink>
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
