import styles from "../styles/components/Client.module.css"
import Picture from "./Picture";
export default function Client(params) {
  return (
    <div className={styles.client}>
      {params.link ? (
        <a href={params.link} target="_blank" rel="noreferrer">
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

      <span className={styles.testimonial}>
        <em>{params.quote}</em>
        <span> {params.author ? ` - ${params.author}` : null}</span>
      </span>
    </div>
  );
}
