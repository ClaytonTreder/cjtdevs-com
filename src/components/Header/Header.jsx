import Picture from "components/Picture/Picture";
import "./Header.css";
import { attributes } from "../../content/components/header.md";

export default function Header(params) {
  const setMobileNavOpen = params.setMobileNavOpen;

  return (
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
      <Picture src={attributes.logo} alt="logo" />
    </header>
  );
}
