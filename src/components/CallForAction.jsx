import React from 'react';
import img from '../assets/img/CallForAction.png'; 
import Button from '../layouts/Button';

const CallToAction = () => {
  return (
    <section className="bg-white text-black rounded-2xl flex flex-col lg:flex-row justify-between items-center py-[72px] lg:py-24 relative overflow-clip">
      
      <div className="w-full lg:w-1/2 space-y-2 pr-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-2/2 text-center lg:text-left">
            <p className="text-md mb-2 text-yellow-600 font-mono">REACH TO US</p>
            <h2 className="text-2xl font-bold mb-2">
              If you would like our assistance, please complete the form here and one of our team members will reach out to you.
            </h2>
            <div className="border-t border-white w-16 mb-2 mx-auto lg:mx-0 shadow-lg hover:shadow-2xl hover:shadow-black transition-all "></div>
            <img src={img} alt="Contact us" className="mx-auto lg:mx-0 w-full max-w-7xl rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-left">
        <div className="border-t border-white w-16 mb-2"></div>

        <form className="space-y-4"> 
          <div>
            <label className="block text-md font-medium" htmlFor="name">Name</label>
            <div className="border-b border-black w-full mt-1 h-1"></div> 
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-1 text-black bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-medium" htmlFor="location">Location</label>
            <div className="border-b border-black w-full mt-1 h-1"></div> 
            <input
              type="text"
              id="location"
              className="w-full p-3 mt-1 text-black bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-medium" htmlFor="phone">Phone Number</label>
            <div className="border-b border-black w-full mt-1 h-1"></div> 
            <input
              type="tel"
              id="phone"
              className="w-full p-3 mt-1 text-black bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-medium" htmlFor="email">Email</label>
            <div className="border-b border-black w-full mt-1 h-1"></div> 
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-1 text-black bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex justify-center items-center">
            <Button title="Submit" className="rounded-md cursor-pointer align-center px-6 py-2" /> 
          </div>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
