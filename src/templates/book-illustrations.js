import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ImageGallery } from '../components/image-gallery'
import { CallToAction } from '../components/call-to-action'

const BookIllustrations = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicBookIllustrations
  const sideBarContent = data.prismicSidebar

  return (
    <Layout
      altLangs={pageContent.alternate_languages}
      sidebarContent={sideBarContent}
      lang={pageContent.lang}
      paddingOnSides="px-4 md:px-0"
    >
      <GatsbyImage
        image={pageContent.data.hero_image.gatsbyImageData}
        alt={pageContent.data.hero_image.alt}
        className="mb-8 md:mb-11"
      />
      <h3>{pageContent.data.headline.text}</h3>
      <p className="mb-10 md:mb-16">{pageContent.data.textcontent.text}</p>

      <ImageGallery
        images={pageContent.data.body[0]?.items}
        marginBottom="mb-16"
      />

      <CallToAction cta={pageContent.data.body[1]?.primary} />
    </Layout>
  )
}

export const query = graphql`
  query bookIllustrationsPageQuery($id: String, $lang: String) {
    prismicBookIllustrations(id: { eq: $id }, lang: { eq: $lang }) {
      lang
      alternate_languages {
        id
        type
        lang
        uid
      }
      data {
        hero_image {
          alt
          gatsbyImageData
        }
        headline {
          text
        }
        textcontent {
          text
        }
        body {
          ... on PrismicBookIllustrationsDataBodyCta {
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
          ... on PrismicBookIllustrationsDataBodyImageGallery {
            id
            items {
              image {
                gatsbyImageData
                alt
              }
            }
          }
        }
      }
    }
    prismicSidebar(lang: { eq: $lang }) {
      ...SidebarFragment
    }
  }
`

export default BookIllustrations
