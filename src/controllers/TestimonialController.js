const TestimonialModel = require("../models/TestimonialModel");
const mailer = require("../modules/mailer");

exports.create = async (testimonial, callback) => {
  testimonial.live = false;
  return await TestimonialModel.create(testimonial)
    .then((testimonial) => {
      mailer.sendEMail({
        to: "info@cjtdevs.com",
        subject: `Testimonial Created - From: ${testimonial.name}`,
        text: `Testimonial for ${testimonial.profileId}:\n ${testimonial.review}`,
      });
      callback(null, testimonial);
    })
    .catch((err) => {
      callback(err, null);
    });
};
exports.read = async (query, callback) => {
  return await TestimonialModel.find(query, (err, testimonials) => {
    return callback(err, testimonials);
  });
};
