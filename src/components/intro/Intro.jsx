import React from "react";
import MyPic from "../../img/MyPic.png";
import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi! my name is</h2>
          <h1 className="i-name">Leyder Quintero</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Mechatronic Engineer</div>
            </div>
          </div>
          <div className="i-desc">
            I a front-end developer with knowledge in html, javascript, css,
            react, styled components, etc.
          </div>
        </div>
      </div>
      <div className="i-rigth">
        <img src={MyPic} className="i-img" alt="" />
      </div>
    </div>
  );
};

export default Intro;
