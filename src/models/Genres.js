const mongoose = require("../db/config");

const genre = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
});

const Genre = mongoose.model("Genre", genre);
module.exports = Genre;
