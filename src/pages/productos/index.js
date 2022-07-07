import React from 'react';
import "../../CSS/css-global.css";
import "./index.css";
import Layout from "../../components/Layout";
import { graphql,useStaticQuery } from 'gatsby';
import { GatsbyImage,getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import slugify from "slugify"


const query = graphql`
  {
    allContentfulProducto {
      nodes {
        id
        imagen {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
          description
        }
        precio
        titulo
      }
    }
  }

`


export default function Productos() {

  const data = useStaticQuery(query);
  const productoIndividual = data.allContentfulProducto.nodes
  console.log(productoIndividual);
  return (
    <Layout>
      <div className='productspageContainer'>
        <div>
          <h1>Products</h1>
        </div>
      <div className='productsGridContainer'>
      {
          productoIndividual.map(producto =>{
            const {id,titulo,precio,imagen} = producto;
            const pathToImage=getImage(imagen);
            const slug = slugify(titulo,{lower:true})
            return(
              <Link to={`/${slug}`} key={id} className="productLinkContainer">
                <GatsbyImage image={pathToImage} alt={titulo} className="productLinkImage" />
                <div className='productLinkInfo'>
                  <p className='productLinkTitle'>{titulo}</p>
                  <p className='productLinkPrice'>{precio}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
      </div>
    </Layout>
  )
}

