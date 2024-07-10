import React from "react";
import { assets } from "../assets/assets";

const BarSide = () => {
  return (
    <main className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
        
      <div className=" h-[15%]  rounded flex flex-col justify-around bg-black ">
        <div className="bg-black-300  rounded flex flex-col justify-around">
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img className="w-6 " src={assets.home_icon} alt="" />
            <p className="font-bold">Home</p>
          </div>

          <div className="flex items-center gap-3 pl-8 cursor-pointer ">
            <img className="w-6 " src={assets.search_icon} alt="" />
            <p className="font-bold">Search</p>
          </div>
        </div>
      </div>
      <div className="bg-black h-[85%] rounded ">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8 " src={assets.stack_icon} alt="" />
            <p className="font-semibold "> Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="p-8 m-6 bg-gray-900 rounded flex flex-col font-semibold items-start justify-start gap-1 pl-1">
            <h1> craete your play list</h1>
            <p className="font-light"> It's easy we will help you</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button>
        </div>
        <div className="p-8 m-6 bg-gray-900 rounded flex flex-col font-semibold items-start justify-start gap-1 mt-4 pl-1">
            <h1> Let's find some podcasts to follow</h1>
            <p className="font-light"> we will keep you update for new episodes</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Brows podcats</button>
        </div>
      </div>
    </main>

  );
};

export default BarSide;
