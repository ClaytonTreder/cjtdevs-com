import "./Header.css";
import { useEffect } from "react";
import logo from "../../content/images/misc/logo.svg";
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
      <img src={logo} alt="logo" />
    </header>
  ) : null;
}
