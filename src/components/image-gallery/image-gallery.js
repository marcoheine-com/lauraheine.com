import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

export const ImageGallery = ({
  images,
  marginBottom = '',
  paddingOnSides = '',
}) => {
  const [openImage, setOpenImage] = React.useState()
  const [isOpen, setIsOpen] = React.useState(false)

  const ref = React.useRef()

  useOnClickOutside(ref, () => setIsOpen(false))

  const handleOpenImage = (img) => {
    setOpenImage(img)
    setIsOpen(true)
  }

  return (
    <>
      <section
        className={`grid grid-cols-2 gap-5 ${
          marginBottom !== '' ? marginBottom : ''
        } ${paddingOnSides !== '' ? paddingOnSides : ''} md:masonry`}
      >
        {images?.map((item) => (
          <GatsbyImage
            alt={item.image.alt}
            key={item.image.alt}
            image={item.image.gatsbyImageData}
            onClick={() => handleOpenImage(item.image)}
            objectFit="contain"
            className="cursor-pointer break-inside py-3"
          />
        ))}
      </section>

      {isOpen && (
        <section
          ref={ref}
          className="absolute top-1/3 left-0 lg:top-0 m-11 z-1"
        >
          <GatsbyImage alt={openImage.alt} image={openImage?.gatsbyImageData} />
          <button
            className="absolute top-0 right-0"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </section>
      )}
    </>
  )
}
