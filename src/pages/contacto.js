import React from "react";
import "./contacto.css";
import "../CSS/css-global.css";
import Layout from "../components/Layout";

export default function Contacto() {
  return (
    <Layout>
      <div className="bkgContacto">
        <div className="contactoContainer">
          <div>
            <h1>Contactanos</h1>
          </div>
          <div className="formContainer">
            <form className="formBox">
              <div className="infoInputs">
                <input type="text" className="inputstyle" placeholder="Nombre" /><br/>
                <input type="email" className="inputstyle" placeholder="Email" /><br/>
              </div>
              <textarea rows="4" className="inputstyle" placeholder="Mensaje"/><br/>
              <button type="submit" className="btnprincipal btnSubmit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
