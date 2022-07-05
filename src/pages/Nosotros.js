import React from 'react';
import "../CSS/css-global.css";
import "./nosotros.css";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";


export default function Nosotros() {
  return (
    <Layout>
      <div className='nosotrosContainer'>
        <div className='heroNosotrosContainer'>
          <div className='leftContainer'>
            <h1>Sobre Nosotros</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Blanditiis ex harum rerum eaque praesentium quod culpa. 
              Ratione mollitia veniam odio ullam. 
              Quaerat aperiam maxime, dolorem nesciunt eius cupiditate fugiat a!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Blanditiis ex harum rerum eaque praesentium quod culpa. 
              Ratione mollitia veniam odio ullam. 
              Quaerat aperiam maxime, dolorem nesciunt eius cupiditate fugiat a!
            </p>
          </div>
          <div className='rightContainer'>
            <StaticImage src="../assets/images/Mejor-jabon-en-maryland.png" alt="imgplaceholder" width={500}/>
          </div>
        </div>

        <div className='diferentesContainer'>
          <div className='diferentesLeftContainer'>
            <StaticImage src="../assets/images/Mejor-jabon-en-maryland.png" alt="imgplaceholder" width={500}/>
          </div>
          <div className='diferentesrightContainer'>
            <h2>¿Qué nos hace diferentes?</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Blanditiis ex harum rerum eaque praesentium quod culpa. 
                Ratione mollitia veniam odio ullam. 
                Quaerat aperiam maxime, dolorem nesciunt eius cupiditate fugiat a!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Blanditiis ex harum rerum eaque praesentium quod culpa. 
                Ratione mollitia veniam odio ullam. 
                Quaerat aperiam maxime, dolorem nesciunt eius cupiditate fugiat a!
              </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
