import * as React from 'react'
import { Link } from 'gatsby'
import { linkResolver } from '../../utils/linkResolver'

export const LanguageSwitcher = ({ lang, altLangs }) => {
  // NOTE: This component is hard coded with the langs EN and DE
  // to have it shown as EN | DE
  // if we want to add more languages we need to add them here
  const renderLang = (lang, langStr) => {
    return lang === 'en-us' ? (
      <span className="font-bold">{langStr}</span>
    ) : (
      <Link to={linkResolver(altLangs[0])} className="text-body">
        {langStr}
      </Link>
    )
  }

  return (
    <div className="flex gap-2 lg:justify-self-end">
      {renderLang(lang, 'EN')} | {renderLang(altLangs[0]?.lang, 'DE')}
    </div>
  )
}
