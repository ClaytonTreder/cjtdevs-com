import "./Footer.css";
import fbImg from "../../content/images/misc/img-FB.png";
import mail from "../../content/images/misc/mail.png";
import phone from "../../content/images/misc/phone.png";
import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <footer>
        <section>
          <a href="/about">
            About Us
            <hr />
          </a>
          <a href="/services">
            Our Services
            <hr />
          </a>
          <a href="/contact">
            Contact / Feedback
            <hr />
          </a>
          <a href="/clients">
            Clients
            <hr />
          </a>
        </section>
        <section>
          <a href="/newsletter">
            Sign up for the News Letter
            <hr />
          </a>
          <a href="/blog">
            Blog
            <hr />
          </a>
        </section>
        <section>
          <a
            href="https://facebook.com/CJTDevelopers"
            rel="noreferrer"
            target="_blank"
          >
            <img src={fbImg} alt="facebook" />
            Give us a like
            <hr />
          </a>
          <a href="mailto:info@cjtdevs.com">
            <img src={mail} alt="mail" />
            info@cjtdevs.com
            <hr />
          </a>
          <a href="tel:7347878670">
            <img src={phone} alt="mail" />
            (734) 787-8670
            <hr />
          </a>
        </section>
      </footer>
      <div className="legal">
        {new Date().getFullYear()} © All rights reserved, CJT Devs
      </div>
    </Fragment>
  );
}
