import React from 'react';
import {Helmet} from 'react-helmet';
import { Global, css } from '@emotion/core';
import Header from './Header';


const Layout = ({ children }) => {
    return ( 
        <>
        <Global
                styles={css`
                   html {
                       font-size: 62.5%;
                       box-sizing: border-box;
                   } 
                   *, *:before, *:after {
                       box-sizing: inherit;
                   }
                   body {
                       font-size: 1.6rem;
                       line-height: 2;
                       font-family: 'Lato', sans-serif;
                   }
                   h1, h2, h3 {
                       margin: 0;
                       line-height: 1.5;
                   }
                   h1, h2 {
                       text-align: center;
                       font-family: 'Lato', sans-serif;
                       font-weight: 300;
                   }
                   h3 {
                       font-family: 'Roboto', sans-serif;
                   }
                   ul {
                       list-style: none;
                       margin: 0;
                       padding: 0;
                   }
                   .contenedor {
                       max-width: 120rem;
                       margin: 0 auto;
                       width: 95%;
                   }
                   .background-image {
                       background-image: url('https://casaopcion.com/en/wp-content/uploads/2013/12/casa-del-lago-meza-residencial-de-lujo-en-fraccionamiento-marina-vallarta-1.jpg');
                       height: 600px;
                   }
                   .background-image2 {
                       background-image: url('https://cmera.es/wp-content/uploads/2014/03/Mousse.final2_.jpg');
                       height: 600px;
                   }
                   .background-image {
                       background-image: url('https://cmera.es/wp-content/uploads/2013/12/Ruben-Moreira.Final_.jpg');
                       height: 600px;
                   }
                   img {
                       max-width: 100%;
                   }
            
                `}
            />

        <Helmet>
            <title>Bienes Raices Gatsby</title>
            <meta name="description" content="Sitio web de bienes raices en Gatsby" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
        </Helmet>

        <Header />
        
            {  children }
        </>
     );
}
 
export default Layout;