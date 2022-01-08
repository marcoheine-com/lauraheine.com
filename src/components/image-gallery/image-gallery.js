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
  const [openImage, setOpenImage] = React.useState(undefined)
  const [isOpen, setIsOpen] = React.useState(false)

  const ref = React.useRef()

  useOnClickOutside(ref, () => handleCloseImage())

  const handleCloseImage = () => {
    setIsOpen(false)
    setOpenImage(undefined)
  }

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
          <span
            onClick={() => handleOpenImage(item.image)}
            key={item.image.alt}
          >
            <GatsbyImage
              alt={item.image.alt}
              image={item.image.gatsbyImageData}
              objectFit="contain"
              className="cursor-pointer break-inside my-3"
              loading={index <= 3 ? 'eager' : 'lazy'}
            />
          </span>
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
            onClick={handleCloseImage}
          >
            Close
          </button>
        </Dialog>
      )}
    </>
  )
}
