import { useParams } from "react-router";
import text from "components/text.json";

function Profile() {
  const { id } = useParams();
  let profile = text.profiles.find((val) => {
    return (val.id = id);
  });
  return (
    <div>
      <div className="form-row form-group">
        <h2 className="offset-md-1 col">{profile.name}</h2>
      </div>
      <div className="form-row">
        <div class="col-md-11 offset-md-1 ">
          <div class="form-row">
            <div class="col-md-6">
              <h4>
                <u>{profile.contact.title}</u>
              </h4>
              <div class="form-row">
                <label class="font-weight-bold col-md-4">Email:</label>
                <label class="col-md-8">
                  <a href={"mailto:" + profile.contact.email_mailto}>
                    {profile.contact.email}
                  </a>
                </label>
              </div>
              <div class="form-row">
                <label class="font-weight-bold col-md-4">Phone:</label>
                <label class="col-md-8">
                  <a href={"tel:" + profile.contact.phone_tel}>
                    {profile.contact.phone}
                  </a>
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <h4>
                <u>Resume</u>
              </h4>
              <div class="form-row">
                <span class="col-md-8">
                  <a>Download</a>
                </span>
              </div>
            </div>
          </div>
          <div class="form-row mt-3">
            <div class="col-md-6">
              <h4>
                <u>{profile.employment_info.title}</u>
              </h4>
              <div class="form-row">
                <label class="font-weight-bold col-md-4">
                  Current Employer:
                </label>
                <label class="col-md-8">
                  {profile.employment_info.company}
                </label>
              </div>
              <div class="form-row">
                <label class="font-weight-bold col-md-4">Title:</label>
                <label class="col-md-8">
                  {profile.employment_info.employee_title}
                </label>
              </div>
              <div class="form-row">
                <label class="font-weight-bold col-md-4">Start Date:</label>
                <label class="col-md-8">
                  {profile.employment_info.start_date}
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <h4>
                <u>{profile.education.title}</u>
              </h4>
              <div class="form-row">
                <label class="font-weight-bold col-md-4">
                  Highest Level of Education:
                </label>
                <label class="col-md-8">{profile.education.degree}</label>
              </div>
              <div class="form-row">
                <label class="font-weight-bold col-md-4">School:</label>
                <label class="col-md-8">{profile.education.school}</label>
              </div>
              <div class="form-row">
                <label class="font-weight-bold col-md-4">
                  Graduation Date:
                </label>
                <label class="col-md-8">
                  {profile.education.graduation_date}
                </label>
              </div>
            </div>
          </div>
          <div class="form-row mt-3">
            <div class="col-md-6">
              <h4>
                <u>{profile.links.title}</u>
              </h4>
              {profile.links.array && profile.links.array.length > 0
                ? profile.links.array.map((val, ind) => {
                    return (
                      <div key={ind} class="form-row">
                        <label class="font-weight-bold col-md-4">
                          {val.title}:
                        </label>
                        <label class="col-md-8">
                          <a href={val.link} rel="noreferrer" target="_blank">
                            {val.link}
                          </a>
                        </label>
                      </div>
                    );
                  })
                : ""}
              <div class="form-row mt-3">
                <div className="col-12">
                  <h4>
                    <u>Testimonials</u>
                  </h4>
                  <div className="offset-1">
                    <p>None yet.. Leave one!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
