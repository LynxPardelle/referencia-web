import express from "express";

// Init
const app = express();

// Settings
app.set("port", 6668);

// Middlewares

// Routes

// Static files

// Start Server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("")}`);
});
