import React from "react";

const YoutubeItem = (props) => {
  return (
    <div>
      <div className="Youtube-item">
        <div className="youtube-image">
          <img src={props.image} alt="" />
        </div>

        <div className="youtube-footer">
          <img src={props.avata} alt="" className="youtube-avatar" />
          <div className="youtube-info">
            <h3 className="youtube-title">{props.title}</h3>
            <h4 className="youtube-author">{props.author}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
