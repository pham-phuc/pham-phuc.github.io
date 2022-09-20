// import React, { useContext } from "react";
import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";
import "../App.css";
export default function DetailSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  return (
    <div className="content-wrapper">
      <div className="content ">
        <div className="w-[100%] h-[633px] overflow-hidden overflow-y-scroll ml-5">
          {DataSongs.map((song, index) => (
            <div
              key={index}
              className={` h-12 text-gray-500 hover:bg-slate-600 flex-1 ${
                idSong === song.id && "bg-slate-600 text-teal-400"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <div>{index + 1}</div>
              <div>{song.name}</div>
              <div className="text-center w-[30%] h-[50%] flex-1">
                <img
                  className="w-full w-[100%] h-[300px] "
                  src={song.links.images[0].url}
                  alt="avatar"
                />
              </div>
              <div className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
