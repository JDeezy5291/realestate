import React from "react";
import "./style.css";

const Agent = props => {
  return (
    <div>
      <img
        src={props.imgsrc}
        alt="Agent"
      />
        <h3 className="price">{props.name}</h3>
        <p>Real Estate Agent</p>
    </div>
  );
};

export default Agent;
