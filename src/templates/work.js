import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/layout'
import { ImageGallery } from '../components/image-gallery'
import { CallToAction } from '../components/call-to-action'

const Work = ({ data }) => {
  if (!data) return null

  const pageContent = data.prismicWork
  const sideBarContent = data.prismicSidebar

  return (
    <Layout
      altLangs={pageContent.alternate_languages}
      sidebarContent={sideBarContent}
      lang={pageContent.lang}
    >
      <ImageGallery images={pageContent.data.body[0]?.items} spacing="mb-16" />

      <CallToAction cta={pageContent.data.body[1]?.primary} />
    </Layout>
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
          ... on PrismicWorkDataBodyCta {
            id
            primary {
              cta_headline {
                text
              }
              cta_text_content {
                richText
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
