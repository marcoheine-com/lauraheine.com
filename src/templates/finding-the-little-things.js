import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { RichText } from 'prismic-reactjs'
import * as React from 'react'
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
      paddingOnSides="px-4 md:px-0"
    >
      <section className="mb-20 md:mb-16 md:flex md:gap-5">
        <GatsbyImage image={logo.gatsbyImageData} alt={data.logo.alt} />
        <section>
          <h3>{headline.text}</h3>
          <RichText render={content.richText} />
          <a
            href={instagram_link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:font-bold text-body"
          >
            <StaticImage
              src="../images/instagram-icon.png"
              alt="instagram logo"
            />
            {instagram_link_label.text}
          </a>
        </section>
      </section>

      <section className="mb-20 md:mb-16">
        <h3>{etsy_headline.text}</h3>
        <section className="flex gap-5 overflow-x-auto mb-10 pr-3">
          {nodes.map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
              className="flex flex-col flex-none shrink w-72 border-darkPeach border-2 shadow-lg hover:shadow-xl mb-4"
            >
              <GatsbyImage
                image={
                  item.childEtsyListingImage.childFile.childImageSharp
                    .gatsbyImageData
                }
                alt={item.title}
                className="mb-4"
              />
              <h5 className="px-4 mb-2 text-body">{item.title}</h5>
              <p className="pr-4 self-end text-body">{item.price}</p>
            </a>
          ))}
        </section>
        <a
          href={etsy_cta_link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center bg-peach text-body mx-auto px-4 py-3 w-40 rounded-full hover:bg-darkPeach"
        >
          {etsy_cta.text}
        </a>
      </section>

      <h3>{data.body[0]?.primary.headline1.text}</h3>
      <RichText render={data.body[0]?.primary.text.richText} />
      <section className="md:flex md:gap-10">
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
              <h4>{item.download_headline.text}</h4>
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
      alternate_languages {
        id
        type
        lang
      }
      lang
      data {
        logo {
          gatsbyImageData
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
                gatsbyImageData
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
                placeholder: BLURRED
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

export default FindingTheLittleThings
