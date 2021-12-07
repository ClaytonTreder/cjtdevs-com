import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="newsletter">
      <div>Sign up for our news letter:</div>
      <div>
        <input placeholder="Email Address*" type="text" />
        <button>Sumbit</button>
      </div>
    </div>
  );
}
