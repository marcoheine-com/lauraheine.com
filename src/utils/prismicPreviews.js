import { componentResolverFromMap } from 'gatsby-plugin-prismic-previews'

import { linkResolver } from './linkResolver'
import AboutContact from '../templates/about-contact'
import Work from '../templates/work'
import FindingTheLittleThings from '../templates/finding-the-little-things'
import BookIllustrations from '../templates/book-illustrations'
import Legal from '../templates/legal'

export const repositoryConfigs = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      work: Work,
      aboutcontact: AboutContact,
      finding_the_little_things: FindingTheLittleThings,
      book_illustrations: BookIllustrations,
      legal: Legal,
    }),
  },
]
