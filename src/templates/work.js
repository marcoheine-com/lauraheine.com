import * as React from 'react'
import { graphql } from 'gatsby'
import { LanguageSwitcher } from '../components/language-switcher'

const Page = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicWork

  return (
    <div>
      <LanguageSwitcher
        lang={pageContent.lang}
        altLangs={pageContent.alternate_languages}
      />
      {pageContent.data.body.map((block, index) =>
        block.items.map((item) => <p>{item.image.alt}</p>)
      )}
    </div>
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
              }
            }
          }
        }
      }
    }
  }
`

export default Page
