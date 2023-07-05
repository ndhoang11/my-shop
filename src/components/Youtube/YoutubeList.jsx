import React from "react";
import YoutubeItem from "./YoutubeItem";
import { YoutubeData } from "../../Data";

const YoutubeList = (props) => {
  return (
    <div>
      <div className="youtube-list">
      {props.children}
        {YoutubeData.map((item, index) => {
          return (
            <YoutubeItem
              key={item.id}
              image={item.image}
              avata={item.avata || item.image}
              title={item.title}
              author={item.author}
            ></YoutubeItem>
          );
        })}
      </div>
    </div>
  );
};

export default YoutubeList;
