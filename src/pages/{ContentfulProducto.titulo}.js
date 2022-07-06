import React from "react";
import { graphql } from "gatsby";

const ProductTemplate = ({data}) =>{

    const {titulo} = data.contentfulProducto

    return(
        <div>
            <h1>{titulo}</h1>
        </div>
    )
}

export const query= graphql`
query getSingleProduct($titulo:String){
    contentfulProducto(titulo:{eq:$titulo}){
        titulo
    }
}
`

export default ProductTemplate;