import "./NewsLetter.css";
import { useState } from "react";
import axios from "axios";
export default function NewsLetter() {
  const [email, setEmail] = useState();
  const [regexFail, setRegexFail] = useState();
  const [resStatus, setResStatus] = useState();

  const handleClick = () => {
    if (
      /^[A-Za-z0-9]{1,}@{1}[A-Za-z0-9]{2,}\.{1}[A-Za-z0-9]{2,5}$/gm.test(
        email
      ) === true
    ) {
      axios
        .post(
          "/api/newsletter",
          {
            email: email,
            subscribed: true,
            addedOn: new Date(),
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          if (res.status === 200) {
            setResStatus("Success!");
          } else {
            setResStatus("ERROR: An issue occured please try again later.");
          }
        })
        .catch(() =>
          setResStatus(
            "ERROR: An issue occured please try again later. You may also already be subscribed."
          )
        );
    } else {
      setRegexFail(true);
      setResStatus(null);
    }
  };

  return (
    <div className="newsletter">
      <div>Sign up for our news letter:</div>
      <div>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            setRegexFail(false);
          }}
          placeholder="Email Address*"
          type="text"
        />
        <button onClick={handleClick}>Submit</button>
      </div>
      {regexFail ? <div>Please provide a valid email</div> : null}
      {resStatus ? <div>{resStatus}</div> : null}
    </div>
  );
}
