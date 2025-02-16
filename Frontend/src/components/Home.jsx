import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="bg-[#576C8B] pb-0 text-black rounded-3xl py-[72px] sm:py-24 relative overflow-clip">
        <div className="container relative">
            <div className="flex justify-center">
                <div className="inline-flex relative">
                    <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter text-center mt-8">
                        Secure Solutions For A Healthier Tomorrow
                    </h1>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-center text-xl mt-8 max-w-[800px] text-zinc-300">
                Harnessing the power of blockchain to ensure safe, transparent, and reliable healthcare solutions for everyone.</p>
            </div>
        </div> 
    </div>     
  );
};

export default Home;
