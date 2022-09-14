import React, { useContext } from "react";
import { Songs } from "../Context";
import "../App.css";
export default function DetailSong() {
  const { song } = useContext(Songs);
  return (
    <div class="content-wrapper">
      <div class="content ">
        <div className="flex h-[633px]">
          <div className="w-[30%] p-3 pl-10">
            <h2 className="text-cyan-500 font-bold">Now playing</h2>
            <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
            <div className="w-[240px] mt-10">
              <img
                className="w-full"
                src={song.links.images[0].url}
                alt="avatar"
              />
            </div>
            <div className="flex items-center mt-10">
              <img
                className="w-[70px] rounded-full"
                src={song.links.images[1].url}
                alt="avatar"
              />
              <span className="text-xl text-white pl-3">{song.author}</span>
            </div>
          </div>
          <div className=" w-[70%] text-cyan-500 text-center p-3 ">
            <div className="w-[30%]" >{song.lyrics}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
