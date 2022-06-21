import mongoose from "mongoose";
export interface MainSection extends mongoose.Document {
  title: String;
  text: String;
  titleColor: String;
  textColor: String;
  linkColor: String;
  bgColor: String;
}
export default mongoose.model<MainSection>(
  "MainSection",
  new mongoose.Schema({
    title: String,
    text: String,
    titleColor: String,
    textColor: String,
    linkColor: String,
    bgColor: String,
  })
);
