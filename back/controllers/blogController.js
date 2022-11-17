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

// Versión profe
export const getBlogProfe = async (req, res) => {
  try {
    const blog = await blogModel.findAll({ where: { id: req.params.id } }); // Al igual que en findOne, pasamos el ID como parámetro.
    if (blog) {
      res.json(blog);
    } else {
      res.json({ message: "El blog solicitado no existe" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel.destroy({ where: { id: req.params.id } });
    res.json({ message: `Registro con id ${req.params.id} eliminado!` });
  } catch (e) {
    res.json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    await blogModel.create(req.body);
    res.json({ message: "Registro creado de forma exitosa!" });
  } catch (e) {
    res.json({ message: e.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    await blogModel.create(req.body, {
      where: { id: req.params.id },
    }); // Informamos lo que queremos editar, en este caso, el body, indicando el ID en cuestión como segundo parámetro..
    res.json({ message: "Registro editado de forma exitosa!" });
  } catch (e) {
    res.json({ message: e.message });
  }
};
