import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { RichText } from 'prismic-reactjs'
import * as React from 'react'
import { Layout } from '../components/layout'
import { linkResolver } from '../utils/linkResolver'

const AboutContact = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicAboutcontact
  const sideBarContent = data.prismicSidebar

  return (
    <Layout
      altLangs={pageContent.alternate_languages}
      sidebarContent={sideBarContent}
      lang={pageContent.lang}
      paddingOnSides="px-4 lg:px-0"
    >
      <section className="relative lg:grid lg:grid-cols-3 lg:gap-5">
        <div className="absolute left-0 right-0 w-80 h-72 top-8 mx-auto bg-peach-about bg-no-repeat bg-top bg-contain lg:w-full lg:h-full xl:bg-center" />
        <div className="flex justify-center items-center lg:flex-col lg:justify-start">
          <GatsbyImage
            image={pageContent.data.about_image.gatsbyImageData}
            alt={pageContent.data.about_image.alt}
            imgStyle={{ borderRadius: '50%', width: '100%', height: '100%' }}
            loading="eager"
          />
        </div>
        <div className="relative z-1 lg:col-span-2">
          <h3>{pageContent.data.headline.text}</h3>
          <RichText
            render={pageContent.data.about_content.richText}
            linkResolver={linkResolver}
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query aboutContactPageQuery($id: String, $lang: String) {
    prismicAboutcontact(id: { eq: $id }, lang: { eq: $lang }) {
      _previewable
      alternate_languages {
        id
        type
        lang
      }
      lang
      data {
        headline {
          text
        }
        about_image {
          alt
          gatsbyImageData(height: 280, width: 280)
        }
        about_content {
          richText
        }
      }
    }
    prismicSidebar(lang: { eq: $lang }) {
      ...SidebarFragment
    }
  }
`

export default withPrismicPreview(AboutContact)
