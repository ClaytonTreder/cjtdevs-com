import "./Information.css";

import website from "../../content/images/misc/website.webp";
import phone from "../../content/images/misc/phone.webp";
import cloud from "../../content/images/misc/cloud.webp";

export default function Information() {
  return (
    <div className="information">
      <section>
        <img src={website} alt="computer"  />
        <hr />
        <p>
          We use the latest techniques and modern designs to build or improve
          your website. Ready for all devices, mobile friendly layouts that
          convert views to sales quickly.
        </p>
      </section>
      <section>
        <img src={phone} alt="phone" />
        <hr />
        <p>
          Today's ecosystem demands apps to give you a competitive edge. Let us
          help you build an app that exceeds expectations and does the amazing
          things you expect from a professional app.
        </p>
      </section>
      <section>
        <img src={cloud} alt="cloud" />
        <hr />
        <p>
          Our developers can create custom software solutions allowing your IT
          infrastructure to save you money. Custom software giving you
          enterprise control over your business operations.
        </p>
      </section>
    </div>
  );
}
