import mongoose from "mongoose";

const Schema = {
  title: String,
  welcome: String,
  logo: String,
  titleColor: String,
  textColor: String,
  linkColor: String,
  bgColor: String,
  errorMsg: String,
  seoDesc: String,
  seoTags: String,
  SeoImg: String,
};

export interface Main extends mongoose.Document {
  title: String;
  welcome: String;
  logo: String;
  titleColor: String;
  textColor: String;
  linkColor: String;
  bgColor: String;
  errorMsg: String;
  seoDesc: String;
  seoTags: String;
  SeoImg: String;
}

export default mongoose.model(
  "Main",
  new mongoose.Schema({
    title: String,
    welcome: String,
    logo: String,
    titleColor: String,
    textColor: String,
    linkColor: String,
    bgColor: String,
    errorMsg: String,
    seoDesc: String,
    seoTags: String,
    SeoImg: String,
  })
);
