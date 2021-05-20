import Project from "./Project";
import zacevan from "../content/images/projects/zacevan-com.png";

function Main() {
  return (
    <main>
      <div class="col-sm-12 px-0">
        <div class="d-flex justify-content-center mb-5 mt-2">
          <h4>Projects</h4>
        </div>
        <div class="col-sm-12">
          <Project
            href="https://zacevan.com/"
            img={zacevan}
            title="zacevan.com"
          />
          <div class="form-row">
            <div class="col-sm-12 text-center">
              <span>
                To work with CJT Devs, please email:{" "}
                <a href="mailto:cjtdevs@gmail.com">CJTDevs@gmail.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
