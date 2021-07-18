import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import loading from "../../content/images/misc/loader.gif";
import text from "../text.json";
import ReCaptchaV2, { ReCAPTCHA } from "react-google-recaptcha";
import { flushSync } from "react-dom";

const axios = require("axios");

require("dotenv").config();

function Contact() {
  const [state, setState] = useState({
    from: null,
    subject: null,
    text: null,
    success: null,
    loading: false,
    token: null,
    serverErrors: [],
  });
  useEffect(() => {}, [state.success, state.loading]);
  const reRef = useRef(ReCaptchaV2);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleToken = (token) => {
    setState((currentForm) => {
      return { ...currentForm, token };
    });
  };
  const handleExpire = () => {
    setState((currentForm) => {
      return { ...currentForm, token: null };
    });
  };
  function setMessage(status) {
    setState((prevState) => ({
      ...prevState,
      success: status,
    }));
    setSubmitting(false);
  }

  function setSubmitting(show) {
    setState((prevState) => ({
      ...prevState,
      loading: show,
    }));
  }
  return (
    <div class="col-md-12 px-0">
      <div class="d-flex justify-content-center mb-5 mt-2">
        <h4>{text.contact.title}</h4>
        {state.loading === true ? (
          <img
            src={loading}
            alt="loading"
            className="img-fluid float col-2"
            style={{ position: "fixed", zIndex: "999" }}
          />
        ) : (
          ""
        )}
      </div>
      <form
        class="col-md-4 offset-md-4"
        id="contactForm"
        onSubmit={handleSubmit(async (formData) => {
          setSubmitting(true);
          setState((prevState) => ({
            ...prevState,
            serverErrors: [],
          }));

          const token = await reRef.current.getValue();
          reRef.current.reset();

          const response = await fetch("/api/mailer/mail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              to: "info@cjtdevs.com",
              subject: `From: ${formData.email} - Subject: ${formData.subject}`,
              text: formData.message,
              token: token,
            }),
          });
          setSubmitting(false);
          setMessage(response.status);
        })}
      >
        <div className="form-row">
          <input
            name="email"
            type="text"
            className="form-control col-12"
            placeholder={text.contact.placeholder.contact}
            {...register("email", {
              required: true,
              pattern:
                /^[A-Za-z0-9\.]{1,}@{1}[A-Za-z0-9]{2,}\.{1}[A-Za-z0-9]{2,5}$/gm,
            })}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                from: e.target.value,
              }))
            }
          />
          <div className="alert-danger">
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" && "Please provide a valid email"}
          </div>
        </div>
        <div className="form-row">
          <input
            name="subject"
            type="text"
            className="form-control my-1 col-12"
            {...register("subject", { required: true })}
            placeholder={text.contact.placeholder.subject}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                subject: e.target.value,
              }))
            }
          />
          <div className="alert-danger">
            {errors.subject?.type === "required" && "Subject is required"}
          </div>
        </div>
        <div className="form-row">
          <textarea
            name="message"
            className="form-control col-12"
            rows="5"
            placeholder={text.contact.placeholder.message}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                text: e.target.value,
              }))
            }
          />
        </div>
        <div className="form-row justify-content-center mt-1">
          <ReCaptchaV2
            ref={reRef}
            sitekey={process.env.REACT_APP_RE_SITE_KEY}
            onChange={handleToken}
            onExpired={handleExpire}
          />
        </div>
        <div className="form-row">
          <input
            type="submit"
            disabled={state.loading}
            className="offset-4 mt-2 col-4"
            value="Send"
          />
        </div>
        <div className="text-center">
          {state.success !== null
            ? {
                200: (
                  <label className="alert-success">
                    {text.contact.respone_messages.success}
                  </label>
                ),
                401: (
                  <label className="alert-danger">
                    {text.contact.respone_messages.recapthca}
                  </label>),
                500: (
                  <label className="alert-danger">
                    {text.contact.respone_messages.failed}
                  </label>
                ),
              }[state.success]
            : ""}
        </div>
      </form>
      <div class="text-center mt-5">
        <p>
          {text.contact.email_info + " "}
          <a href={"mailto:" + text.email.info}>{text.email.info}</a>
        </p>
      </div>
    </div>
  );
}
export default Contact;
