import React from "react";
import "./Navbar.css";
import "../CSS/css-global.css";
import { Link } from 'gatsby';

function Navbar () {
  return (
    <div>      
        <div>
            <nav className="navbarcontainer">
                <div className="logocontainer">
                  <p>LOGO</p>
                </div>
                <div className="pagescontainer">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </div>

  </div>
  )
}

export default Navbar;
