import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err);
  });

const newsLetterSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  subscribed: {
    type: Boolean,
  },
  addedOn: {
    type: String,
  },
});

export default mongoose.model("newsLetter", newsLetterSchema);
