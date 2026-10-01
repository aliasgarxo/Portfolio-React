import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === "/";

  const scrollToSection = (id) => {
    updateExpanded(false);
    if (isMainPage) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("about")} style={{ cursor: "pointer" }}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("projects")} style={{ cursor: "pointer" }}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://blog.aliasgar.cloud"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("contact")} style={{ cursor: "pointer" }}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Nav className="d-flex align-items-center">
            <Nav.Item className="fork-btn">
              <Button
                href="https://www.linkedin.com/in/aliasgar-husain-7a3510158/"
                target="_blank"
                className="fork-btn-inner"
              >
                <FaLinkedinIn style={{ fontSize: "1.2em" }} />{" "}
                <BsPersonFillAdd style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            <Nav.Item>
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <BsSun style={{ fontSize: "1.15em" }} />
                ) : (
                  <BsMoonStarsFill style={{ fontSize: "1.05em" }} />
                )}
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
