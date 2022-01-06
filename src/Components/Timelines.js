import React from "react";
import data from "./data";
function Timelines({ timeline }) {
  return (
    <div>
      <p>{timeline.timep}</p>
      <img className="img" src={timeline.image} />
      <p>{timeline.desc}</p>
    </div>
  );
}

export default Timelines;
