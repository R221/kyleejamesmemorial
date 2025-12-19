import { useState } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { motion } from 'framer-motion'

const PhotoGrid = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openLightbox = (event, { photo, index }) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const slides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    caption: photo.caption,
  }))

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentImage}
      />
    </div>
  )
}

export default PhotoGrid
