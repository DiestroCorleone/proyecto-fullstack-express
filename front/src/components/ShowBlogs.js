import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function ShowBlogs() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/blogs");
      setBlogs(res.data);
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
        <td>
          <Link to={`/${blog.id}`}>{blog.title}</Link>
        </td>
        <td>{blog.content}</td>
        <td>
          <Link to={`/edit/${blog.id}`}>
            <i className="fa fa-fw fa-edit text-info"></i>
          </Link>
          <i
            className="fa fa-fw fa-trash text-danger"
            onClick={() => deleteBlog(blog.id)}
          ></i>
        </td>
      </tr>
    );
  });

  return (
    <Col>
      <h1>all of the blogs</h1>
      <Link to="/create">
        <Button className="bg-dark text-light">
          create post{"  "}
          <i className="fa-fw	fa fa-newspaper-o text-gradient-orange"></i>
        </Button>
      </Link>
      <br />
      <br />
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
    </Col>
  );
}
