import React from "react";
import "./index.css";
import "../CSS/css-global.css";
import Layout from "../components/Layout";

/* It's importing the StaticImage component from the gatsby-plugin-image plugin. */
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

import { FaPumpSoap,FaSoap } from 'react-icons/fa';
import { GiSoapExperiment } from 'react-icons/gi';




export default function Inicio() {
  return (
    <Layout>
      <div className="inicioContainer">
        <div className="heroContainer">
          <div className="infoContainer">
            <h1>
              Los mejores jabones de Maryland
            </h1>
              <p className="infoparagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel optio debitis nisi eveniet nulla sequi reprehenderit error facere ullam architecto. Sapiente praesentium, </p>
              <button className="btnprincipal">Ver productos</button>
          </div>
          <div className="imgheroContainer">
            <StaticImage src="../assets/images/Mejor-jabon-en-maryland.png" alt="imgplaceholder" width={500}/>
          </div>
        </div>

        <div className="featuresContainer">
          <div className="featuresGridContainer">
            <div className="featureOne">
              <FaPumpSoap className="featureIcon"/>
              <p><strong>Lorem Ipsum</strong></p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="featureTwo">
              <FaSoap className="featureIcon"/>
              <p><strong>Lorem Ipsum</strong></p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="featureThree">
              <GiSoapExperiment className="featureIcon"/>
              <p><strong>Lorem Ipsum</strong></p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>

        <div className="aboutContainer">
          <div className="aboutBox">
            <div className="aboutimage">
              <StaticImage src="../assets/images/Sobre-nosotros.png" alt="imgplaceholder" width={500}/>
            </div>
            <div className="aboutInfo">
              <h2>Sobre nosotros</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita dignissimos ullam eaque nostrum enim at 
                asperiores voluptate rerum. Accusamus, recusandae. Magni expedita dignissimos ullam eaque nostrum enim at 
                Totam distinctio cumque iure esse? Nam ea dolores deleniti!</p>
                <button className="btnprincipal">Ver más</button>
            </div>
          </div>
        </div>

        <div className="productsContainer">
          <div className="headerProductList">
            <div className="subtitle">
              <h2>Nuestros Jabones</h2>
            </div>
            <div>
              <Link to="/productos"><button className="btnprincipal">Ver Todos</button></Link>
            </div>
          </div>

          <div className="productListGridContainer">
            <div className="productimage">
              <StaticImage src="../assets/images/almond.png" alt="imgplaceholder" width={400}/>
              <button className="btnprincipal productbtn">Ver producto</button>
            </div>
            <div className="productimage">
              <StaticImage src="../assets/images/clarifying.png" alt="imgplaceholder" width={400}/>
              <button className="btnprincipal productbtn">Ver producto</button>
            </div>
            <div className="productimage">
              <StaticImage src="../assets/images/french.png" alt="imgplaceholder" width={400}/>
              <button className="btnprincipal productbtn">Ver producto</button>
            </div>
            <div className="productimage">
              <StaticImage src="../assets/images/seasalt.png" alt="imgplaceholder" width={400}/>
              <button className="btnprincipal productbtn">Ver producto</button>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}
