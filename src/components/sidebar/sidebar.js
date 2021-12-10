import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { LanguageSwitcher } from '../language-switcher'

export const Sidebar = ({ lang, altLangs, content }) => {
  const { data } = content
  const { headline, subline, instagramlink, instagram_link_label, navigation } =
    data

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <aside className="md:pl-12">
      <h1 className="text-center whitespace-nowrap mb-2 bg-pinkHeader bg-no-repeat bg-center px-4 text-body md:px-0">
        <Link className="text-body" to={lang === 'en-us' ? '/' : `/${lang}/`}>
          {headline.text}
        </Link>
      </h1>
      <h2 className="text-center font-normal mb-6 md:mb-16 px-4 md:px-0">
        {subline.text}
      </h2>

      <nav className="flex justify-center py-4 bg-peach md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-4"
        >
          <StaticImage src="../../images/Menu.png" alt="menu icon" />
          <span>{lang == 'en-us' ? 'Menu' : 'Menü'}</span>
        </button>
      </nav>

      <div
        className={`mt-4 ${isOpen ? 'block' : 'hidden'} md:block px-4 md:px-0`}
      >
        <nav className="mb-10">
          <ul className="flex flex-col">
            {navigation.map(({ navigation_item, navigation_item_label }) =>
              navigation_item.url === null ? null : (
                <li
                  className="mb-4 last:mb-0 hover:font-bold"
                  key={navigation_item.id}
                >
                  <Link
                    to={navigation_item.url}
                    activeClassName="font-bold"
                    className="flex gap-2 items-center hover-trigger justify-center text-body md:justify-start"
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
        </nav>

        <a
          className="flex items-center gap-2 hover:font-bold mb-72 justify-center text-body md:justify-start"
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

        <LanguageSwitcher lang={lang} altLangs={altLangs} />
      </div>
    </aside>
  )
}
