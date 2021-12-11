import * as React from 'react'
import { Link } from 'gatsby'

import { linkResolver } from '../../utils/linkResolver'

export const LanguageSwitcher = ({ lang, altLangs }) => {
  return (
    <div className="flex gap-2">
      <span className="font-bold">{lang.slice(0, 2).toUpperCase()}</span>|
      {altLangs.map((altLang, index) => (
        <Link
          key={`alt-lang-${index}`}
          to={linkResolver(altLang)}
          className="text-body"
        >
          {altLang.lang.slice(0, 2).toUpperCase()}
        </Link>
      ))}
    </div>
  )
}
