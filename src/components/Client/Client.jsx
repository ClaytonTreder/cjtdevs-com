import "./Client.css";
import Picture from "components/Picture/Picture";
export default function Client(params) {
  return (
    <div className="client">
      {params.link ? (
        <a href={params.link}>
          <span>{params.title}</span>
          <Picture
            src={params.src}
            alt={params.alt}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
      ) : (
        <div>
          <span>{params.title}</span>
          <Picture
            src={params.src}
            alt={params.alt}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      )}

      <span className="testimonial">
        <em>{params.quote}</em>
        <span> {params.author ? ` - ${params.author}` : null}</span>
      </span>
    </div>
  );
}
