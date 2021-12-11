import "./Banner.css";

export default function Banner(props) {
  return (
    <div className="banner fade-in">
      <div>
        {props.lines.map((line) => {
          return <h3>{line}</h3>;
        })}
      </div>
      <ribbon>
        {props.buttons.map((button) => {
          return (
            <a href={button.link}>
              <button>{button.text}</button>
            </a>
          );
        })}
      </ribbon>
    </div>
  );
}
