import { useEffect, useState } from "react";
import loading from "../../content/images/misc/loader.gif";
const axios = require("axios");

function Testimonial(props) {
  const [state, setState] = useState({
    showForm: null,
    name: null,
    review: null,
    success: null,
    loading: false,
    profileId: props.profileId,
  });
  useEffect(() => {}, [state.showForm, state.success, state.loading]);

  function AddTestimonial(e) {
    e.preventDefault();
    document
      .querySelector("#divTestimonalAdd")
      .setAttribute("style", "display:block;");
  }

  function SendTestimonial(e) {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    axios({
      url: "/api/testimonial/",
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: {
        profileId: state.profileId,
        name: state.name,
        review: state.review,
      },
    })
      .then((info) => {
        setState((prevState) => ({
          ...prevState,
          success: true,
          loading: false,
        }));
      })
      .catch((err) => {
        setState((prevState) => ({
          ...prevState,
          success: false,
          loading: false,
        }));
      });
  }

  return (
    <div className="text-center mt-5">
      {" "}
      <div className="form-row ">
        <h5 className="col-md-12">
          <u>Have you worked with me before?</u>
        </h5>
        {state.loading === true ? (
          <img
            src={loading}
            alt="loading"
            className="img-fluid float col-2"
            style={{ position: "fixed", zIndex: "999" }}
          />
        ) : (
          ""
        )}
      </div>
      <div class="form-row">
        <p className="col-md-12">
          Click{" "}
          <u>
            <a href="#" onClick={AddTestimonial}>
              here
            </a>
          </u>{" "}
          to let us know how your experience was.
        </p>
      </div>
      <div id="divTestimonalAdd" class="form-row " style={{ display: "none" }}>
        <div className="col-md-4 offset-md-4">
          <div class="form-row">
            <div class="col-10 offset-1">
              <div class="form-row">
                <input
                  type="text"
                  placeholder="Name *"
                  className="form-control"
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                />
              </div>

              <div class="form-row my-1">
                <textarea
                  rows="3"
                  placeholder="Message"
                  className="form-control"
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      review: e.target.value,
                    }))
                  }
                />
              </div>
              <div class="form-row">
                <input
                  type="button"
                  onClick={SendTestimonial}
                  value="Send"
                  className="col-4 offset-4"
                />
              </div>
              <div className="form-row ">
                {state.success !== null ? (
                  state.success === false ? (
                    <label id="failMessage" className=" offset-2 col-8 alert-danger">
                      Failure. Please email us if the issue presists.
                    </label>
                  ) : (
                    <label id="successMessage" className=" offset-2 col-8 alert-success">
                      Success! We'll review your submission and contact you to thank you!
                    </label>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
