import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const InstagramLink = ({
  href,
  target = '_blank',
  linkText,
  className,
}) => {
  return (
    <a
      className={`${className} hover-trigger hover:font-normal`}
      href={href}
      target={target}
      rel="noopener noreferrer"
    >
      <StaticImage
        src="../../images/instagram-logo-peach.svg"
        alt="instagram logo"
        className="hover-target"
      />
      <StaticImage
        src="../../images/instagram-logo.svg"
        alt="instagram logo"
        className="hover-hide"
      />
      <span className="px-2 hover:bg-peach-insta hover:bg-no-repeat hover:bg-center">
        {linkText}
      </span>
    </a>
  )
}
