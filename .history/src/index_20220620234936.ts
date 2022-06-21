import express from "express";
import path from "path";

// Init
const app = express();

// Settings
app.set("port", process.env.PORT || 6668);

// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

// Routes

// Static files
app.use("/", express.static("client", { redirect: false }));
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve("client/index.html"));
});

app.get("/datos-autor", (req, res) => {
  console.log("Hola mundo");
  return res.status(200).send({
    autor: "Lynx Pardelle",
    url: "https://www.lynxpardelle.com",
  });
});

// Start Server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
