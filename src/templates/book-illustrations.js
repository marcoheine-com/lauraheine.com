import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ImageGallery } from '../components/image-gallery'
import { CallToAction } from '../components/call-to-action'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { findPageContent } from '../utils/findPageContent'

const BookIllustrations = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicBookIllustrations
  const sideBarContent = data.prismicSidebar

  const imageGallery = findPageContent('image_gallery', pageContent.data.body)
  const cta = findPageContent('cta', pageContent.data.body)

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

      {imageGallery && (
        <ImageGallery images={imageGallery.items} marginBottom="mb-16" />
      )}

      {cta && <CallToAction cta={cta.primary} />}
    </Layout>
  )
}

export const query = graphql`
  query bookIllustrationsPageQuery($id: String, $lang: String) {
    prismicBookIllustrations(id: { eq: $id }, lang: { eq: $lang }) {
      _previewable
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
            slice_type
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
            slice_type
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

export default withPrismicPreview(BookIllustrations)
