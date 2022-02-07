import ContactForm from "components/Contact/Contact";
import "./Contact.css";
import Picture from "components/Picture/Picture";
import { attributes } from "../../content/pages/contact.md";
export default function Contact() {
  const text = attributes;
  return (
    <div className="contact">
      <Picture src={text.background} alt="background" className="bg-img" />
      <title>
        <h2>{text.title}</h2>
      </title>
      <div className="subtitle">
        <span style={{ fontSize: "large" }}>​​{text.subTitle}</span>
      </div>
      <div className="subtitle">
        <span style={{ fontSize: "medium" }}>{text.content}</span>
      </div>
      <hr />
      <section>
        <div className="form-section">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
