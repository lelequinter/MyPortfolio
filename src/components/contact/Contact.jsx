import React, { useContext, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { Formik, Form, Field } from "formik";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { TiWarningOutline } from "react-icons/ti";
import { ThemeContext } from "../../context/context";
import {
  DivForm,
  StyledError,
  ButtonSection,
  Button,
  InfoItemA,
  InfoItemDiv,
} from "./styles";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import { SpinnerRoundFilled } from "spinners-react";

const Contact = () => {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  setTimeout(() => {
    setDone(false);
  }, 4000);

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <Fade left>
            <h3 className="c-title">
              Send me a <br /> message!
            </h3>
            <div className="c-info">
              <InfoItemA
                href="https://github.com/lelequinter"
                darkMode={darkMode ? true : false}
                target="_blank"
              >
                <BsGithub size="30px" />
                <span>lelequinter</span>
              </InfoItemA>
              <InfoItemA
                href="https://wa.link/yb0inv"
                darkMode={darkMode ? true : false}
                target="_blank"
              >
                <FaWhatsapp size="32px" />
                <span>+57 312 664 2632</span>
              </InfoItemA>
              <InfoItemA
                href="https://www.linkedin.com/in/leyder-quintero-bayona-5578a11b3/"
                darkMode={darkMode ? true : false}
                target="_blank"
              >
                <FaLinkedinIn size="30px" />
                <span>Leyder Quintero Bayona</span>
              </InfoItemA>
              <InfoItemDiv darkMode={darkMode ? true : false}>
                <AiOutlineMail size="30px" />
                <span>lele.quinter@gmail.com</span>
              </InfoItemDiv>
              <InfoItemDiv darkMode={darkMode ? true : false}>
                <GoLocation size="30px" />
                <span>Valledupar - Colombia</span>
              </InfoItemDiv>
            </div>
          </Fade>
        </div>

        <div className="c-right">
          <Fade right>
            <p className="c-desc">
              <b>What's your story?</b> Get in touch. Always available for
              freelancing if the right project comes along me.
            </p>
          </Fade>
          <Formik
            initialValues={{
              user_name: "",
              user_subject: "",
              user_email: "",
              message: "",
            }}
            validate={(valores) => {
              let errores = {};
              if (!valores.user_name) {
                errores.user_name = "Type your name";
              }
              if (!valores.user_subject) {
                errores.user_subject = "Type a subject";
              }
              if (!valores.user_email) {
                errores.user_email = "Type a email";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.user_email
                )
              ) {
                errores.user_email =
                  "Email can only contain letters, numbers, periods and hyphens";
              }
              if (!valores.message) {
                errores.message = "Type a message";
              }
              return errores;
            }}
            onSubmit={(values, { resetForm }) => {
              setLoading(true);
              emailjs
                .send(
                  "service_u5mfv25",
                  "template_qwpge0k",
                  values,
                  "LtDlVUTPWVKlh12dl"
                )
                .then((result) => {
                  console.log(result.text);
                  setDone(true);
                  resetForm();
                  setLoading(false);
                })
                .catch((error) => {
                  console.log(error.text);
                  setLoading(false);
                });
            }}
          >
            {({ handleSubmit, touched, errors }) => (
              <Form onSubmit={handleSubmit}>
                <DivForm>
                  <Fade right cascade>
                    <Field
                      style={{
                        backgroundColor: darkMode && "#333",
                        color: darkMode && "#fff",
                        borderColor: darkMode && "#fff",
                      }}
                      type="text"
                      placeholder="Name"
                      name="user_name"
                    />
                    <StyledError darkMode={darkMode ? true : false}>
                      {touched.user_name && errors.user_name && (
                        <>
                          <TiWarningOutline size={20} />
                          {errors.user_name}
                        </>
                      )}
                    </StyledError>
                    <Field
                      style={{
                        backgroundColor: darkMode && "#333",
                        color: darkMode && "#fff",
                        borderColor: darkMode && "#fff",
                      }}
                      type="text"
                      placeholder="Subject"
                      name="user_subject"
                    />
                    <StyledError darkMode={darkMode ? true : false}>
                      {" "}
                      {touched.user_subject && errors.user_subject && (
                        <>
                          <TiWarningOutline size={20} />
                          {errors.user_subject}
                        </>
                      )}
                    </StyledError>
                    <Field
                      style={{
                        backgroundColor: darkMode && "#333",
                        color: darkMode && "#fff",
                        borderColor: darkMode && "#fff",
                      }}
                      type="text"
                      placeholder="Email"
                      name="user_email"
                    />
                    <StyledError darkMode={darkMode ? true : false}>
                      {touched.user_email && errors.user_email && (
                        <>
                          <TiWarningOutline size={20} /> {errors.user_email}
                        </>
                      )}
                    </StyledError>
                    <Field
                      style={{
                        backgroundColor: darkMode && "#333",
                        color: darkMode && "#fff",
                        borderColor: darkMode && "#fff",
                      }}
                      rows="4"
                      cols="50"
                      placeholder="Message"
                      name="message"
                      as="textarea"
                    />
                    <StyledError darkMode={darkMode ? true : false}>
                      {" "}
                      {touched.message && errors.message && (
                        <>
                          <TiWarningOutline size={20} />
                          {errors.message}
                        </>
                      )}
                    </StyledError>
                    <ButtonSection>
                      <Button type="submit">
                        Submit
                        {loading ? (
                          <SpinnerRoundFilled
                            size={20}
                            thickness={100}
                            speed={100}
                            color="#fff"
                          />
                        ) : (
                          <RiSendPlane2Fill />
                        )}
                      </Button>
                      {done && (
                        <Rotate top left>
                          <span
                            style={{
                              backgroundColor: darkMode && "#222",
                              color: darkMode && "#fff",
                            }}
                          >
                            Message sent!
                          </span>
                        </Rotate>
                      )}
                    </ButtonSection>
                  </Fade>
                </DivForm>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
