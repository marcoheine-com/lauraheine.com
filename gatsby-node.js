const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryData = await graphql(`
    {
      allPrismicWork {
        nodes {
          id
          lang
          url
        }
      }
    }
  `)

  queryData.data.allPrismicWork.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/work.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })
}
