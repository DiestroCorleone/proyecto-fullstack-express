import db from "../database/db.js"; // Importamos la conexión.
import { DataTypes } from "sequelize"; // Método desde sequelize.

//Indicamos los tipos de dato de los campos en nuestra tabla. Primer parámetro es el nombre de nuestra tabla, luego la columna y su tipo de dato. No hacen falta el ID ni la creación o update.
const blogModel = db.define("blogs", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default blogModel;
