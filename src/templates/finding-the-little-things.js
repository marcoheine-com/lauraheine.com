import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { RichText } from 'prismic-reactjs'
import * as React from 'react'
import { InstagramLink } from '../components/instagram-link/instagram-link'
import { Layout } from '../components/layout'

const FindingTheLittleThings = ({ data: queryData }) => {
  if (!queryData) return null

  const sideBarContent = queryData.prismicSidebar

  const { nodes } = queryData.allEtsyListing

  const pageContent = queryData.prismicFindingTheLittleThings
  const { alternate_languages, lang, data } = pageContent
  const {
    logo,
    headline,
    content,
    instagram_link,
    instagram_link_label,
    etsy_cta,
    etsy_cta_link,
    etsy_headline,
  } = data

  return (
    <Layout
      altLangs={alternate_languages}
      sidebarContent={sideBarContent}
      lang={lang}
      paddingOnSides="px-4 lg:px-0"
      scrollableX
    >
      <section className="mb-20 lg:mb-16 lg:flex lg:gap-5 lg:items-start">
        <GatsbyImage
          image={logo.gatsbyImageData}
          alt={data.logo.alt}
          imgStyle={{ objectFit: 'contain' }}
          loading="eager"
        />
        <section>
          <h3>{headline.text}</h3>
          <RichText render={content.richText} />
          <InstagramLink
            href={instagram_link.url}
            className="flex items-center hover:font-bold text-body"
            linkText={instagram_link_label.text}
          />
        </section>
      </section>

      <section className="mb-20 lg:mb-16">
        <h3>{etsy_headline.text}</h3>
        <section className="flex gap-5 overflow-x-auto mb-10 pr-3">
          {nodes.map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
              className="flex flex-col flex-none shrink min-w-[18rem] max-w-[18rem] border-darkPeach border-2 shadow-lg hover:shadow-xl mb-4"
            >
              <GatsbyImage
                image={
                  item.childEtsyListingImage.childFile.childImageSharp
                    .gatsbyImageData
                }
                alt={item.title}
                className="mb-4"
              />
              <h4 className="pl-4 pr-20 mb-2 text-body">{item.title}</h4>
              <p className="pr-4 self-end text-body">€{item.price}</p>
            </a>
          ))}
        </section>
        <a
          href={etsy_cta_link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center bg-peach text-body font-bold mx-auto px-4 py-3 w-40 rounded-full hover:bg-darkPeach"
        >
          {etsy_cta.text}
        </a>
      </section>

      <h3>{data.body[0]?.primary.headline1.text}</h3>
      <RichText render={data.body[0]?.primary.text.richText} />
      <section className="lg:flex lg:gap-10">
        {data.body[0]?.items.map((item) => (
          <section
            className="grid grid-cols-2 gap-5 mb-7 last:mb-0"
            key={item.download_image.alt}
          >
            <GatsbyImage
              alt={item.download_image.alt}
              image={item.download_image.gatsbyImageData}
            />
            <section>
              <h4 className="text-base">{item.download_headline.text}</h4>
              <RichText render={item.download_text.richText} />
              <a
                href={item.download_link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.download_link_text.text}
              </a>
            </section>
          </section>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query findingTheLittleThingsPageQuery($id: String, $lang: String) {
    prismicFindingTheLittleThings(id: { eq: $id }, lang: { eq: $lang }) {
      _previewable
      alternate_languages {
        id
        type
        lang
      }
      lang
      data {
        logo {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
          alt
        }
        headline {
          text
        }
        content {
          richText
        }
        instagram_link_label {
          text
        }
        instagram_link {
          url
        }
        etsy_cta {
          text
        }
        etsy_cta_link {
          url
        }
        etsy_headline {
          text
        }
        body {
          ... on PrismicFindingTheLittleThingsDataBodyDownloads {
            primary {
              headline1 {
                text
              }
              text {
                richText
              }
            }
            items {
              download_image {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
                alt
              }
              download_headline {
                text
              }
              download_link {
                url
              }
              download_link_text {
                text
              }
              download_text {
                richText
              }
            }
          }
        }
      }
    }
    prismicSidebar(lang: { eq: $lang }) {
      ...SidebarFragment
    }
    allEtsyListing(limit: 3) {
      nodes {
        id
        title
        price
        url
        childEtsyListingImage {
          childFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                layout: CONSTRAINED
                width: 270
                height: 270
              )
            }
          }
        }
      }
    }
  }
`

export default withPrismicPreview(FindingTheLittleThings)
