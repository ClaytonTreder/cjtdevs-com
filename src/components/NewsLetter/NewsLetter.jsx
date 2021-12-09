import "./NewsLetter.css";
import { useState } from "react";
import axios from "axios";
export default function NewsLetter() {
  const [email, setEmail] = useState();
  const [fail, setFail] = useState();

  const handleClick = () => {
    if (
      /^[A-Za-z0-9]{1,}@{1}[A-Za-z0-9]{2,}\.{1}[A-Za-z0-9]{2,5}$/gm.test(
        email
      ) === true
    ) {
      axios.post("/api/newsletter", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: {
          email: email,
          subscribed: true,
          addedOn: new Date(),
        },
      });
    } else {
      setFail(true);
    }
  };

  return (
    <div className="newsletter">
      <div>Sign up for our news letter:</div>
      <div>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            setFail(false);
          }}
          placeholder="Email Address*"
          type="text"
        />
        <button onClick={handleClick}>Submit</button>
      </div>
      {fail ? <div>Please provide a valid email</div> : null}
    </div>
  );
}
