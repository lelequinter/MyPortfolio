import React, { useContext } from "react";
import webdev from "../../img/WebDev.jpg";
import MyPicAbout from "../../img/MyPicAbout.jpg";
import Tilt from "react-vanilla-tilt";
import { ThemeContext } from "../../context/context";
import Fade from "react-reveal/Fade";
import "./about.css";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="a" id="about">
        <Fade left>
          <div className="a-left">
            <Tilt
              options={{ scale: 2, max: 90 }}
              style={{
                height: "35vh",
                width: "35vh",
                overflow: "hidden",
                borderRadius: 20,
                position: "relative",
              }}
            >
              <img src={MyPicAbout} alt="" className="a-img" />
            </Tilt>
          </div>
        </Fade>
        <Fade right>
          <div className="a-rigth">
            <h1>About Me</h1>
            <p className="a-sub">
              Hi i'm Leyder Quintero a front-end developer from Colombia, I have
              knowledge in front-end tools and libraries. I have experience of
              one and half year in front-end that means that i know how work
              with version control systems, Api requests, and work with web
              pages desing. <br />
              <br />I support my work using libraries that help to make the work
              easier, fast and well done. On the other hand I know how to work
              remotely and coworkers, i'm a very adaptative person.
            </p>
          </div>
        </Fade>
      </div>
      <div className="a" id="about">
        <Fade left>
          <div className="a-left">
            <Tilt
              options={{ scale: 2, max: 90 }}
              style={{
                height: "35vh",
                width: "35vh",
                overflow: "hidden",
                borderRadius: 20,
                position: "relative",
              }}
            >
              <img src={webdev} alt="" className="a-img" />
            </Tilt>
          </div>
        </Fade>
        <Fade right>
          <div className="a-rigth">
            <h1>My Skills</h1>
            <Fade right cascade>
              <div className="a-skills">
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  React
                </li>
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  Bootstrap
                </li>
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  Html
                </li>
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  Css
                </li>
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  JavaScript
                </li>
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  TypeScript
                </li>
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  Git
                </li>
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  Postman
                </li>
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  Styled Components
                </li>
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  Framer Motion
                </li>
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  React Reveal
                </li>
                <li
                  style={{
                    border: darkMode ? "1px solid #fff" : "1px solid #333",
                  }}
                >
                  React Spring
                </li>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default About;
