import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const port = 80;
const HOST = "0.0.0.0";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("JS App is Running");
});

const server = app.listen(port, HOST, () => {
  console.log("SERVER ATTIVO => " + port);
});
