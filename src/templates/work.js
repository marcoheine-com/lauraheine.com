import * as React from 'react'
import { graphql } from 'gatsby'
import { Head } from '../components/head'
import { Sidebar } from '../components/sidebar/sidebar'
import { GatsbyImage } from 'gatsby-plugin-image'
import { RichText } from 'prismic-reactjs'

const Work = ({ data }) => {
  if (!data) return null

  const pageContent = data.prismicWork
  const sideBarContent = data.prismicSidebar
  const cta = pageContent.data.body[1].primary

  return (
    <>
      <Head />
      <section className="pt-20 pr-8 pl-8 flex flex-col md:flex-row gap-12">
        <aside className="">
          <Sidebar
            altLangs={pageContent.alternate_languages}
            content={sideBarContent}
            lang={pageContent.lang}
          />
        </aside>
        <main>
          {pageContent.data.body[0]?.items?.map((item) => (
            <GatsbyImage
              alt={item.image.alt}
              key={item.image.alt}
              image={item.image.gatsbyImageData}
            />
          ))}

          {cta ? (
            <>
              <h3>{cta.cta_headline.text}</h3>
              <RichText render={cta.cta_text_content.richText} />
            </>
          ) : null}
        </main>
      </section>
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
