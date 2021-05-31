import Project from "./Project";
import zacevan from "../content/images/projects/zacevan-com.png";
import cjtdevs from "../content/images/projects/cjtdevs-com.png";
import serpinskis_triangle from "../content/images/projects/serpinskis-triangle.gif";

function Main() {
  return (
    <main>
      <div class="col-sm-12 px-0">
        <div class="d-flex justify-content-center mb-5 mt-2">
          <h4>Projects</h4>
        </div>
        <div class="col-12">
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
          <Project
            href="https://github.com/ClaytonTreder/Seirpinskis-Triangle"
            img={serpinskis_triangle}
            title="Seirpinski's Triangle Demo"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="col-sm-12 text-center">
          <span>
            To work with CJT Devs, please email:{" "}
            <a href="mailto:info@CJTDevs.com">info@CJTDevs.com</a>
          </span>
        </div>
      </div>
    </main>
  );
}

export default Main;
