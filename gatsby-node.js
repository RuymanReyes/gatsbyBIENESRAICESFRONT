const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPaginas {
        nodes {
          nombre
          id
        }
      }
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `);
  // console.log(JSON.stringify(resultado.data.allStrapiPropiedades));

  if (resultado.errors) {
    reporter.panic("No hubo Resultados", resultados.errors);
  }

  // Si hay resultados generar los archivos estáticos

  const paginas = resultado.data.allStrapiPaginas.nodes;
  console.log(paginas);

  const propiedades = resultado.data.allStrapiPropiedades.nodes;
  console.log(propiedades);

  // crear paginas de Paginas que están en Strapi

  paginas.forEach(pagina => {
    //console.log(urlSlug(propiedad.nombre));
    actions.createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve("./src/components/Paginas.js"),
      context: {
        id: pagina.id
      }
    });
  });

  // crear paginas de propiedades
  propiedades.forEach(propiedad => {
    //console.log(urlSlug(propiedad.nombre));
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/Propiedades.js"),
      context: {
        id: propiedad.id
      }
    });
  });
}
