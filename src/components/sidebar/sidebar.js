import { Link } from 'gatsby'
import * as React from 'react'
import { LanguageSwitcher } from '../language-switcher'

export const Sidebar = ({ lang, altLangs, content }) => {
  const { data } = content
  const { headline, subline, instagramlink, instagram_link_label, navigation } =
    data

  return (
    <>
      <h1>
        <Link to={lang === 'en-us' ? '/' : `/${lang}/`}>{headline.text}</Link>
      </h1>
      <h2>{subline.text}</h2>

      <nav className="flex flex-col">
        {navigation.map(({ navigation_item, navigation_item_label }) =>
          navigation_item.url === null ? null : (
            <Link
              to={navigation_item.url}
              key={navigation_item.id}
              activeClassName="font-bold"
            >
              {navigation_item_label.text}
            </Link>
          )
        )}
      </nav>

      <a
        href={instagramlink.url}
        target={instagramlink.target}
        rel="noopener noreferrer"
      >
        {instagram_link_label.text}
      </a>
      <LanguageSwitcher lang={lang} altLangs={altLangs} />
    </>
  )
}
