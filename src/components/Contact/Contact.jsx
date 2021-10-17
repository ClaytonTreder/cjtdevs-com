import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import loading from "../../content/images/misc/loader.gif";
import ReCaptchaV2 from "react-google-recaptcha";
import contact from "modules/contact";

require("dotenv").config();

function Contact() {
  const [state, setState] = useState({
    from: null,
    subject: null,
    message: null,
    success: null,
    loading: false,
    token: null,
    contact: null,
  });
  useEffect(() => {
    contact.getContact({ id: "contact" }).then((contact) => {
      setState((prevState) => ({
        ...prevState,
        contact: contact.data ? contact.data : null,
      }));
    });
  }, [state.success, state.loading]);

  const reRef = useRef(ReCaptchaV2);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      {state.contact ? (
        <div class="fade-in-text col-md-12 px-0">
          <div class="d-flex justify-content-center mb-3 mt-2">
            <h4>{state.contact.title}</h4>
            {state.loading === true ? (
              <img
                src={loading}
                alt="loading"
                className="img-fluid float col-2"
                style={{ position: "fixed", zIndex: "999" }}
              />
            ) : null}
          </div>
          <form
            class="col-md-4 offset-md-4"
            id="contactForm"
            onSubmit={handleSubmit(async (formData) => {
              setState((prevState) => ({ ...prevState, loading: true }));

              const token = await reRef.current.getValue();
              reRef.current.reset();

              const response = await fetch("/api/mailer/mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  to: "info@cjtdevs.com",
                  subject: `From: ${formData.email} - Subject: ${formData.subject}`,
                  text: formData.message,
                  token: token,
                }),
              });

              setState((prevState) => ({
                ...prevState,
                loading: false,
                success: response.status,
              }));
            })}
          >
            <div className="form-row">
              <input
                name="email"
                type="text"
                className="form-control col-12"
                placeholder={state.contact.placeholder.contact}
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
                {errors.email?.type === "pattern" &&
                  "Please provide a valid email"}
              </div>
            </div>
            <div className="form-row">
              <input
                name="subject"
                type="text"
                className="form-control my-1 col-12"
                {...register("subject", { required: true })}
                placeholder={state.contact.placeholder.subject}
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
                placeholder={state.contact.placeholder.message}
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    message: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-row justify-content-center mt-1">
              <ReCaptchaV2
                ref={reRef}
                sitekey={process.env.REACT_APP_RE_SITE_KEY}
                onChange={(token) => {
                  setState((currentForm) => {
                    return { ...currentForm, token };
                  });
                }}
                onExpired={() => {
                  setState((currentForm) => {
                    return { ...currentForm, token: null };
                  });
                }}
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
                        {state.contact.respone_messages.success}
                      </label>
                    ),
                    401: (
                      <label className="alert-danger">
                        {state.contact.respone_messages.recapthca}
                      </label>
                    ),
                    500: (
                      <label className="alert-danger">
                        {state.contact.respone_messages.failed}
                      </label>
                    ),
                  }[state.success]
                : null}
            </div>
          </form>
          <div class="text-center mt-5">
            <p>
              {state.contact.email_info + " "}
              <a href={"mailto:" + state.contact.email.info}>
                {state.contact.email.info}
              </a>
            </p>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
}
export default Contact;
