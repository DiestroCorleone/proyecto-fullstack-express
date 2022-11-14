import express from 'express';
import { getAllBlogs } from '../controllers/blogController.js';

const router = express.Router(); // Guardamos todos los métodos de Router (GET, POST, PUT, DELETE).

router.get('/', getAllBlogs); // La barra sola es el index.
router.get('/:id', getBlog); // Agregamos el parámetro del request que tomará el ID del blog.
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete(':id', deleteBlog);

export default router;
