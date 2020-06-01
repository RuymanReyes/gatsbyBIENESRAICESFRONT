import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 300px;
`

const ImagePagina = () => {

    const { imagen } = useStaticQuery(graphql`
        query {
            imagen: file(relativePath: { eq: "destacada2.jpg"}) {
                sharp: childImageSharp {
                    fluid( maxWidth: 1500 ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
     console.log(imagen);

    return ( 
        <ImageBackground tag="section" fluid={imagen.sharp.fluid} fadeIn="soft" >

        </ImageBackground>
     );
}
 
export default ImagePagina;