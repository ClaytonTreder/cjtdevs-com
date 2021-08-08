import modAbout from "modules/about";
import { useEffect, useState } from "react";

function AdminAbout(props) {
  const [state, setState] = useState({ lineOpen: false, res: null });
  const [about, setAbout] = useState(props.about);

  const addLine = () => {
    let content = about.content;
    content.push("");
    setAbout((prevState) => ({
      ...prevState,
      content: content,
    }));
    setState((prevState) => ({
      ...prevState,
      lineOpen: !state.lineOpen,
    }));
  };

  useEffect(() => {}, [state.res, about.content]);

  const saveAbout = () => {
    modAbout.putAdminAbout({ id: "about", about: about }).then((status) => {
      setState((prevState) => ({
        ...prevState,
        res: status,
      }));
    });
  };
  return (
    <div class="mb-5 col px-0">
      <h4>
        <u>About Section</u>
      </h4>
      {state ? (
        <div className="form-row">
          <div className="col-12 px-0">
            <div className="form-row">
              <label className="col-4 col-form-label">
                <u>Title:</u>
              </label>
              <input
                className="col-8"
                type="text"
                value={about.title}
                onChange={(e) => {
                  setAbout((prevState) => ({
                    ...prevState,
                    title: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-row">
              <span className="col-4 col-form-label">
                <u>Lines:</u>
                <button
                  className="btn btn-primary col-3 ml-2"
                  onClick={addLine}
                >
                  +
                </button>
              </span>
            </div>
            {about.content
              ? about.content.map((v, i) => {
                  return v !== null ? (
                    <div className="form-inline form-row">
                      <div className="px-0 offset-4 col-7">
                        <textarea
                          style={{ height: "5.4em" }}
                          className="col-12"
                          value={v}
                          onChange={(e) => {
                            let content = about.content;
                            content[i] = e.target.value;
                            setAbout((prevState) => ({
                              ...prevState,
                              content: content,
                            }));
                          }}
                        />
                      </div>
                      <button
                        className="btn btn-danger col-1"
                        onClick={() => {
                          setAbout((prevState) => ({
                            ...prevState,
                            content: about.content.filter((_, f) => f !== i),
                          }));
                        }}
                      >
                        -
                      </button>
                    </div>
                  ) : null;
                })
              : null}
            <div className="form-row">
              <button
                className="btn btn-primary offset-4 col-3"
                onClick={saveAbout}
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

export default AdminAbout;
