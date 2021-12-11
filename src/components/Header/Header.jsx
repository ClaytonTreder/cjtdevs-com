import "./Header.css";
import { useEffect } from "react";
import Picture from "components/Picture/Picture";
import useSessionStorage from "hooks/useSessioStorage";

export default function Header(params) {
  const setMobileNavOpen = params.setMobileNavOpen;

  const [text, setText] = useSessionStorage("headerText");
  useEffect(() => {
    text ??
      fetch("/api/text/Header")
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
    <header>
      <div
        className="mobile-nav-icon"
        onClick={(e) => {
          setMobileNavOpen(true);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="flex-inline">
        <Picture s3ImgKey={text.pic.s3ImgKey} alt={text.pic.alt} />
        <h1 style={{ marginTop: "15px", marginLeft: "5px" }}>{text.title}</h1>
      </div>
      <div className="flex-row" style={{ marginTop: "10px" }}>
        <span>{text.subtitle}</span>
      </div>
    </header>
  ) : null;
}
