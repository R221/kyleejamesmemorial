import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import kyleeAlaska from '../assets/Kylee_alaska_store.png'
import photo1 from '../assets/32785944_10212016041745530_2115402845049061376_n.jpg'
import photo2 from '../assets/43005093_10212556759653295_5035811191344070656_n.jpg'
import photo3 from '../assets/466741025_10227130535278422_6570880903633848936_n.jpg'
import photo4 from '../assets/49239540_10213204338322357_2348113982851645440_n.jpg'
import photo5 from '../assets/465468500_10226881332328504_8746351087101784474_n.jpg'
import IntroAnimation from '../components/IntroAnimation'

// Slideshow images for the hero section
const heroImages = [
  kyleeAlaska,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
]

const Home = () => {
  const [showIntro, setShowIntro] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Check if user has already seen the intro in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
    if (!hasSeenIntro) {
      setShowIntro(true)
      sessionStorage.setItem('hasSeenIntro', 'true')
    } else {
      setIntroComplete(true)
    }
  }, [])

  // Slideshow rotation effect
  useEffect(() => {
    if (!introComplete) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000) // Change image every 6 seconds

    return () => clearInterval(interval)
  }, [introComplete])

  const handleIntroComplete = () => {
    setShowIntro(false)
    setIntroComplete(true)
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      {introComplete && (
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="page-container"
        >
          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background slideshow with overlay */}
            <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]}
                  alt="Kylee"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  className={`w-full h-full object-cover ${
                    currentImageIndex === 2 ? 'object-[center_25%]' : 'object-[center_40%]'
                  }`}
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </AnimatePresence>
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 content-wrapper text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-purple-100 mb-6 tracking-wide"
                    style={{ textShadow: '0 0 30px rgba(233, 213, 255, 0.6), 0 4px 6px rgba(0, 0, 0, 0.3)' }}>
                  Kylee Grimes James
                </h1>
                <p className="text-2xl md:text-3xl text-purple-100/95 mb-4 font-serif italic drop-shadow-md">
                  January 15, 1960 - December 17, 2025
                </p>
                <div className="w-24 h-1 bg-purple-200/80 mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-purple-100/95 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md">
                  A beautiful soul who lived with kindness, adventure, and boundless love
                </p>

                {/* Compass decoration */}
                {/* <div className="mb-12">
                  <svg
                    className="w-16 h-16 mx-auto text-purple-200/90 opacity-80 drop-shadow-md"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div> */}

                {/* Navigation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <NavigationCard
                    to="/photos"
                    title="Photos"
                    description="Cherished memories and moments"
                  />
                  <NavigationCard
                    to="/obituary"
                    title="Obituary"
                    description="Celebrating a life well-lived"
                  />
                  <NavigationCard
                    to="/well-loved"
                    title="Well-Loved"
                    description="Messages from friends and family"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Quote Section */}
          <section className="py-20 bg-white">
            <div className="content-wrapper">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <blockquote className="text-2xl md:text-3xl font-serif italic text-earth-700 leading-relaxed">
                  "The world is a book, and those who do not travel read only one page."
                </blockquote>
                <p className="mt-4 text-lg text-earth-600">— Saint Augustine</p>
              </motion.div>
            </div>
          </section>
        </motion.div>
      )}
    </>
  )
}

// Navigation Card Component
const NavigationCard = ({ to, title, description }) => {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-2xl hover:bg-white/80 border border-white/40 h-full flex flex-col items-center justify-center min-h-[140px]"
      >
        <h3 className="text-lg font-serif font-semibold text-earth-800 mb-2 tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-earth-600 text-center leading-relaxed">{description}</p>
      </motion.div>
    </Link>
  )
}

export default Home
