import ReactWordcloud from 'react-wordcloud'
import { motion } from 'framer-motion'

const WordCloudHero = ({ words }) => {
  const options = {
    colors: ['#bfa094', '#a18072', '#977669', '#7dd3fc', '#38bdf8', '#7d9380', '#5f7962'],
    enableTooltip: true,
    deterministic: true,
    fontFamily: 'Merriweather, serif',
    fontSizes: [18, 80],
    fontStyle: 'normal',
    fontWeight: 'bold',
    padding: 3,
    rotations: 2,
    rotationAngles: [-90, 0],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
  }

  const callbacks = {
    getWordTooltip: (word) =>
      `"${word.text}" was mentioned ${word.value} times`,
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-earth-100 via-sage-50 to-sky-100 rounded-2xl shadow-2xl p-8 md:p-12"
    >
      <div className="mb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-800 mb-2">
          Words That Describe Kylee
        </h2>
        <p className="text-earth-600 text-lg">
          Hover over words to see how many times they were mentioned
        </p>
      </div>

      <div className="w-full h-[400px] md:h-[500px]">
        <ReactWordcloud words={words} options={options} callbacks={callbacks} />
      </div>

      <div className="mt-6 text-center">
        <p className="text-earth-600 italic">
          Collected from heartfelt messages by friends and family
        </p>
      </div>
    </motion.div>
  )
}

export default WordCloudHero
