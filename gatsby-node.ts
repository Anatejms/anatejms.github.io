const path = require("path")


function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

exports.createPages = async ({ graphql, actions  }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query AllCategories {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              category
              slug
              title
              date
              shortDescription
            }
          }
        }
      }
    }
  `)

  const categoryTemplate = path.resolve(`src/templates/category.tsx`);
  console.log('productTemplate', categoryTemplate);
  queryResults.data.allMarkdownRemark.edges.map((node: any) => {
    const { category } = node.node.frontmatter;
    return category;
  }).filter(onlyUnique).forEach((category: string) => {
    console.log('unique cat', category);
    

    createPage({
      path: `/category/${category}`,
      component: categoryTemplate,
      context: {
        // This time the entire product is passed down as context
        category,
        pages: queryResults.data.allMarkdownRemark.edges.filter((node) => {
          return node.node.frontmatter.category === category;
        })
      },
    })
  });

}