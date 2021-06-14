import React from "react";

function Project(props) {
  return (
    <div className="col-sm">
      <div class="d-flex justify-content-center">
        <a href={props.href} target="_blank" rel="noreferrer">
          <div class="d-flex justify-content-start ml-4 mt-2">
            <h5>{props.title}</h5>
          </div>
          <div class="d-flex justify-content-center mb-5 ">
            <div class="col-md-12">
              <img
                alt={`${props.title} project`}
                class="img-fluid"
                style={{ borderRadius: "5%" }}
                src={props.img}
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Project;
