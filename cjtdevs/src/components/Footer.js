import fbImg from '../content/images/misc/img-FB.png'
function Footer() {
  return (
    <footer class="offset-md-2 col-md-8 px-0 mb-1">
      <div class="col-md-12 px-0">
        <hr />
        <div class="d-flex justify-content-between my-3">
          <div class="">
            <span class="mx-3">
              <a href="/">/</a>
            </span>
            <span class="mr-3">
              {" "}
              <a href="/about">About</a>
            </span>
            <span class="mr-3">
              <a href="/contact">Contact</a>
            </span>
          </div>
          <div class="mr-3">
            <a href="https://facebook.com/CJTDevelopers" rel="noreferrer" target="_blank">
              <img
                src={fbImg}
                style={{width: "1.5em"}}
                alt="facebook"
              />
            </a>
          </div>
        </div>
        <div class="d-flex justify-content-between mx-3">
          <span>CJT Devs, {new Date().getFullYear()}</span>
          <span>
            <a href="mailto:cjtdevs@gmail.com">cjtdevs@gmail.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
