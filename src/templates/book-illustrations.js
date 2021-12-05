import * as React from 'react'
import { graphql } from 'gatsby'
import { Head } from '../components/head'
import { Sidebar } from '../components/sidebar/sidebar'

const BookIllustrations = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicBookIllustrations
  const sideBarContent = data.prismicSidebar

  return (
    <>
      <Head />
      <Sidebar
        altLangs={pageContent.alternate_languages}
        content={sideBarContent}
        lang={pageContent.lang}
      />

      <h3>{pageContent.data.headline.text}</h3>
      <p>{pageContent.data.textcontent.text}</p>
    </>
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
        headline {
          text
        }
        textcontent {
          text
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

export default BookIllustrations
