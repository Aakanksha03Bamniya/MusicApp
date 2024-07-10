import React from "react";
import NavBar from "./NavBar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <NavBar />

      <div className="mb-4">
        <h4 className=" my-5 font-bold text-2xl"> Features</h4>

        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
        

      <div className="mb-4">
        <h4 className=" my-5 font-bold text-2xl">Letest superhit music</h4>

        <div className="flex overflow-auto">
        
        {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}

            />
          ))}

        </div>
      </div>
    </>
  );
};

export default DisplayHome;
