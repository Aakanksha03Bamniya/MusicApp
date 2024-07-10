import React, { useContext } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbm = () => {
  const { id } = useParams();
  // console.log(id);
  const albumData = albumsData[id];
  // console.log(albumData);


  const {playWithId} = useContext(PlayerContext)
  return (
    <>
      <NavBar />
      <div className="mt-10 flex gap-8 flex-col md:flex-col md:items-center">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className=" text-5xl font-bold mb-4 md:text-7xl"></h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className=" inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>
            .2,45,897Likes .<b>50 Songs</b>
            about 2 hrs 30 mins
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-gray-300">
        <p><b className=" mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block"> Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt=""/>

      </div>
      {
        songsData.map((item,index)=>(
          <div onClick={()=>playWithId(item.id)} key={index} className=" grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-gray-300 hover:bg-gray-500 cursor-pointer">
              <p className="text-white">
                <b className="mr-4 text-gray-300">{index+1}</b>
                <img className="inline mr-5 w-10" src={item.image} alt=""/>
                {item.name}
              </p>
              <p className=" text-[15px]">{albumData.name}</p>
              <p className="text-[15px] hidden sm:block"> 4 days to go</p>
              <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))
      }
    </>
  );
};

export default DisplayAlbm;
