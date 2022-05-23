import React, { useContext } from "react";
import MyPic from "../../img/MyPic.png";
import { Mouse, MouseWheel, ScrollDown } from "./styles.jsx";
import { ThemeContext } from "../../context/context";
import Fade from "react-reveal/Fade";
import "./intro.css";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="i">
      <Fade left>
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hi! my name is</h2>
            <h1 className="i-name">Leyder Quintero</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Front-End Developer</div>
                <div className="i-title-item">Mechatronic Engineer</div>
              </div>
            </div>
            <p className="i-desc">
              I a front-end developer with knowledge in html, javascript, css,
              react, styled components, etc.
            </p>
          </div>
          <ScrollDown>
            <p>Scroll Down</p>
            <Mouse darkMode={darkMode ? true : false}>
              <MouseWheel darkMode={darkMode ? true : false} />
            </Mouse>
          </ScrollDown>
        </div>
      </Fade>
      <div className="i-rigth">
        <div className="i-bg"></div>
        <Fade right>
          <img src={MyPic} className="i-img" alt="" />
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
