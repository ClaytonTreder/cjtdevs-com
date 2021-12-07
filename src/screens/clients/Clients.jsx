import Client from "components/Client/Client";
import "./Clients.css";

import zacevan from "content/images/projects/zacevan-com.png";
import cjtdevs from "content/images/projects/cjtdevs-com.png";

export default function Clients() {
  return (
    <div className="clients">
      <title>
        <h2>
          <u>Clients</u>
        </h2>
      </title>
      <div className="subtitle">
        <span style={{ fontSize: "large" }}>
          ​​Join our growing list of clients!
        </span>
      </div>
      <div className="subtitle">
        <span style={{ fontSize: "medium" }}>
          We value hard work and high preformace. Our clients agree. Check out
          our work for yourself!
        </span>
      </div>
      <hr />
      <section>
        <div className="item">
          <Client
            img={zacevan}
            alt={"zac evan"}
            title={"zacevan.com"}
            link={"https://zacevan.com/"}
            tesimonial="Clean and simple was what I asked for and that is exactly what I got. Astounding work!"
            author="Zac"
          />
        </div>
        <div className="item">
          <Client
            img={cjtdevs}
            alt={"cjt devs"}
            title={"CJTDevs.com"}
            link={"https://github.com/cjtdevs/cjtdevs-com/"}
          />
        </div>
      </section>
    </div>
  );
}
