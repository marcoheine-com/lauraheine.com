import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { ImageGallery } from '../components/image-gallery'
import { CallToAction } from '../components/call-to-action'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { findPageContent } from '../utils/findPageContent'

const Work = ({ data }) => {
  if (!data) return null

  const pageContent = data.prismicWork
  const sideBarContent = data.prismicSidebar

  const imageGallery = findPageContent('image_gallery', pageContent.data.body)
  const cta = findPageContent('cta', pageContent.data.body)

  return (
    <Layout
      altLangs={pageContent.alternate_languages}
      sidebarContent={sideBarContent}
      lang={pageContent.lang}
      title="work"
    >
      <h2 className="text-center mb-5 lg:hidden">
        {pageContent.data.pageheader.text}
      </h2>
      {imageGallery && (
        <ImageGallery
          images={imageGallery.items}
          marginBottom="mb-16"
          paddingOnSides="px-4 lg:px-0"
        />
      )}

      {cta && <CallToAction cta={cta.primary} />}
    </Layout>
  )
}

export const query = graphql`
  query pageQuery($id: String, $lang: String) {
    prismicWork(id: { eq: $id }, lang: { eq: $lang }) {
      _previewable
      lang
      alternate_languages {
        id
        type
        lang
      }
      data {
        body {
          ... on PrismicWorkDataBodyImageGallery {
            id
            slice_type
            items {
              image {
                alt
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
          }
          ... on PrismicWorkDataBodyCta {
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
        }
        pageheader {
          text
        }
      }
    }
    prismicSidebar(lang: { eq: $lang }) {
      ...SidebarFragment
    }
  }
`

export default withPrismicPreview(Work)
