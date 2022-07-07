import React from "react";
import Layout from "../components/Layout";
import "./TemplateProducto.css";
import "../CSS/css-global.css";
import { graphql } from "gatsby";
import { GatsbyImage,getImage } from 'gatsby-plugin-image';


const ProductTemplate = ({data}) =>{

    const {titulo,imagen,precio} = data.contentfulProducto
    const pathToImage = getImage(imagen)

    return(
        <Layout>
            <div className="containerProducto">
            <h1>{titulo}</h1>
            <GatsbyImage image={pathToImage} alt={titulo}/>
            <p>Precio:{precio}</p>
            </div>
        </Layout>
    )
}

export const query= graphql`
query getSingleProduct($titulo:String){
    contentfulProducto(titulo:{eq:$titulo}){
        imagen {
          gatsbyImage(width: 500, layout: CONSTRAINED)
        }
        precio
        titulo
      }
}
`

export default ProductTemplate;