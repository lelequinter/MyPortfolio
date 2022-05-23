import React, { useContext } from "react";
import webdev from "../../img/WebDev.jpg";
import MyPicAbout from "../../img/MyPicAbout.jpg";
import Tilt from "react-vanilla-tilt";
import "./about.css";
import { ThemeContext } from "../../context/context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="a" id="about">
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
        <div className="a-rigth">
          <h1>About Me</h1>
          <p className="a-sub">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
            aspernatur quia, ullam saepe inventore corporis odit nulla modi at
            maxime doloremque consequuntur autem sint incidunt tempora molestiae
            quaerat necessitatibus suscipit?
          </p>
          <p className="i-desc">
            I a front-end developer with knowledge in html, javascript, css,
            react, styled components, etc.
          </p>
        </div>
      </div>
      <div className="a" id="about">
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
        <div className="a-rigth">
          <h1>My Skills</h1>
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
        </div>
      </div>
    </>
  );
};

export default About;
