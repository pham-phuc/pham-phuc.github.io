import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
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
    <div className="w-[100%] ">
      <div className="text-4xl pt-12 pb-2 ml-16 text-white">
        Nhạc Mới <i class="fa-solid fa-circle-play"></i>
      </div>
      <table className="table-auto w-full">
        <thead className="text-white h-12 ">
          <tr>
            <th className="w-[20%]"></th>
            <th className="w-[60%] text-left"></th>
            <th className="w-[10%]"></th>
            <th className="w-[10%]"></th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={` h-12 text-gray-500 hover:bg-slate-600 ${
                idSong === song.id && "bg-slate-600 text-teal-400"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
