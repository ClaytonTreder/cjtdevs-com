import "./Footer.css";
import fbImg from "../../content/images/misc/img-FB.png";
import mail from "../../content/images/misc/mail.png";
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
            Contact
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
            <img src={fbImg} />
            Give us a like
            <hr />
          </a>
          <a href="mailto:info@cjtdevs.com">
            <img src={mail} />
            info@cjtdevs.com
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
