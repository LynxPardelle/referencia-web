import mongoose from "mongoose";
export interface File extends mongoose.Document {
  title: String;
  location: String;
  size: String;
  type: String;
  create_at: Date;
}
export default mongoose.model<File>(
  "File",
  new mongoose.Schema({
    title: String,
    location: String,
    size: String,
    type: String,
    create_at: Date,
  })
);
