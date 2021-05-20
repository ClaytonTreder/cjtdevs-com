import React from "react";

function Project(props) {
  return (
    <React.Fragment>
      <div class="d-flex justify-content-center mb-5 mt-2">
        <div class="col-md-5">
          <a href={props.href} target="_blank" rel="noreferrer">
            <h5>{props.title}</h5>
            <img
              alt={`${props.title} project`}
              class="img-fluid"
              style={{ borderRadius: "5%" }}
              src={props.img}
            />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Project;
