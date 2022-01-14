import * as React from 'react'
import { Head } from '../head'
import { Sidebar } from '../sidebar'

export const Layout = ({
  altLangs,
  sidebarContent,
  lang,
  children,
  paddingOnSides = '',
  scrollableX = false,
  title,
}) => {
  return (
    <>
      <Head title={title} />
      <section className="flex flex-col lg:justify-center lg:flex-row gap-12 max-w-[120rem] mx-auto my-0">
        <Sidebar altLangs={altLangs} content={sidebarContent} lang={lang} />
        <main
          className={`${paddingOnSides !== '' ? paddingOnSides : ''} ${
            scrollableX && 'overflow-x-scroll'
          } py-8 lg:py-20 lg:pr-12`}
        >
          {children}
        </main>
      </section>
    </>
  )
}
