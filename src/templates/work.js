import * as React from 'react'
import { graphql } from 'gatsby'
import { Head } from '../components/head'
import { Sidebar } from '../components/sidebar/sidebar'
import { GatsbyImage } from 'gatsby-plugin-image'

const Work = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicWork
  const sideBarContent = data.prismicSidebar

  return (
    <>
      <Head />
      <Sidebar
        altLangs={pageContent.alternate_languages}
        content={sideBarContent}
        lang={pageContent.lang}
      />
      {pageContent.data.body.map((block) =>
        block.items.map((item) => (
          <GatsbyImage
            alt={item.image.alt}
            key={item.image.alt}
            image={item.image.gatsbyImageData}
          />
        ))
      )}
    </>
  )
}

export const query = graphql`
  query pageQuery($id: String, $lang: String) {
    prismicWork(id: { eq: $id }, lang: { eq: $lang }) {
      lang
      alternate_languages {
        id
        type
        lang
        uid
      }
      data {
        body {
          ... on PrismicWorkDataBodyImageGallery {
            id
            items {
              image {
                alt
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    prismicSidebar(lang: { eq: $lang }) {
      id
      data {
        headline {
          text
        }
        navigation {
          navigation_item_label {
            text
          }
          navigation_item {
            url
            id
          }
        }
        instagram_link_label {
          text
        }
        instagramlink {
          url
          target
        }
        subline {
          text
        }
      }
    }
  }
`

export default Work
