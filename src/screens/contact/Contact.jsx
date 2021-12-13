import ContactForm from "components/Contact/Contact";
import "./Contact.css";
import keyboard2 from "../../content/images/misc/keyboard2.png";
import { useEffect } from "react";
import useSessionStorage from "hooks/useSessioStorage";

export default function Contact() {
  const [text, setText] = useSessionStorage("contactText");
  useEffect(() => {
    text ??
      fetch("/api/text/Contact")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setText(() => data.content);
        })
        .catch((err) => {
          console.log(err);
        });
  });
  return text ? (
    <div className="contact">
      <img src={keyboard2} alt="keyboard" className="bg-img" />
      <title>
        <h2>
          <u>{text.title}</u>
        </h2>
      </title>
      <div className="subtitle">
        <span style={{ fontSize: "large" }}>​​{text.subtitle}</span>
      </div>
      <div className="subtitle">
        <span style={{ fontSize: "medium" }}>{text.infoText}</span>
      </div>
      <hr />
      <section>
        <div className="from-section">
          <ContactForm />
        </div>
      </section>
    </div>
  ) : (
    <div style={{ height: "100vh" }}> </div>
  );
}
