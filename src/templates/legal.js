import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import * as React from 'react'
import { Layout } from '../components/layout'

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
      <p>Legal</p>
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
    }
    prismicSidebar(lang: { eq: $lang }) {
      ...SidebarFragment
    }
  }
`

export default withPrismicPreview(Legal)
