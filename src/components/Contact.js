import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import loading from "../content/images/misc/loader.gif";

const axios = require("axios");

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
      subject: " From: " + state.from + " - Subject: " + state.subject,
      text: state.text,
    };
  }

  function sendEmail() {
    displayLoading(true);
    axios({
      method: "POST",
      url: "https://mailer.cjtdevs.com/mail",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://cjtdevs.com",
      },
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
        <h4>Contact</h4>
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
            placeholder="Email *"
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
            placeholder="Subject"
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
            placeholder="Message"
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
                Message failed. Ensure you are on secure connection
                ('https://'), try again shortly or please email us at the email
                below.
              </label>
            ) : (
              <label id="successMessage" className="alert-success">
                Talk to you soon!
              </label>
            )
          ) : (
            ""
          )}
        </div>
      </div>
      <div class="text-center mt-5">
        <p>
          You can also reach out through Email:{" "}
          <a href="mailto:info@CJTDevs.com">info@CJTDevs.com</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
