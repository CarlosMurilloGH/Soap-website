import React from 'react';
import { graphql,useStaticQuery } from 'gatsby';
import { GatsbyImage,getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

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
    <div>
      <div>
        <h1>Products page</h1>
      </div>
      <div>
        {
          productoIndividual.map(producto =>{
            const {id,titulo,precio,imagenDelProducto} = producto;
            const pathToImage=getImage(imagenDelProducto);
            return(
              <Link to={`/${titulo}`} key={id}>
                <GatsbyImage image={pathToImage} alt={titulo} />
                <p>{titulo}</p>
                <p>{precio}</p>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

