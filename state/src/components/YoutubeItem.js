import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className="Youtube-wraper">
      <div className="Youtube-item-container">
        <div className="Youtube-item">
          <div className="Youtube-image">
            <img className="image-" src={props.image} />
          </div>
        </div>
        <div className="Youtube-footer">
          <img className="image-avatar" src={props.avatar} />
          <div className="Youtube-info">
            <h3 className="Youtube-title"> {props.title} </h3>
            <h4 className="Youtube-author">{props.author} </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
