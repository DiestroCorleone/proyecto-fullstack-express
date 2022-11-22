import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default function ShowBlogs() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/blogs");
      setBlogs(res.data);

      // const res = await fetch("http://localhost:8000/blogs");
      // const resBlogs = await res.json();
      // setBlogs(resBlogs);
    } catch (e) {
      alert("Error getting blogs: " + e);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const deleteBlog = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/blogs/${id}`);
      console.log(res.data);
      getBlogs();
      alert("Blog deleted successfully!");
    } catch (e) {
      alert("Couldn't delete the blog: " + e);
    }
  };

  const renderBlogs = blogs.map((blog) => {
    return (
      <tr key={blog.id}>
        <td>{blog.id}</td>
        <td>{blog.title}</td>
        <td>{blog.content}</td>
        <td>
          <i className="fa fa-fw fa-edit text-info"></i>
          <i
            className="fa fa-fw fa-trash text-danger"
            onClick={() => deleteBlog(blog.id)}
          ></i>
        </td>
      </tr>
    );
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderBlogs}</tbody>
    </Table>
  );
}
