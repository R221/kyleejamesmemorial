import { useState } from 'react'
import { motion } from 'framer-motion'
import { photos } from '../data/photos'
import PhotoGrid from '../components/PhotoGallery/PhotoGrid'
import MasonryGallery from '../components/PhotoGallery/MasonryGallery'
import Slideshow from '../components/PhotoGallery/Slideshow'

const Photos = () => {
  const [viewMode, setViewMode] = useState('masonry') // 'masonry', 'slideshow'

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <div className="content-wrapper">
        {/* Header */}
        <div className="text-center mb-16 mt-8 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-earth-800 mb-6 tracking-wide"
          >
            Photo Memories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-earth-600 max-w-2xl mx-auto leading-relaxed"
          >
            A collection of cherished moments, adventures, and beautiful memories
          </motion.p>
        </div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          <ViewModeButton
            active={viewMode === 'masonry'}
            onClick={() => setViewMode('masonry')}
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
              </svg>
            }
            label="Gallery"
          />
          <ViewModeButton
            active={viewMode === 'slideshow'}
            onClick={() => setViewMode('slideshow')}
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            }
            label="Slideshow"
          />
        </motion.div>

        {/* Gallery Content */}
        <motion.div
          key={viewMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pb-12"
        >
          {viewMode === 'masonry' && <MasonryGallery photos={photos} />}
          {viewMode === 'slideshow' && <Slideshow photos={photos} autoPlay={true} interval={5000} />}
        </motion.div>
      </div>
    </motion.div>
  )
}

// View Mode Button Component
const ViewModeButton = ({ active, onClick, icon, label }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
        active
          ? 'bg-earth-700 text-white shadow-lg scale-105'
          : 'bg-white text-earth-700 border border-earth-200 hover:border-earth-400 hover:shadow-md hover:scale-102'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

export default Photos
