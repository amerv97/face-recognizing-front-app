import React from "react";
import Tilt from "react-parallax-tilt";
// import { ReactDOM } from "react-dom";
import "./Logo.css";
import spy from "./spy.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150, backgroundColor: "lightblue" }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} alt="logo" src={spy}></img>
        </div>
      </Tilt>
    </div>
  );
};
// ReactDOM.render(<App />, document.getElementById('root'))

export default Logo;
