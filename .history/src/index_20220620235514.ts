import express from "express";
import path from "path";
import cors from "cors";

// Init
const app = express();

// Settings
app.set("port", process.env.PORT || 6668);

// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

// Config cabeceras y CORS
const allowedDomains = [
  "http://localhost:4200",
  "http://localhost:6668",
  "https://referencia-web.lynxpardelle.com",
  "https://referencia-web.lynxpardelle.com",
];
app.use(
  cors({
    origin: (origin, callback) => {
      // bypass the requests with no origin (like curl requests, mobile apps, etc )
      if (!origin) return callback(null, true);

      if (allowedDomains.indexOf(origin) === -1) {
        var msg = `This site ${origin} does not have an access. 
        Only specific domains are allowed to access it.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

// Routes
app.use("/api/main", main_routes);

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
