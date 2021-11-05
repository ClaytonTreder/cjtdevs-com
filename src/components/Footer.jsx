import fbImg from "../content/images/misc/img-FB.png";
function Footer() {
  return (
    <footer className="offset-md-1 col-md-10 px-0 mb-3">
      <div className="col-md-12 px-0">
        <hr />
        <div className="col">
          <div className="form-row">
            <span>CJT Devs, {new Date().getFullYear()}</span>
          </div>
          <div className="form-row my-3">
            <span>
              <a href="mailto:info@CJTDevs.com">info@CJTDevs.com</a>
            </span>
          </div>
          <div className="form-row ">
            <a
              href="https://facebook.com/CJTDevelopers"
              rel="noreferrer"
              target="_blank"
              className="mb-4"
            >
              <img src={fbImg} style={{ width: "1.5em" }} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
