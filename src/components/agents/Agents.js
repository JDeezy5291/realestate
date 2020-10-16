import React from "react";
import "./style.css";
import Agent from "./Agent";

const Agents = props => {
  return (
    <section id="agents">
      <div className="container">
        <h2>Agents</h2>
        <p className="large-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima
          neque tempora reiciendis.
        </p>

        <div className="flex">
          <div className="card">
            <Agent imgsrc="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&h=330&w=500" name="Bob Smith" />
          </div>
          <div className="card">
            <Agent imgsrc="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=330&w=500" name="Sally Doe" />
          </div>
          <div className="card">
            <Agent imgsrc="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=330&w=500" name="Jane Doe" />
          </div>
          <div className="card">
            <Agent imgsrc="https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=330&w=500" name="John Doe" />
          </div>
          <div className="card">
            <Agent imgsrc="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=330&w=500" name="John Smith" />
          </div>
          <div className="card">
            <Agent imgsrc="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=330&w=500" name="John Q. Public" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
