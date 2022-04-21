exports.createPages = async ({ graphql, actions }) => {
    const {
      data: { allWpPage , allWpProduct }
    } = await graphql(`
      query {
        allWpPage {
          nodes {
            id
            uri
          }
        }
        allWpProduct {
            nodes {
              id
              uri
            }
          }
      }      
    `);
    allWpPage.nodes.map((page) => {
      const { id, uri } = page;
      return actions.createPage({
        path: uri,
        component: require.resolve('./src/templates/wp-page-template.js'),
        context: {
          id: id
        }
      });
    });
    allWpProduct.nodes.map((page) => {
        const { id, uri } = page;
        return actions.createPage({
          path: uri,
          component: require.resolve('./src/templates/wp-product-template.js'),
          context: {
            id: id
          }
        });
      });
  };
  exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;  //prevents a current bug in gatsby where it doesnt work woth graphqlgutenberg
    const typeDefs = `    
      type WpBlockAttributesObject {
        foobar: String
      }
    `;
    createTypes(typeDefs);
  };