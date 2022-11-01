import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { UsersService } from "./services/users";
import { SearchResult } from "./utils/models/search_result";
const app = express();
dotenv.config();

const port = 80;
const HOST = "0.0.0.0";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send();
});

app.get("/users/:id", (req, res) => {
  res.send(UsersService.getUser(+req.params.id));
});

app.get("/users", (req, res) => {
  const items = UsersService.getAll();
  var sJ = new SearchResult();
  Object.assign(sJ, { totalCount: items.length, items: items });
  res.send(sJ);
});

const server = app.listen(port, HOST, () => {
  console.log("SERVER ATTIVO => " + port);
});
