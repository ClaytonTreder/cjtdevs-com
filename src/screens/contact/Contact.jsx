import ContactForm from "components/Contact/Contact";
import "./Contact.css";
import keyboard from "../../content/images/misc/keyboard.webp";

export default function Contact() {
  return (
    <div className="fade-in contact">
      <title>
        <h2>
          <u>Contact</u>
        </h2>
      </title>
      <div className="subtitle">
        <span style={{ fontSize: "large" }}>​​Let's talk</span>
      </div>
      <div className="subtitle">
        <span style={{ fontSize: "medium" }}>
          ​​Thanks for your interest in our services. Please fill out the email
          form, submit and we will get back to you soon.
        </span>
      </div>
      <hr />
      <section>
        <div className="from-section">
          <ContactForm />
        </div>
        <div className="img-section">
          <img
            src={keyboard}
            alt="contact"
            style={{
              paddingTop: "2%",
              paddingBottom: "2%",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>
    </div>
  );
}
