import text from "../text.json";

function About() {
  return (
    <div class="col-md-12 px-0">
      <div class="d-flex justify-content-center mb-5 mt-2">
        <h4>{text.about.title}</h4>
      </div>
      <div class="col-md-8 offset-md-2">
        {text.about.content.map((val) => {
          return <p>{val}</p>;
        })}
      </div>
    </div>
  );
}

export default About;
