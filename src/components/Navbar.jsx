import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../layouts/Button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };


  return (
    <div className=" bg-[#D2D9E1] text-black rounded-3xl mt-8 md:mt-0">
      <div className="px-4">
        <div className=" flex flex-row justify-between py-5 md:px-32 px-5 ">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className=" text-2xl font-semibold">PharmaChain</h1>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" text-opacity-60 text-black cursor-pointer hover:text-opacity-100 transition"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer text-opacity-60 text-black hover:text-opacity-100 transition"
            >
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer text-opacity-60 text-black hover:text-opacity-100 transition"
            >
              Services
            </Link>

            <button className=" bg-yellow-500 hover:bg-yellow-300 text-black rounded-md  transition duration-300 ease-in-out py-2 px-4 rounded-lg">Log in</button>
          </nav>
      
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-opacity-60 text-black hover:text-opacity-100 transition"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-opacity-60 text-black hover:text-opacity-100 transition"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-opacity-60 text-black hover:text-opacity-100 transition"
            onClick={closeMenu}
          >
            Services
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
