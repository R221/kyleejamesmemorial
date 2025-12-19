import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { motion } from 'framer-motion'

const MasonryGallery = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const slides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    description: photo.date || '',
  }))

  return (
    <div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="mb-4 break-inside-avoid cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              {photo.date && (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4 font-medium">
                    {photo.date}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentImage}
      />
    </div>
  )
}

export default MasonryGallery
