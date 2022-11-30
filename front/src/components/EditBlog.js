import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EditBlog(props) {
  const [blogToEdit, setBlogToEdit] = useState({ title: "", content: "" });

  const { id } = useParams();

  const navigate = useNavigate();

  const getBlogById = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/blogs/${id}`);
      setBlogToEdit({ title: res.data.title, content: res.data.content });
    } catch (e) {
      alert("Error getting blogs: " + e);
    }
  };

  useEffect(() => {
    getBlogById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setBlogToEdit((prevBlogToEdit) => {
      return { ...prevBlogToEdit, [name]: value };
    });
  };

  const editBlog = async () => {
    try {
      await axios.put(`http://localhost:8000/blogs/${id}`, {
        title: blogToEdit.title,
        content: blogToEdit.content,
      });
      setBlogToEdit({ title: "", content: "" });
      alert("blog edited successfully!");
      navigate("/");
    } catch (e) {
      alert(`Couldn't edit blog, please try again: ${e}`);
    }
  };

  return (
    <Col xs={10} lg={10} className="m-auto">
      <h1>edit a blog</h1>
      <Form>
        {/* Blog Title */}
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>blog title</Form.Label>
          <Form.Control
            type="text"
            // placeholder="enter a cool title..."
            name="title"
            value={blogToEdit.title}
            onChange={onChange}
            required
          ></Form.Control>
        </Form.Group>
        {/* Blog Content */}
        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>blog content</Form.Label>
          <Form.Control
            as="textarea"
            // placeholder="awsome blog content..."
            style={{ height: "200px" }}
            name="content"
            value={blogToEdit.content}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Button className="bg-dark text-light" onClick={() => editBlog()}>
          save edited blog
        </Button>
      </Form>
    </Col>
  );
}
