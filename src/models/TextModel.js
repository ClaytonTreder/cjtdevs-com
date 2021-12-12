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

const textSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  content: {},
});

export default mongoose.model("Text", textSchema);
