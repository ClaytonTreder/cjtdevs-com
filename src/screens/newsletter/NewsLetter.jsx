import { Fragment } from "react";
import "./NewsLetter.css";
import NewsLetterForm from "../../components/NewsLetter/NewsLetter";
export default function NewLetter() {
  return (
    <Fragment>
      <div className="newsletter-page">
        <div className='title'>
          <h2>News Letter</h2>
        </div>
      </div>
      <NewsLetterForm />
    </Fragment>
  );
}
