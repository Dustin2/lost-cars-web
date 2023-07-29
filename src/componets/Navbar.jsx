import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.padding = "80px 10px";
      document.getElementById("logo").style.fontSize = "35px";
    }
  }
  return (
    <div className="navbar-container" id="navbar">
      <Link to="/" className="logo" id="logo">
        Lostcars
      </Link>

      <div className="navbar-rigth">
        <Link
          to="/"
          //   className={({ isActive }) => (isActive ? "active" : "disabled")}
          className="link active"
        >
          Home
        </Link>

        <Link to="/map" className="link">
          Map
        </Link>

        <Link to="/createUsers" className="link">
          Create Users
        </Link>
      </div>
    </div>
  );
}
