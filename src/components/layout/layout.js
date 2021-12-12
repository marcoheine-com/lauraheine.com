import * as React from 'react'
import { Head } from '../head'
import { Sidebar } from '../sidebar'

export const Layout = ({
  altLangs,
  sidebarContent,
  lang,
  children,
  paddingOnSides = '',
}) => {
  return (
    <>
      <Head />
      <section className="py-20 flex flex-col md:flex-row gap-12 max-w-screen-xl mx-auto my-0">
        <Sidebar altLangs={altLangs} content={sidebarContent} lang={lang} />
        <main
          className={`${paddingOnSides !== '' ? paddingOnSides : ''} md:pr-12`}
        >
          {children}
        </main>
      </section>
    </>
  )
}
