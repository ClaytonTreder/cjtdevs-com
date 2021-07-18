import Project from "./Project";
import zacevan from "../../content/images/projects/zacevan-com.png";
import cjtdevs from "../../content/images/projects/cjtdevs-com.png";
import React from "react";

function Main() {
  return (
    <div>
      <div className="form-row">
        <div className="col-sm-7 px-2 offset-sm-1 mb-4">
          <small>Welcome to CJT Devs. Looking to create a new website or mobile / desktop application? You have come to the right place.
            Check out some of the recent projects completed by our devs below. If you like any of them or you would like 
            to work with us, head over to our contact page to reach us. Thanks for stopping by!
          </small>
        </div>
      </div>
      <div className="form-row">
        <div class="col-sm-12">
          <div class="d-flex justify-content-center mb-3">
            <h4>Recent Projects</h4>
          </div>
          <div class="form-row">
            <Project
              href="https://zacevan.com/"
              img={zacevan}
              title="zacevan.com"
            />
            <Project
              href="https://github.com/ClaytonTreder/cjtdevs-com/"
              img={cjtdevs}
              title="CJTDevs.com"
            />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div class="col-sm-8 offset-sm-2 text-center">
          <span>
            To work with CJT Devs, please email:{" "}
            <a href="mailto:info@CJTDevs.com">info@CJTDevs.com</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
