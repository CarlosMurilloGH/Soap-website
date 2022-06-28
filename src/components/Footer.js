import React from 'react';
import "./Footer.css";
import { Link } from 'gatsby';

import { StaticImage } from "gatsby-plugin-image"


export default function Footer() {
  return (
    <footer className='footerContainer'>
        <div className='footerGridContainer'>
          <div className='columnaFooterOne'>
            <StaticImage src="http://via.placeholder.com/100x100" alt="imgplaceholder"/>
          </div>
          <div className='columnaFooterTwo'>
            <p className='footerHeader'>Links</p>
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          <div className='columnaFooterThree'>
            <p className='footerHeader'>Redes sociales</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
    </footer>
  )
}
