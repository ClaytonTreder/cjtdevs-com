function Contact() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      from: "info@cjtdevs.com",
      to: "info@cjtdevs.com",
      subject: "Client Sent Email --- Sending Email using Node.js",
      text: "That was easy!",
    },
  };
  function sendEmail() {
    fetch("https://mailer.cjtdevs.com/mail", requestOptions);
  }
  return (
    <div class="col-md-12 px-0">
      <div class="d-flex justify-content-center mb-5 mt-2">
        <h4>Contact</h4>
      </div>
      <div class="col-md-8 offset-md-2">
        <p>
          The best way to get in contact with us is through email:{" "}
          <a href="mailto:info@CJTDevs.com">info@CJTDevs.com</a>
        </p>
        <p>
          You can also call Clay: <a href="tel:+17347878670">(734) 787-8670</a>
        </p>
      </div>
      <input type="button" onClick={sendEmail} value="test" />
    </div>
  );
}

export default Contact;
