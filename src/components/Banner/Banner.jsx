import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner fade-in">
      <div>
        <h3>Detroit-based software developers</h3>
        <h3>Ready to take on your next project</h3>
      </div>
      <ribbon>
        <a href="/services#site">
          {" "}
          <button>I need a website{" >"} </button>{" "}
        </a>
        <a href="/services#app">
          {" "}
          <button>I need an app{" >"} </button>{" "}
        </a>
        <a href="/services#so">
          {" "}
          <button>I need software{" >"} </button>{" "}
        </a>
      </ribbon>
    </div>
  );
}
