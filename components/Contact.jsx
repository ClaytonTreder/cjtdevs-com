import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCaptchaV2 from "react-google-recaptcha";
import styles from "../styles/components/Contact.module.css";
import Picture from "./Picture";
import { attributes } from "!!frontmatter-markdown-loader!../content/components/contact.md";

function Contact() {
  const text = attributes;
  const [state, setState] = useState({
    from: null,
    subject: null,
    message: null,
    success: null,
    loading: undefined,
    token: null,
    contact: null,
  });

  const reRef = useRef(ReCaptchaV2);

  const formSubmit = async (formData) => {
    setState((prevState) => ({ ...prevState, loading: true }));

    const token = await reRef.current.getValue();
    reRef.current.reset();

    const response = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "info@cjtdevs.com",
        subject: `From: ${formData.email} - Subject: ${formData.subject}`,
        text: state.message,
        token: token,
      }),
    });
    console.log(response);

    setState((prevState) => ({
      ...prevState,
      loading: false,
      success: response.status,
    }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.contactForm}>
      <div>
        <form id="contactForm" onSubmit={handleSubmit(formSubmit)}>
          <div className="flex-row">
            <input
              name="email"
              type="text"
              placeholder={text.email}
              {...register("email", {
                required: true,
                pattern:
                  /^[A-Za-z0-9]{1,}@{1}[A-Za-z0-9]{2,}\.{1}[A-Za-z0-9]{2,5}$/gm,
              })}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  from: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex-row">
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" && "Please provide a valid email"}
          </div>
          <div className="flex-row">
            <input
              name="subject"
              type="text"
              {...register("subject", { required: true })}
              placeholder={text.subject}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  subject: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex-row">
            {errors.subject?.type === "required" && "Subject is required"}
          </div>
          <div className="flex-row">
            <textarea
              name="message"
              rows="5"
              placeholder={text.message}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  message: e.target.value,
                }))
              }
              value={state.message ?? ""}
            />
          </div>
          <div className={`${styles.recap} flex-row`}>
            <ReCaptchaV2
              ref={reRef}
              sitekey={process.env.NEXT_PUBLIC_RE_SITE_KEY}
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
          <div className={`${styles.submit} flex-row`}>
            <input type="submit" disabled={state.loading} value="Send" />
          </div>
          <div className="text-center">
            {state.success !== null
              ? {
                  200: (
                    <label style={{ color: "green" }}>
                      {text.response.success}
                    </label>
                  ),
                  401: (
                    <label style={{ color: "red" }}>
                      {text.response.recaptcha}
                    </label>
                  ),
                  500: (
                    <label style={{ color: "red" }}>
                      {text.response.error}
                    </label>
                  ),
                }[state.success]
              : null}
          </div>
        </form>
        <div className="flex-row">
          {state.loading ? (
            <Picture
              src={"images/loader.gif"}
              alt="loading"
              style={{
                width: "5rem",
                position: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Contact;
