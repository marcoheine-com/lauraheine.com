import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import favicon16x16 from '../../images/favicon-16x16.png'
import favicon32x32 from '../../images/favicon-32x32.png'
import favicon96x96 from '../../images/favicon-96x96.png'
import faviconico from '../../images/favicon.ico'

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
    <Helmet title={data.site.siteMetadata.title}>
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
      <link rel="icon" type="image/png" href={favicon16x16} sizes="16x16" />
      <link rel="icon" type="image/png" href={favicon32x32} sizes="32x32" />
      <link rel="icon" type="image/png" href={favicon96x96} sizes="96x96" />
      <link rel="icon" type="image/png" href={faviconico} sizes="16x16" />
    </Helmet>
  )
}
