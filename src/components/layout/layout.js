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
      <section className="flex flex-col lg:flex-row gap-12 max-w-[120rem] mx-auto my-0">
        <Sidebar altLangs={altLangs} content={sidebarContent} lang={lang} />
        <main
          className={`${
            paddingOnSides !== '' ? paddingOnSides : ''
          } py-8 lg:py-20 lg:pr-12`}
        >
          {children}
        </main>
      </section>
    </>
  )
}
