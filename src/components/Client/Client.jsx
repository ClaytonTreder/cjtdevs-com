import "./Client.css";

export default function Client(params) {
  return (
    <div className="client">
      {params.link ? (
        <a href={params.link}>
          <span>{params.title}</span>
          <img
            src={params.img}
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
          <img
            src={params.img}
            alt={params.alt}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      )}

      <span className="testimonial">
        <em>{params.tesimonial}</em>
        <span> {params.author ? ` - ${params.author}` : null}</span>
      </span>
    </div>
  );
}
