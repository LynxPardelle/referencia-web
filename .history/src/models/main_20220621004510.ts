import mongoose from "mongoose";

export default mongoose.model(
  "Main",
  new mongoose.Schema({
    title: String,
    welcome: String,
    logo: String,
    errorMsg: String,
    seoDesc: String,
    seoTags: String,
    SeoImg: String,
  })
);
