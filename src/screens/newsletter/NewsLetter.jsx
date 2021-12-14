import { Fragment } from "react";
import "./NewsLetter.css";
import NewsLetterForm from "../../components/NewsLetter/NewsLetter";
export default function NewLetter() {
  return (
    <Fragment>
      <div className="newsletter-page">
        <title>
          <h2>
            <u>News Letter</u>
          </h2>
        </title>
      </div>
      <NewsLetterForm />
    </Fragment>
  );
}
