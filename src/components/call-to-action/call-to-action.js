import { RichText } from 'prismic-reactjs'
import * as React from 'react'

export const CallToAction = ({ cta }) => {
  return (
    <section className="bg-peach-background bg-no-repeat bg-center bg-contain text-center lg:max-w-[56rem] lg:my-0 lg:mx-auto">
      <section className="lg:bg-confetti lg:bg-no-repeat lg:bg-right bg-contain">
        <h3 className="mb-4 pt-20 lg:pt-28 lg:pl-16 lg:text-left">
          {cta?.cta_headline.text}
        </h3>
        <div className="lg:flex lg:gap-2 pb-20 lg:justify-start lg:pb-28 lg:pl-16">
          <RichText render={cta?.cta_text_content.richText} />
        </div>
      </section>
    </section>
  )
}
