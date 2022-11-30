import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ShowBlog() {
  const [blog, setBlog] = useState({ title: "", content: "" });

  const { id } = useParams();

  const getBlogById = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/blogs/${id}`);
      setBlog({ title: res.data.title, content: res.data.content });
    } catch (e) {
      alert("Error getting blogs: " + e);
    }
  };

  useEffect(() => {
    getBlogById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <Link to={`/edit/${id}>`}>
        <Button className="bg-dark text-light">
          edit post{"  "}
          <i className="fa-fw fa fa-edit text-gradient-orange"></i>
        </Button>
      </Link>
    </div>
  );
}
