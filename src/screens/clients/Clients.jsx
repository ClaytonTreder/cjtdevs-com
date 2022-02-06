import Client from "components/Client/Client";
import "./Clients.css";
import { attributes } from "../../content/pages/clients.md";
import Picture from "components/Picture/Picture";

export default function Clients() {
  const text = attributes;
  return (
    <div className="clients">
      <Picture src={text.background} alt="background" className="bg-img" />
      <title>
        <h2>{text.title}</h2>
      </title>
      <div className="subtitle">
        <span style={{ fontSize: "large" }}>{text.subtitle}</span>
      </div>
      <div className="subtitle">
        <span style={{ fontSize: "medium" }}>{text.content}</span>
      </div>
      <hr />
      <section>
        {text.clients?.map((client, i) => {
          return (
            <div className="item" key={i}>
              <Client
                s3ImgKey={client.pic}
                title={client.link.title}
                link={client.link.link}
                quote={client.quote.testimonial}
                author={client.quote.author}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
