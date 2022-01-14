import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { RichText } from 'prismic-reactjs'
import * as React from 'react'
import { Layout } from '../components/layout'
import { linkResolver } from '../utils/linkResolver'

const Legal = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicLegal
  const sideBarContent = data.prismicSidebar

  return (
    <Layout
      altLangs={pageContent.alternate_languages}
      sidebarContent={sideBarContent}
      lang={pageContent.lang}
      paddingOnSides="px-4 lg:px-0"
    >
      <RichText
        render={pageContent.data.legal.richText}
        linkResolver={linkResolver}
      />
    </Layout>
  )
}

export const query = graphql`
  query legalPageQuery($id: String, $lang: String) {
    prismicLegal(id: { eq: $id }, lang: { eq: $lang }) {
      _previewable
      alternate_languages {
        id
        type
        lang
      }
      lang
      data {
        legal {
          richText
        }
      }
    }
    prismicSidebar(lang: { eq: $lang }) {
      ...SidebarFragment
    }
  }
`

export default withPrismicPreview(Legal)
