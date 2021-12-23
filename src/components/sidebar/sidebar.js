import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
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
    <aside className="lg:pl-12 lg:sticky lg:top-20 lg:self-start">
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
        className={`mt-4 ${isOpen ? 'block' : 'hidden'} lg:block px-4 lg:px-0`}
      >
        <ul className="flex flex-col mb-10">
          {navigation.map(
            ({ navigation_item, navigation_item_label }) =>
              navigation_item.url && (
                <li className="mb-4 last:mb-0" key={navigation_item.id}>
                  <Link
                    to={navigation_item.url}
                    activeClassName="font-bold"
                    className="flex gap-2 items-center hover-trigger justify-center text-body hover:font-bold lg:justify-start "
                  >
                    {navigation_item_label.text}
                    <StaticImage
                      className="hover-target"
                      src="../../images/Arrow.png"
                      alt="An arrow"
                      layout="fixed"
                      width={19}
                      height={19}
                    />
                  </Link>
                </li>
              )
          )}
        </ul>

        <a
          className="flex items-center gap-2 hover:font-bold mb-72 justify-center text-body lg:justify-start"
          href={instagramlink.url}
          target={instagramlink.target}
          rel="noopener noreferrer"
        >
          <StaticImage
            src="../../images/instagram-icon.png"
            alt="instagram logo"
          />
          {instagram_link_label.text}
        </a>

        <div className="grid grid-cols-2 justify-items-center lg:justify-items-start">
          <Link
            to={legal_notice_link?.url}
            className="text-body hover:font-bold"
          >
            {legal_notice_link_label?.text}
          </Link>

          <LanguageSwitcher lang={lang} altLangs={altLangs} />
        </div>
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
