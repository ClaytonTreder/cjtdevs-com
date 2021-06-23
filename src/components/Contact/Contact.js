import { useEffect, useState } from "react";
import loading from "../../content/images/misc/loader.gif";
import text from "../text.json";

const axios = require("axios");

require("dotenv").config();

function Contact() {
  const [state, setValue] = useState({
    from: null,
    subject: null,
    text: null,
    success: null,
    loading: false,
  });
  useEffect(() => {}, [state.success, state.loading]);

  function formatBody() {
    return {
      to: "info@cjtdevs.com",
      subject: `From: ${state.from} - Subject: ${state.subject}`,
      text: state.text,
    };
  }

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": `${process.env.REACT_APP_CJTDEVSURL}`,
  };

  function sendEmail() {
    displayLoading(true);
    axios({
      method: "POST",
      url:  `${process.env.REACT_APP_MAILERCJTDEVSURL}/mail`,
      headers: headers,
      data: formatBody(),
    })
      .then(() => {
        displayMessage(true);
      })
      .catch(() => {
        displayMessage(false);
      });
  }

  function displayMessage(error) {
    setValue((prevState) => ({
      ...prevState,
      success: error,
    }));
    displayLoading(false);
  }

  function displayLoading(show) {
    setValue((prevState) => ({
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
      <div class="col-md-4 offset-md-4">
        <div className="form-row">
          <input
            type="text"
            className="form-control col-12"
            placeholder={text.contact.placeholder.contact}
            onChange={(e) =>
              setValue((prevState) => ({
                ...prevState,
                from: e.target.value,
              }))
            }
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            className="form-control my-1 col-12"
            placeholder={text.contact.placeholder.subject}
            onChange={(e) =>
              setValue((prevState) => ({
                ...prevState,
                subject: e.target.value,
              }))
            }
          />
        </div>
        <div className="form-row">
          <textarea
            className="form-control col-12"
            rows="5"
            placeholder={text.contact.placeholder.message}
            onChange={(e) =>
              setValue((prevState) => ({
                ...prevState,
                text: e.target.value,
              }))
            }
          />
        </div>
        <div className="form-row">
          <input
            type="button"
            className="offset-4 mt-2 col-4"
            onClick={sendEmail}
            value="Send"
          />
        </div>
        <div className="text-center">
          {state.success !== null ? (
            state.success === false ? (
              <label id="failMessage" className="alert-danger">
                {text.contact.respone_messages.failed}
              </label>
            ) : (
              <label id="successMessage" className="alert-success">
                {text.contact.respone_messages.success}
              </label>
            )
          ) : (
            ""
          )}
        </div>
      </div>
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
