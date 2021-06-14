function Testimonials() {
  return (
    <div>
      <div className="form-row">
        <h4 className="col">
          <u>Have you worked with me before?</u>
        </h4>
      </div>
      <div class="form-row">
        <p className="col-md-8">
          If you enjoyed working with me or are happy with your product leave a
          testimonial to let others know! Leave your name and a few comments, it
          will be very appreciated!
        </p>
      </div>
      <div class="form-row">
        <div className="col-md-4 offset-md-2">
          <input type="text" placeholder="Name *" className="form-control" />
          <textarea
            rows="3"
            placeholder="Message"
            className="form-control my-1"
          />
          <input type="button" value="Send" className="col-3 offset-4" />
        </div>
      </div>
    </div>
  );
}
