import React, { useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreateBlog() {
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });

  const onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setNewBlog((prevNewBlog) => {
      return { ...prevNewBlog, [name]: value };
    });
  };

  const postBlog = async () => {
    try {
      const res = await axios.post("http://localhost:8000/blogs", newBlog);
      console.log(res.data);
      setNewBlog({ title: "", content: "" });
      alert("blog created successfully!");
    } catch (e) {
      alert("Couldn't delete blog, please try again: " + e);
    }
  };

  return (
    <Col xs={10} lg={10} className="m-auto">
      <h1>create a blog</h1>
      <Form>
        {/* Blog Title */}
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>blog title</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter a cool title..."
            name="title"
            value={newBlog.title}
            onChange={onChange}
            required
          ></Form.Control>
        </Form.Group>
        {/* Blog Content */}
        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>blog content</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="awsome blog content..."
            style={{ height: "200px" }}
            name="content"
            value={newBlog.content}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Button className="bg-dark text-light" onClick={() => postBlog()}>
          create blog
        </Button>
      </Form>
    </Col>
  );
}
