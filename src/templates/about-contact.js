import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { RichText } from 'prismic-reactjs'
import * as React from 'react'
import { Layout } from '../components/Layout/layout'

const AboutContact = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicAboutcontact
  const sideBarContent = data.prismicSidebar

  return (
    <Layout
      altLangs={pageContent.alternate_languages}
      sidebarContent={sideBarContent}
      lang={pageContent.lang}
      paddingOnSides="px-4 md:px-0"
    >
      <section className="relative md:grid grid-cols-2">
        <div className="bg-peach-about bg-no-repeat bg-center absolute left-0 right-0 mx-auto w-96 h-80 top-8" />
        <div className="flex justify-center">
          <GatsbyImage
            image={pageContent.data.about_image.gatsbyImageData}
            alt={pageContent.data.about_image.alt}
            imgStyle={{ borderRadius: '50%', width: '100%', height: '100%' }}
          />
        </div>
        <div className="relative z-1">
          <h3>{pageContent.data.headline.text}</h3>
          <RichText render={pageContent.data.about_content.richText} />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query aboutContactPageQuery($id: String, $lang: String) {
    prismicAboutcontact(id: { eq: $id }, lang: { eq: $lang }) {
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

export default AboutContact
