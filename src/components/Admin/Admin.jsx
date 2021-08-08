import { useState, useEffect } from "react";
import about from "modules/about";
import contact from "modules/contact";
import auth from "modules/auth";

import AdminContact from "./AdminContact";
import AdminAbout from "./AdminAbout";

function Admin() {
  const [state, setState] = useState({
    contact: null,
    about: null,
    profiles: [],
  });

  useEffect(() => {
    auth.loggedIn().then((res) => {
      if (res.status === 200) {
        about.getAdminAbout({ id: "about" }).then((about) => {
          setState((prevState) => ({
            ...prevState,
            about: about ? about.data : null,
          }));
        });
        contact.getAdminContact({ id: "contact" }).then((contact) => {
          setState((prevState) => ({
            ...prevState,
            contact: contact ? contact.data : null,
          }));
        });
      }
    });
  }, []);

  return (
    <div>
      <div class="col-md-12 px-0">
        <div class="d-flex justify-content-center mt-2">
          <h4 className="mt-1">
            <u>Admin</u>
          </h4>
        </div>
        <div class="d-flex justify-content-between col-md-4 offset-4 mb-5 mt-2">
          <a href="/auth/login">Login</a>
          <a href="/auth/logout">Logout</a>
        </div>
        <div class="d-flex justify-content-between col-md-10 offset-md-1 mb-5 mt-2">
          <div class="col-6">
            {state.contact ? <AdminContact contact={state.contact} /> : null}
          </div>
          <div class="col-6">
            {state.about ? <AdminAbout about={state.about} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
