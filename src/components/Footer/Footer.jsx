import "./Footer.css";
import { Fragment } from "react";
import Picture from "components/Picture/Picture";

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
            <Picture src={"images/img-FB.png"} alt="facebook" />
            Give us a like
            <hr />
          </a>
          <a href="mailto:info@cjtdevs.com">
            <Picture src={"images/mail.png"} alt="mail" />
            info@cjtdevs.com
            <hr />
          </a>
          <a href="tel:7347878670">
            <Picture src={"images/phone.png"} alt="mail" />
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
