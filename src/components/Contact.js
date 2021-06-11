import { useState } from "react";

const axios = require("axios");

function Contact() {
  let mailBody = {
    from: null,
    to: "info@cjtdevs.com",
    subject: null,
    text: null,
  };
  const [state, setValue] = useState(mailBody);

  function formatBody() {
    return {
      to: "info@cjtdevs.com",
      subject: " From: " + state.from + " - Subject: " + state.subject,
      text: state.text,
    };
  }

  function sendEmail() {
    axios({
      method: "POST",
      url: "https://mailer.cjtdevs.com/mail",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://cjtdevs.com",
      },
      data: state,
    });
  }
  return (
    <div class="col-md-12 px-0">
      <div class="d-flex justify-content-center mb-5 mt-2">
        <h4>Contact</h4>
      </div>
      <div class="col-md-4 offset-md-4">
        <div className="form-row">
          <input
            type="text"
            className="form-control col-12"
            placeholder="Email *"
            name="from"
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
            name="subject"
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
            name="text"
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
            className="offset-md-5 mt-2 col-md-2"
            onClick={sendEmail}
            value="Send"
          />
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
