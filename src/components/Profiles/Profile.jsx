import { useParams } from "react-router";
import profile from "modules/profile";
import functions from "modules/functions";
import { useEffect, useState } from "react";
import Resume from "content/files/ClaytonTreder_Resume.pdf"

function Profile() {
  const { id } = useParams();
  const [state, setState] = useState({ profile: null });
  useEffect(() => {
    profile.GetProfile({ id }).then((profile) => {
      setState((prevState) => ({
        ...prevState,
        profile: profile ? profile.data : null,
      }));
    });
  }, []);

  return (
    <div>
      {state.profile ? (
        <div className="col-12 fade-in-text-lg">
          <div className="form-row form-group">
            <h2 className="offset-md-1 col">{state.profile.name}</h2>
          </div>
          <div className="form-row">
            <div class="col-md-11 offset-md-1 ">
              <div class="form-row">
                <div class="col-md-6">
                  <h4>
                    <u>{state.profile.contact.title}</u>
                  </h4>
                  <div class="form-row">
                    <label class="font-weight-bold col-md-4">Email:</label>
                    <label class="col-md-8">
                      <a href={"mailto:" + state.profile.contact.email_mailto}>
                        {state.profile.contact.email}
                      </a>
                    </label>
                  </div>
                  <div class="form-row">
                    <label class="font-weight-bold col-md-4">Phone:</label>
                    <label class="col-md-8">
                      <a href={"tel:" + state.profile.contact.phone_tel}>
                        {state.profile.contact.phone}
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
                      <a href={Resume} target="_blank">Download</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="form-row mt-3">
                <div class="col-md-6">
                  <h4>
                    <u>{state.profile.employment_info.title}</u>
                  </h4>
                  <div class="form-row">
                    <label class="font-weight-bold col-md-4">
                      Current Employer:
                    </label>
                    <label class="col-md-8">
                      {state.profile.employment_info.company}
                    </label>
                  </div>
                  <div class="form-row">
                    <label class="font-weight-bold col-md-4">Title:</label>
                    <label class="col-md-8">
                      {state.profile.employment_info.employee_title}
                    </label>
                  </div>
                  <div class="form-row">
                    <label class="font-weight-bold col-md-4">Start Date:</label>
                    <label class="col-md-8">
                      {functions.getDate(
                        state.profile.employment_info.start_date
                      )}
                    </label>
                  </div>
                </div>
                <div class="col-md-6">
                  <h4>
                    <u>{state.profile.education.title}</u>
                  </h4>
                  <div class="form-row">
                    <label class="font-weight-bold col-md-4">
                      Highest Level of Education:
                    </label>
                    <label class="col-md-8">
                      {state.profile.education.degree}
                    </label>
                  </div>
                  <div class="form-row">
                    <label class="font-weight-bold col-md-4">School:</label>
                    <label class="col-md-8">
                      {state.profile.education.school}
                    </label>
                  </div>
                  <div class="form-row">
                    <label class="font-weight-bold col-md-4">
                      Graduation Date:
                    </label>
                    <label class="col-md-8">
                      {functions.getDate(
                        state.profile.education.graduation_date
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-row mt-3">
                <div class="col-md-6">
                  <h4>
                    <u>{state.profile.links.title}</u>
                  </h4>
                  {state.profile.links.array &&
                  state.profile.links.array.length > 0
                    ? state.profile.links.array.map((val, ind) => {
                        return (
                          <div key={ind} class="form-row">
                            <label class="font-weight-bold col-md-4">
                              {val.title}
                            </label>
                            <label class="col-md-8">
                              <a
                                href={val.link}
                                rel="noreferrer"
                                target="_blank"
                              >
                                {val.link}
                              </a>
                            </label>
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default Profile;
