import { css } from '@emotion/core';
import React from 'react';
import BackImage from '../components/BackGroundImage';
import Encuentra from '../components/Encuentra';
import Layout from '../components/Layout';
import ListadoPropiedades from '../components/ListadoPropiedades';
import useInicio from '../Hooks/useInicio';





const Index = () => {

 

    const inicio = useInicio();

    const { nombre, contenido } = inicio[0];
  


    return ( 

        <Layout>
            <BackImage />

{/*          VA LA IMAGEN DEL INICIO PERO HAY UN ERROR EN LA QUERY*/} 
            {/* <BackgroundImage tag="section" fluid={imagenUp.sharp.fluid} fadeIn="soft" >
            <div className={heroCSS.imagenbg}>
                    <h1 className={heroCSS.titulo}> Venta de casas y departamentos exclusivos </h1>
                </div>
            </BackgroundImage> */}
            <main>
                <div css={css`
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{nombre}</h1>
                    <p css={css`
                        text-align: center;
                    `}>{contenido}</p>
                </div>
            </main>
            <Encuentra />

            <ListadoPropiedades />

        </Layout>
        
     );
}
 
export default Index;