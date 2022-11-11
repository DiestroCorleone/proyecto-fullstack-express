import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes.js"; // Se recomienda incluir la extensión del archivo.

const app = express(); // Separamos todos los métodos de express para su posterior uso.
const port = 8000;

app.use("/blogs", blogRoutes);

app.use(cors());
app.use(express.json()); // Ambas son configuraciones que hacen que la información que viaje, la modela y configura.

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
