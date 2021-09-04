const mongoose = require("mongoose");
mongoose
  .connect("mongoose://localhost:27017/vidly")
  .then(() => console.log("Banco conectado com sucesso"))
  .catch((err) =>
    console.log("Erro ao se conectar com o Banco de Dados: ", err)
  );
module.exports = mongoose;
