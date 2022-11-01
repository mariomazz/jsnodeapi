"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = require("./services/users");
const search_result_1 = require("./utils/models/search_result");
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = 80;
const HOST = "0.0.0.0";
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send();
});
app.get("/users/:id", (req, res) => {
    res.send(users_1.UsersService.getUser(+req.params.id));
});
app.get("/users", (req, res) => {
    const items = users_1.UsersService.getAll();
    var sJ = new search_result_1.SearchResult();
    Object.assign(sJ, { totalCount: items.length, items: items });
    res.send(sJ);
});
const server = app.listen(port, HOST, () => {
    console.log("SERVER ATTIVO => " + port);
});
