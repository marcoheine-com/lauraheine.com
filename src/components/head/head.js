import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export const Head = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:image" content="https://www.mywebsite.com/image.jpg" />
      <meta property="og:image:alt" content="Image description" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.mywebsite.com/page" />
      <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
  )
}
