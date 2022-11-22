import express from "express";
import {
  getAllBlogs,
  getBlog,
  deleteBlog,
  getBlogProfe,
  createBlog,
  updateBlog,
} from "../controllers/blogController.js";

const router = express.Router(); // Guardamos todos los métodos de Router (GET, POST, PUT, DELETE).

router.get("/", getAllBlogs); // La barra sola es el index.
router.get("/:id", getBlog); // Agregamos el parámetro del request que tomará el ID del blog.
router.get("/blog-profe/:id", getBlogProfe); // Usa el findAll() con parámetro, no tan eficiente como findOne().
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
