import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import ImagePagina from './ImagePagina';
import Layout from './Layout';
import ListadoPropiedades from './ListadoPropiedades';

const ContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;
export const query = graphql`
query($id:String!) {
    allStrapiPaginas(filter: { id: { eq: $id}}) {
        nodes {
            nombre
            contenido 
            imagen {
                url
                
            }
        }
    }
}

`

const Propiedades = ({data: {allStrapiPaginas: { nodes }}}) => {

    const { nombre, contenido} = nodes[0];

    return ( 
        <Layout>
                <main className="contenedor">
                    <h1>{nombre}</h1>
                    <ContenidoPagina>
                        <ImagePagina />
                        <p>{contenido} </p>
                    </ContenidoPagina>
                </main>

                {nombre === "Propiedades" && (
                    <ListadoPropiedades />
                )}
                
        </Layout>
     );
}
 
export default Propiedades;