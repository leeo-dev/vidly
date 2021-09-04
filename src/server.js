const express = require("express");
const app = express();
const PORT = 3000;
const genreRoute = require("./routes/Genres");

app.use("/api/vidly/", genreRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
