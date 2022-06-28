import React, { useState } from "react";
import "./Navbar.css";
import "../CSS/css-global.css";
import { Link } from 'gatsby';

import { StaticImage } from "gatsby-plugin-image"


function Navbar () {

  const [openHamburguer,setOpenHamburguer]=useState(true)

  return (
    <div className="navbarcontainer">      
      <nav className="navbarbox">
        <div className="logocontainer">
          <StaticImage src="http://via.placeholder.com/50x50" alt="imgplaceholder"/>
        </div>
        <div className="pagescontainer">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </nav>
  </div>
  )
}

export default Navbar;
