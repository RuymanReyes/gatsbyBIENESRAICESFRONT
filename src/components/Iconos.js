import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Styled from '@emotion/styled';

const ListadoIconos = Styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li{
        display:flex;
        img {
            margin-right: 1rem;
        }
    }
`;


const Iconos = ({ wc, estacionamiento, habitacion }) => {
    const { iconos } = useStaticQuery(graphql`
        query {
            iconos: allFile(filter:{relativeDirectory:{ eq: "iconos"}}) {
                edges{
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `);

   // console.log(iconos)

    const imagenesIconos = iconos.edges;


    return ( 
        <ListadoIconos>
            <li>
                <img src={imagenesIconos[1].node.publicURL} alt="icono wc" />
                <p>{wc}</p>

            </li>
            <li>
                <img src={imagenesIconos[0].node.publicURL} alt="icono estacionamiento" />
                <p>{estacionamiento}</p>

            </li>
            <li>
                <img src={imagenesIconos[2].node.publicURL} alt="icono habitación" />
                <p>{habitacion}</p>

            </li>
        </ListadoIconos>
     );
}
 
export default Iconos;