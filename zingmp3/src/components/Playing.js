import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";
import "./Playing.css";
export default function Playing() {
  const { song, handleSetSong } = useContext(Songs);
  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleClickPre = () => {
    handleSetSong(song.id - 1);
  };
  return (
    <div className="content-wrapper">
      <div className="content ">
        <AudioPlayer
          className="player"
          src={song.url}
          layout="stacked-reverse"
          showSkipControls={true}
          showJumpControls={false}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPre}
        />
      </div>
    </div>
  );
}
