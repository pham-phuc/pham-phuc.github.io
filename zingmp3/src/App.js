import logo from "./logo.svg";
import "./App.css";
import ListSongs from "./components/Listsongs";
import { Songs } from "./Context";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import DataSongs from "./data/songs.json";
import Playing from "./components/Playing";
import Navbar from "./components/Navbar";
import { useState } from "react";
function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div class="content-wrapper">
          <div class="content ">
            <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
              <div className="h-[633px] overflow-hidden overflow-y-scroll">               
                <Routes />
              </div>
              <Playing />
            </Songs.Provider>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
