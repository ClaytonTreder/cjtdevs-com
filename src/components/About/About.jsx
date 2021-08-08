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
    <div>
      {state.about ? (
        <div class="col-md-12 px-0">
          <div class="d-flex justify-content-center mb-5 mt-2">
            <h4>{state.about.title}</h4>
          </div>
          <div class="col-md-8 offset-md-2">
            {state.about.content.map((val) => {
              return <p className="fade-in-text">{val}</p>;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default About;
