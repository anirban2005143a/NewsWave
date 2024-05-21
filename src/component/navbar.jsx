import React from "react";
import { useState, useEffect } from "react";

const navbar = (props) => {
  const [pagesize, setpagesize] = useState(25);
  const [category, setcategory] = useState("india");
  const [query, setquery] = useState("everything");
  const linkstyle = {
    color: "white",
    cursor: "pointer",
  };

  function mouseover(e) {
    e.target.style.backgroundColor = "#00046d";
  }

  function mouseleave(e) {
    e.target.style.backgroundColor = "transparent";
  }

  function changePageSize(size) {
    setpagesize(size);
    props.setpagesize(size);
    setquery("everything");
    props.setquery("everything");
  }

  function chnageCategory(input) {
    setcategory(input);
    props.setcategory(input);
    setquery("everything");
    props.setquery("everything");
  }

  function changeapi(query) {
    setquery(query);
    props.setquery(query);
    setcategory("india");
    props.setcategory("india");
  }

  function setHeading(heading){
    props.setheading(heading[0].toUpperCase() + heading.slice(1));
  }

  useEffect(() => {
    props.setnewsapi(
      `https://newsapi.org/v2/${query}?q=${category}&pageSize=${pagesize}&apiKey=215d1b8d94fd451c89a1f57a32e9f0a2`
    );
  }, [category, pagesize, query, category]);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      style={{ margin: 0, padding: 0 }}
    >
      <div
        className="container-fluid"
        style={{ backgroundColor: "#04049c" }}
      >
        <a
          className="navbar-brand"
          style={{
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "25px",
          }}
          href="/"
        >
          NewsWave
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              onClick={() => {
                chnageCategory("india");
                setHeading("Home")
              }}
            >
              <a
                class="nav-link active"
                className="nav-link active"
                aria-current="page"
                style={linkstyle}
                onMouseOver={mouseover}
                onMouseLeave={mouseleave}
              >
                Home
              </a>
            </li>

            <li
              className="nav-item"
              onClick={() => {
                changeapi("top-headlines");
                setHeading("top-headlines")
              }}
            >
              <a
                className="nav-link active"
                aria-current="page"
                style={linkstyle}
                onMouseOver={mouseover}
                onMouseLeave={mouseleave}
              >
                Top-Headlines
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                chnageCategory("business");
                setHeading("business")
              }}
            >
              <a
                className="nav-link active"
                aria-current="page"
                style={linkstyle}
                onMouseOver={mouseover}
                onMouseLeave={mouseleave}
              >
                Business
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                chnageCategory("entertainment");
                setHeading("entertainment")
              }}
            >
              <a
                className="nav-link active"
                aria-current="page"
                style={linkstyle}
                onMouseOver={mouseover}
                onMouseLeave={mouseleave}
              >
                Entertainment
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                chnageCategory("health");
                setHeading("health")
              }}
            >
              <a
                className="nav-link active"
                aria-current="page"
                style={linkstyle}
                onMouseOver={mouseover}
                onMouseLeave={mouseleave}
              >
                Health
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                chnageCategory("science");
                setHeading("science")
              }}
            >
              <a
                className="nav-link active"
                aria-current="page"
                style={linkstyle}
                onMouseOver={mouseover}
                onMouseLeave={mouseleave}
              >
                Science
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                chnageCategory("sports");
                setHeading("sports")
              }}
            >
              <a
                className="nav-link active"
                aria-current="page"
                style={linkstyle}
                onMouseOver={mouseover}
                onMouseLeave={mouseleave}
              >
                Sports
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                chnageCategory("technology");
                setHeading("technology")
              }}
            >
              <a
                className="nav-link active"
                aria-current="page"
                style={linkstyle}
                onMouseOver={mouseover}
                onMouseLeave={mouseleave}
              >
                Technology
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "#04049c", border: "none" }}
          >
            Page-Content
          </button>
          <ul class="dropdown-menu" style={{ backgroundColor: "#04049c" }}>
            <li
              name="20"
              onMouseOver={mouseover}
              onMouseLeave={mouseleave}
              onClick={() => {
                changePageSize(20);
              }}
            >
              <a style={linkstyle} class="dropdown-item">
                20
              </a>
            </li>
            <li
              name="50"
              onMouseOver={mouseover}
              onMouseLeave={mouseleave}
              onClick={() => {
                changePageSize(50);
              }}
            >
              <a style={linkstyle} class="dropdown-item">
                50
              </a>
            </li>
            <li
              name="70"
              onMouseOver={mouseover}
              onMouseLeave={mouseleave}
              onClick={() => {
                changePageSize(70);
              }}
            >
              <a style={linkstyle} class="dropdown-item">
                70
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
