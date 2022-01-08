import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { InstagramLink } from '../instagram-link/instagram-link'
import { LanguageSwitcher } from '../language-switcher'

export const Sidebar = ({ lang, altLangs, content }) => {
  const { data } = content
  const {
    headline,
    subline,
    instagramlink,
    instagram_link_label,
    navigation,
    legal_notice_link_label,
    legal_notice_link,
  } = data

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <aside className="pt-8 lg:pt-0 lg:pl-12 lg:sticky lg:top-20 lg:self-start lg:full-height-aside lg:flex lg:flex-col lg:mt-20">
      <h1 className="text-center whitespace-nowrap mb-2 bg-pinkHeader bg-no-repeat bg-center px-4 text-body lg:px-0">
        <Link className="text-body" to={lang === 'en-us' ? '/' : `/${lang}/`}>
          {headline.text}
        </Link>
      </h1>
      <h2 className="text-center font-normal mb-6 lg:mb-16 px-4 lg:px-0">
        {subline.text}
      </h2>

      <nav className="flex justify-center py-4 bg-peach lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-4"
        >
          <StaticImage src="../../images/Menu.png" alt="menu icon" />
          <span>{lang == 'en-us' ? 'Menu' : 'Menü'}</span>
        </button>
      </nav>

      <div
        className={`mt-4 ${
          isOpen ? 'block' : 'hidden'
        } mb-36 lg:block px-4 lg:px-0 lg:mb-0`}
      >
        <ul className="flex flex-col mb-10">
          {navigation.map(
            ({ navigation_item, navigation_item_label }) =>
              navigation_item.url && (
                <li className="mb-4 last:mb-0" key={navigation_item.id}>
                  <Link
                    to={navigation_item.url}
                    activeClassName="font-bold"
                    className="flex items-center justify-center text-body hover:font-bold lg:justify-start hover-trigger"
                  >
                    <span className="flex gap-2 items-center flex-wrap">
                      {navigation_item_label.text}
                      <StaticImage
                        src="../../images/Arrow.svg"
                        alt="An arrow"
                        layout="fixed"
                        width={19}
                        height={19}
                        className="hidden lg:hover-target"
                      />
                    </span>
                  </Link>
                </li>
              )
          )}
        </ul>
        <InstagramLink
          href={instagramlink.url}
          target={instagramlink.target}
          className="flex items-center hover:font-bold justify-center text-body lg:justify-start"
          linkText={instagram_link_label.text}
        />
      </div>

      <div
        className={`${
          isOpen ? 'grid' : 'hidden'
        } lg:grid grid-cols-2 justify-items-center lg:justify-items-start lg:mt-auto lg:pb-4`}
      >
        <Link to={legal_notice_link?.url} className="text-body hover:font-bold">
          {legal_notice_link_label?.text}
        </Link>

        <LanguageSwitcher lang={lang} altLangs={altLangs} />
      </div>
    </aside>
  )
}

export const SidebarFragment = graphql`
  fragment SidebarFragment on PrismicSidebar {
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
      legal_notice_link_label {
        text
      }
      legal_notice_link {
        url
      }
    }
  }
`
