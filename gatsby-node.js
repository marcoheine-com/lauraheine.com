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
      allPrismicBookIllustrations {
        nodes {
          url
          lang
          id
        }
      }
      allPrismicAboutcontact {
        nodes {
          lang
          url
          id
        }
      }
      allPrismicLegal {
        nodes {
          lang
          url
          id
        }
      }
      allPrismicFindingTheLittleThings {
        nodes {
          lang
          url
          id
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

  queryData.data.allPrismicBookIllustrations.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/book-illustrations.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicAboutcontact.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/about-contact.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicLegal.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/legal.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicFindingTheLittleThings.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(
        __dirname,
        'src/templates/finding-the-little-things.js'
      ),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })
}
