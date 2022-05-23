import React from "react";
import webdev from "../../img/WebDev.jpg";
import MyPicAbout from '../../img/MyPicAbout.jpg'
import Tilt from "react-vanilla-tilt";
import "./about.css";

const About = () => {
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
            <li>React</li>
            <li>Bootstrap</li>
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Git</li>
            <li>Postman</li>
            <li>Styled Components</li>
            <li>Framer Motion</li>
            <li>React Reveal</li>
            <li>React Spring</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
