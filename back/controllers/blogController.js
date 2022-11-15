import blogModel from "../models/blogModel.js";

// Métodos para el CRUD.

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.findAll(); // Usamos el método de sequalize para traer toda la tabla.
    res.json(blogs); // Lo pasamos a JSON.
  } catch (error) {
    res.json({ message: error.message }); // De fallar, devolvemos un JSON con el error.
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await blogModel.findOne({ where: { id: req.params.id } }); // Pasamos como parámetro el ID en la URL.

    if (blog === null) {
      console.log(`Blog con id ${req.params.id} no encontrado`);
    } else {
      res.json(blog);
    }
  } catch (e) {
    res.json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel
      .destroy({ where: { id: req.params.id } })
      .then((res) =>
        console.log(`Blog con id ${req.params.id} eliminado correctamente.`)
      );
  } catch (e) {
    res.json({ message: error.message });
  }
};
