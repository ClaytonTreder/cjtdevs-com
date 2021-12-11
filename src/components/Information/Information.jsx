import "./Information.css";
import Picture from "components/Picture/Picture";

export default function Information(props) {
  return (
    <div className="information">
      {props.info.map((info) => {
        return (
          <section>
            <Picture s3ImgKey={info.pic.s3ImgKey} alt={info.pic.alt} />
            <hr />
            <p>{info.text}</p>
          </section>
        );
      })}
    </div>
  );
}
