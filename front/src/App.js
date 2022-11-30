import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import CreateBlog from "./components/CreateBlog";
import EditBlog from "./components/EditBlog";
import ShowBlogs from "./components/ShowBlogs";
import ShowBlog from "./components/ShowBlog";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Container fluid className="bg-light text-dark p-0">
      <BrowserRouter>
        <NavBar />
        <br />
        <Col sm="10" lg="8" className="m-auto">
          <Routes>
            <Route path="/" element={<ShowBlogs />} />
            <Route path="/:id" element={<ShowBlog />} />
            <Route path="/edit/:id" element={<EditBlog />} />
            <Route path="/create" element={<CreateBlog />} />
          </Routes>
        </Col>
      </BrowserRouter>
    </Container>
  );
}
