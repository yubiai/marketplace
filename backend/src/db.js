const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

if (!process.env.MONGODB_URL) {
  console.log(
    "Setee la variable de entorno MONGODB_URL",
    process.env.MONGODB_URL
  );
  process.exit(1);
}

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  })
  .then(function () {
    console.log("Conectado a la Base de Datos con éxito!");
  })
  .catch(function (err) {
    console.log("Ups! Hubo un error al conectar con la base de datos!");
    console.log(err.message);
  });

module.exports = mongoose.connection;
