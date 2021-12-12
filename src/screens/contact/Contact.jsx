import ContactForm from "components/Contact/Contact";
import "./Contact.css";
import Picture from "components/Picture/Picture";
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
        <div className="img-section">
          <Picture
            s3ImgKey={text.pic.s3ImgKey}
            alt={text.pic.alt}
            style={text.pic.style}
          />
        </div>
      </section>
    </div>
  ) : (
    <div style={{ height: "100vh" }}> </div>
  );
}
