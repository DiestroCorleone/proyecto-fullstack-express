import {Sequelize} from 'sequelize';

// Creamos nuestra conexión. El primer parámetro es el nombre de la base de datos, seguido por el usuario, contraseña (vacía en este caso, y luego un objeto que incluya el host, el dialecto, y el puerto (verificar en MySQL Workbench). Exportamos.
const db = new Sequelize('socialmedia', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
})

export default db;
