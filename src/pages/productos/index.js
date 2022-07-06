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
  allContentfulJabonProductoIndividual {
    nodes {
      id
      titulo
      precio
      imagenDelProducto {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
  }
}
`


export default function Productos() {

  const data = useStaticQuery(query);
  const productoIndividual = data.allContentfulJabonProductoIndividual.nodes
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
            const {id,titulo,precio,imagenDelProducto} = producto;
            const pathToImage=getImage(imagenDelProducto);
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

