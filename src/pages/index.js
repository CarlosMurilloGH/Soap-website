import React from "react";
import "./index.css";
import "../CSS/css-global.css";
import Layout from "../components/Layout";

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
            <img src="http://via.placeholder.com/360x300" alt="imgplaceholder"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
