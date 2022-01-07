import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

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
        className={`masonry-md ${marginBottom !== '' ? marginBottom : ''} ${
          paddingOnSides !== '' ? paddingOnSides : ''
        } md:masonry-lg`}
      >
        {images?.map((item, index) => (
          <GatsbyImage
            alt={item.image.alt}
            key={item.image.alt}
            image={item.image.gatsbyImageData}
            onClick={() => handleOpenImage(item.image)}
            objectFit="contain"
            className="cursor-pointer break-inside my-3"
            loading={index <= 3 ? 'eager' : 'lazy'}
          />
        ))}
      </section>

      {isOpen && (
        <Dialog isOpen={isOpen} aria-label={openImage?.alt} ref={ref}>
          <GatsbyImage
            alt={openImage?.alt}
            image={openImage?.gatsbyImageData}
            imgStyle={{
              objectFit: 'contain',
            }}
          />
          <button
            className="fixed top-10 right-10 bg-peach p-8"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </Dialog>
      )}
    </>
  )
}
