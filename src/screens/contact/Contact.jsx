import ContactForm from "components/Contact/Contact";
import "./Contact.css";
import Picture from "components/Picture/Picture";
import { useEffect, useState } from "react";
export default function Contact() {
  const [text, setText] = useState({});
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
      <Picture
        s3ImgKey={text.pic.s3ImgKey}
        alt={text.pic.alt}
        className="bg-img"
      />
      <title>
        <h2>{text.title}</h2>
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
  ) : null;
}
