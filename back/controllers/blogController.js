import blogModel from '..models/blogModel.js';

// Métodos para el CRUD.

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.findAll(); // Usamos el método de sequalize para traer toda la tabla.
    res.json(blogs); // Lo pasamos a JSON.
  } catch (error) {
    res.json({ message: error.message }); // De fallar, devolvemos un JSON con el error.
  }
};
