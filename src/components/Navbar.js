import React from "react";
import "./Navbar.css";
import "../CSS/css-global.css";
import { Link } from 'gatsby';


function Navbar () {


  return (
    <div className="navbarcontainer">      
      <nav className="navbarbox">
        <div className="logocontainer">
          <p>Lorena's Soaps</p>
        </div>
        <div className="pagescontainer">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/example">Example</Link>
        </div>
      </nav>
  </div>
  )
}

export default Navbar;
