import { RichText } from 'prismic-reactjs'
import * as React from 'react'

export const CallToAction = ({ cta }) => {
  return (
    <section className="bg-peach-background bg-no-repeat bg-center bg-contain text-center">
      <section className="md:bg-confetti md:bg-no-repeat md:bg-right bg-contain">
        <h3 className="mb-4 pt-20 md:pt-28 md:pl-16 md:text-left">
          {cta?.cta_headline.text}
        </h3>
        <div className="md:flex md:gap-2 pb-20 md:justify-start md:pb-28 md:pl-16">
          <RichText render={cta?.cta_text_content.richText} />
        </div>
      </section>
    </section>
  )
}
