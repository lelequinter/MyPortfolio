import React from "react";
import webdev from "../../img/WebDev.jpg";
import Tilt from "react-vanilla-tilt";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        {/* <div className="a-card bg"></div> */}
        {/* <div className="a-card"> */}
        <Tilt
          options={{ scale: 2, max: 90 }}
          style={{ height: 450, width: 450, overflow: "hidden", borderRadius: 20 }}
        >
          <img src={webdev} alt="" className="a-img" />
        </Tilt>
        {/* </div> */}
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
  );
};

export default About;
