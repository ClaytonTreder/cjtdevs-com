import { useEffect, useState } from "react";
import about from "modules/about";

function About() {
  const [state, setState] = useState({
    about: null,
  });
  useEffect(() => {
    about.getAbout({ id: "about" }).then((about) => {
      setState((prevState) => ({
        ...prevState,
        about: about ? about.data : null,
      }));
    });
  }, []);
  return (
    <div className="mb-5">
      {state.about ? (
        <div className="col-md-12 px-0">
          <div className="d-flex justify-content-center mb-3 mt-2">
            <h4>{state.about.title}</h4>
          </div>
          <div className="col-md-8 px-0 offset-md-2">
            {state.about.content.map((val, i) => {
              return (
                <p key={i} className="fade-in-text">
                  {val}
                </p>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default About;
