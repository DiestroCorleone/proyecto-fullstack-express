import express from "express";

const app = express(); // Separamos todos los métodos de express para su posterior uso.
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/contacto", (req, res) => {
  //Podemos definir rutas desde el primer parámetro.
  res.send("Página de contacto!");
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
