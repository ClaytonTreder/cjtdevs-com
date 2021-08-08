import { useEffect, useState } from "react";
import modConatct from "modules/contact";

function AdminContact(props) {
  const [contact, setContact] = useState(props.contact);
  const [state, setState] = useState({ res: null });
  const saveContact = () => {
    modConatct
      .putAdminContact({ id: "contact", contact: contact })
      .then((status) => {
        setState((prevState) => ({
          ...prevState,
          res: status,
        }));
      });
  };
  useEffect(() => {}, [state.res]);
  return (
    <div class="mb-5 col px-0">
      <h4>
        <u>Contact Section</u>
      </h4>
      {contact ? (
        <div className="form-row form-group">
          <div className="col-12 px-0">
            <div className="form-row form-group">
              <label className="col-4 col-form-label">
                <u>Title:</u>
              </label>
              <input
                className="col-8"
                type="text"
                value={contact.title}
                onChange={(e) => {
                  setContact((prevcontact) => ({
                    ...prevcontact,
                    title: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-row form-group">
              <label className="col-4 col-form-label">
                <u>Place Holders:</u>
              </label>
            </div>
            <div className="form-row form-group">
              <label className="offset-1 col-3 col-form-label">
                <u>Contact:</u>
              </label>
              <input
                className="col-8"
                type="text"
                value={contact.placeholder.contact}
                onChange={(e) => {
                  setContact((prevcontact) => ({
                    ...prevcontact,
                    placeholder: { contact: e.target.value },
                  }));
                }}
              />
            </div>
            <div className="form-row form-group">
              <label className="offset-1 col-3 col-form-label">
                <u>Subject:</u>
              </label>
              <input
                className="col-8"
                type="text"
                value={contact.placeholder.subject}
                onChange={(e) => {
                  setContact((prevcontact) => ({
                    ...prevcontact,
                    placeholder: { subject: e.target.value },
                  }));
                }}
              />
            </div>
            <div className="form-row form-group">
              <label className="offset-1 col-3 col-form-label">
                <u>Message:</u>
              </label>
              <input
                className="col-8"
                type="text"
                value={contact.placeholder.message}
                onChange={(e) => {
                  setContact((prevcontact) => ({
                    ...prevcontact,
                    placeholder: { message: e.target.value },
                  }));
                }}
              />
            </div>
            <div className="form-row form-group">
              <label className="col-4 col-form-label">
                <u>Email Info:</u>
              </label>
              <input
                className="col-8"
                type="text"
                value={contact.email_info}
                onChange={(e) => {
                  setContact((prevcontact) => ({
                    ...prevcontact,
                    email_info: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-row">
              <button
                className="btn btn-primary offset-4 col-3"
                onClick={saveContact}
              >
                Save
              </button>
            </div>
            <div className="form-row">
              {
                {
                  200: <span className="alert-success offset-4">Success!</span>,
                  500: (
                    <span className="alert-danger offset-4">
                      Failure, contact support
                    </span>
                  ),
                  default: null,
                }[state.res]
              }
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AdminContact;
