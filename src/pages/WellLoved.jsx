import { motion } from 'framer-motion'
import { wordCloudData, comments } from '../data/comments'
import WordCloudHero from '../components/WordCloud/WordCloudHero'
import ScrollingComments from '../components/Comments/ScrollingComments'

const WellLoved = () => {
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
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16 mt-8 md:mt-0"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-800 mb-6 tracking-wide">
            Well-Loved by Friends and Family
          </h1>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto leading-relaxed">
            Kylee touched countless lives with her kindness, warmth, and adventurous spirit.
            Here are heartfelt messages from those who knew and loved her.
          </p>
        </motion.div>

        {/* Word Cloud Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <WordCloudHero words={wordCloudData} />
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-24 h-1 bg-earth-300"></div>
          <svg
            className="w-8 h-8 mx-4 text-earth-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="w-24 h-1 bg-earth-300"></div>
        </div>

        {/* Comments Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-800 mb-3">
            Messages of Love and Remembrance
          </h2>
          <p className="text-earth-600 text-lg">
            {comments.length} heartfelt tributes from family and friends
          </p>
        </motion.div>

        {/* Scrolling Comments */}
        <div className="max-w-6xl mx-auto mb-16">
          <ScrollingComments comments={comments} />
        </div>

        {/* Add Your Message CTA (Optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-earth-200 to-sage-200 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-earth-800 mb-4">
            Share Your Memory
          </h3>
          <p className="text-earth-700 text-lg mb-6">
            If you would like to share a memory or message about Kylee,
            please reach out to the family.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="btn btn-primary">
              Contact Family
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WellLoved
