import React, { useContext, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Formik, Form, Field } from "formik";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { TiWarningOutline } from "react-icons/ti";
import { ThemeContext } from "../../context/context";
import { DivForm, StyledError, ButtonSection } from "./styles";

const Contact = () => {
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  setTimeout(() => {
    setDone(false);
  }, 2000);

  return (
    <div className="c" id="contact">
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
                })
                .catch((error) => {
                  console.log(error.text);
                });
            }}
          >
            {({ handleSubmit, touched, errors }) => (
              <Form onSubmit={handleSubmit}>
                <DivForm>
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
                    <button type="submit">Submit</button>
                    <span
                      style={{
                        backgroundColor: darkMode && "#222",
                        color: darkMode && "#fff",
                      }}
                    >
                      {done && "Message sent!"}
                    </span>
                  </ButtonSection>
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
