import Pdf from "../content/files/ClaytonTreder_Resume.pdf";

function ClaytonTreder() {
  return (
    <div class="col-md-11 offset-md-1">
      <div class="form-row form-group">
        <h2>Clayton Treder</h2>
      </div>
      <div class="form-row">
        <div class="col-md-6">
          <h4>
            <u>Contact</u>
          </h4>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">Email:</label>
            <label class="col-md-8">
              <a href="mailto:cjtreder@gmail.com">CJTreder@gmail.com</a>
            </label>
          </div>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">Phone:</label>
            <label class="col-md-8">
              <a href="tel:+17347878670">(734) 787-8670</a>
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <h4>
            <u>Resume</u>
          </h4>
          <div class="form-row">
            <span class="col-md-8">
              <a href={Pdf} download>
                Download
              </a>
            </span>
            <span class="col-md-8">
              <a href={Pdf} rel="noreferrer" target="_blank">
                View
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="col-md-6">
          <h4>
            <u>Employment Info</u>
          </h4>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">Current Employer:</label>
            <label class="col-md-8">McCreadie Group Inc - Ann Arbor, MI</label>
          </div>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">Title:</label>
            <label class="col-md-8">Software Developer</label>
          </div>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">Start Date:</label>
            <label class="col-md-8">September 2019</label>
          </div>
        </div>
        <div class="col-md-6">
          <h4>
            <u>Education</u>
          </h4>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">
              Highest Level of Education:
            </label>
            <label class="col-md-8">
              Associates of Computer Information Science - Programming
            </label>
          </div>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">School:</label>
            <label class="col-md-8">Schoolcraft College</label>
          </div>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">Graduation Date:</label>
            <label class="col-md-8">April 2019</label>
          </div>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="col-md-6">
          <h4>
            <u>Links</u>
          </h4>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">Github:</label>
            <label class="col-md-8">
              <a
                href="https://github.com/ClaytonTreder"
                rel="noreferrer"
                target="_blank"
              >
                https://github.com/ClaytonTreder
              </a>
            </label>
          </div>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">Linkedin:</label>
            <label class="col-md-8">
              <a
                href="https://www.linkedin.com/in/claytontreder/"
                rel="noreferrer"
                target="_blank"
              >
                https://www.linkedin.com/in/claytontreder/
              </a>
            </label>
          </div>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">Facebook:</label>
            <label class="col-md-8">
              <a
                href="https://www.facebook.com/clay.treder/"
                rel="noreferrer"
                target="_blank"
              >
                https://www.facebook.com/clay.treder/
              </a>
            </label>
          </div>
          <div class="form-row">
            <label class="font-weight-bold col-md-4">Instagram:</label>
            <label class="col-md-8">
              <a
                href="https://www.instagram.com/cjtreder/"
                rel="noreferrer"
                target="_blank"
              >
                https://www.instagram.com/cjtreder/
              </a>
            </label>
          </div>
        </div>
        <div class="col-md-6 mt-3"></div>
      </div>
    </div>
  );
}
export default ClaytonTreder;
