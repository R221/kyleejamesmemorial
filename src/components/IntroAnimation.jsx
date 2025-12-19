import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import kyleePhoto from '../assets/Kylee_alaska_store.png'

const IntroAnimation = ({ onComplete }) => {
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    // Animation duration: 5 seconds total
    const timer = setTimeout(() => {
      setShowAnimation(false)
      setTimeout(() => {
        onComplete()
      }, 1000) // Wait for fade out
    }, 5000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950"
        >
          {/* Floating Rose Petals */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => {
              const isRed = i < 10; // First half are red, second half are purple
              const startX = Math.random() * window.innerWidth;
              const drift = (Math.random() - 0.5) * 200; // Horizontal drift
              const rotateDirection = Math.random() > 0.5 ? 1 : -1;
              const rotations = rotateDirection * (360 + Math.random() * 360);
              const size = 6 + Math.random() * 8; // Variable sizes

              return (
                <motion.div
                  key={i}
                  initial={{
                    x: startX,
                    y: -50,
                    rotate: Math.random() * 360,
                    opacity: 0,
                  }}
                  animate={{
                    x: [startX, startX + drift * 0.3, startX + drift * 0.7, startX + drift],
                    y: window.innerHeight + 50,
                    rotate: rotations,
                    opacity: [0, 0.8, 0.9, 0.8, 0.3, 0],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 4,
                    delay: Math.random() * 2.5,
                    ease: 'easeInOut',
                    x: { ease: 'easeInOut' },
                  }}
                  className="absolute"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <RosePetal size={size} isRed={isRed} />
                </motion.div>
              )
            })}
          </div>

          {/* Rose SVG decorations in corners */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-10 left-10"
          >
            <RoseIcon size={80} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute top-10 right-10"
          >
            <RoseIcon size={80} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="absolute bottom-10 left-10"
          >
            <RoseIcon size={80} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="absolute bottom-10 right-10"
          >
            <RoseIcon size={80} />
          </motion.div>

          {/* Center Photo with Fade In */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, delay: 0.5, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="rounded-full overflow-hidden border-4 border-white/30 shadow-2xl w-64 h-64 md:w-80 md:h-80">
              <img
                src={kyleePhoto}
                alt="Kylee Grimes James"
                className="w-full h-full object-cover object-[center_40%]"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2 }}
              className="mt-6 text-3xl md:text-4xl font-serif text-white text-center"
            >
              Kylee Grimes James
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="mt-2 text-lg md:text-xl text-purple-200 font-serif italic"
            >
              January 15, 1960 - December 17, 2025
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Rose Petal Component - More realistic petal shape
const RosePetal = ({ size = 8, isRed = false }) => {
  const colors = isRed
    ? ['#dc2626', '#b91c1c', '#991b1b'] // Red shades
    : ['#c084fc', '#a855f7', '#9333ea'] // Purple shades

  const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 20 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
    >
      {/* Rose petal shape */}
      <path
        d="M10 2 C6 2, 2 6, 2 12 C2 18, 6 24, 10 26 C14 24, 18 18, 18 12 C18 6, 14 2, 10 2 Z"
        fill={color}
        opacity="0.9"
      />
      {/* Inner petal detail */}
      <ellipse
        cx="10"
        cy="14"
        rx="4"
        ry="7"
        fill="white"
        opacity="0.15"
      />
      {/* Vein detail */}
      <path
        d="M10 4 Q10 10, 10 22"
        stroke="white"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </svg>
  )
}

// Simple Rose Icon Component
const RoseIcon = ({ size = 60 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rose petals */}
    <circle cx="50" cy="50" r="15" fill="#c084fc" opacity="0.8" />
    <circle cx="40" cy="45" r="12" fill="#a855f7" opacity="0.7" />
    <circle cx="60" cy="45" r="12" fill="#a855f7" opacity="0.7" />
    <circle cx="45" cy="35" r="10" fill="#9333ea" opacity="0.6" />
    <circle cx="55" cy="35" r="10" fill="#9333ea" opacity="0.6" />
    <circle cx="35" cy="55" r="10" fill="#7c3aed" opacity="0.7" />
    <circle cx="65" cy="55" r="10" fill="#7c3aed" opacity="0.7" />
    {/* Stem */}
    <rect x="48" y="60" width="4" height="30" fill="#22c55e" opacity="0.6" />
    {/* Leaves */}
    <ellipse cx="40" cy="70" rx="8" ry="5" fill="#16a34a" opacity="0.5" />
    <ellipse cx="60" cy="75" rx="8" ry="5" fill="#16a34a" opacity="0.5" />
  </svg>
)

export default IntroAnimation
