import mongoose, { Schema } from "mongoose";
export interface MainSection extends mongoose.Document {
  title: String;
  text: String;
  files: [object | null];
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
    files: [{ type: Schema.Types.ObjectId, ref: "File" }],
    titleColor: String,
    textColor: String,
    linkColor: String,
    bgColor: String,
  })
);
