import React, { useContext, useRef, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { ThemeContext } from "../../context/context";

const Contact = () => {
  const formRef = useRef(null);
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u5mfv25",
        "template_qwpge0k",
        formRef.current,
        "LtDlVUTPWVKlh12dl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  setTimeout(() => {
    setDone(false);
  }, 2000);

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Send me a message!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <BiPhone size="40px" />
              <span>+57 312 664 2632</span>
            </div>
            <div className="c-info-item">
              <BsMailbox size="40px" />
              <span>lele.quinter@gmail.com</span>
            </div>
            <div className="c-info-item">
              <GoLocation size="40px" />
              <span>Valledupar - Colombia</span>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              rows="4"
              cols="50"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            <span
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
            >
              {done && "Message sent!"}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
