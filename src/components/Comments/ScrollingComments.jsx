import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ScrollingComments = ({ comments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {comments.map((comment, index) => (
        <CommentCard key={comment.id} comment={comment} index={index} />
      ))}
    </div>
  )
}

const CommentCard = ({ comment, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-md p-5 border border-earth-100 hover:shadow-lg hover:border-earth-200 transition-all duration-300 h-full flex flex-col"
    >
      {/* Quote Icon */}
      <div className="mb-2">
        <svg
          className="w-6 h-6 text-earth-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Comment Text */}
      <p className="text-earth-700 text-sm leading-loose mb-3 font-serif flex-grow">
        {comment.text}
      </p>

      {/* Author Info */}
      <div className="flex items-start justify-between flex-wrap gap-2 pt-3 border-t border-earth-200 mt-auto">
        <div className="flex-1 min-w-0">
          <p className="text-earth-800 font-semibold text-sm truncate">{comment.author}</p>
          <p className="text-earth-500 text-xs">{comment.relationship}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default ScrollingComments
