const express = require("express");
const routes = express.Router();

routes.get("/", (request, response) => {
  response.send("Hello World");
});
routes.post("/", (request, response) => {
  response.send("Hello World");
});
routes.get("/:id", (request, response) => {
  const id = request.params.id;
  response.send("Hello World");
});
routes.delete("/:id", (request, response) => {
  const id = request.params.id;
  response.send("Hello World");
});
routes.put("/:id", (request, response) => {
  const id = request.params.id;
  const genre = request.body;
  response.send("Hello World");
});

module.exports = routes;
