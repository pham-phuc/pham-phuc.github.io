import React from "react";
import { Data } from "../Data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div className="Youtube-list">
      {Data.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          title={item.title}
          author={item.author}
        ></YoutubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
