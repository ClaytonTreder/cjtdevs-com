import Client from "components/Client/Client";
import "./Clients.css";
import { useEffect } from "react";
import useSessionStorage from "hooks/useSessioStorage";

export default function Clients() {
  const [text, setText] = useSessionStorage("clientText");
  useEffect(() => {
    text ??
      fetch("/api/text/Clients")
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
    <div className="clients">
      <title>
        <h2>
          <u>{text.title}</u>
        </h2>
      </title>
      <div className="subtitle">
        <span style={{ fontSize: "large" }}>{text.subtitle}</span>
      </div>
      <div className="subtitle">
        <span style={{ fontSize: "medium" }}>{text.infoText}</span>
      </div>
      <hr />
      <section>
        {text.clients.map((client, i) => {
          return (
            <div className="item" key={i}>
              <Client
                s3ImgKey={client.pic.s3ImgKey}
                alt={client.pic.alt}
                title={client.link.title}
                link={client.link.url}
                quote={client.quote.text}
                author={client.quote.author}
              />
            </div>
          );
        })}
      </section>
    </div>
  ) : (
    <div style={{ height: "100vh" }}></div>
  );
}
