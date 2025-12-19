import { motion } from 'framer-motion'
import { obituaryData } from '../data/obituary'

const Obituary = () => {
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
      className="page-container bg-gradient-to-b from-earth-50 to-white"
    >
      <div className="content-wrapper max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-800 mb-6 tracking-wide">
            {obituaryData.fullName}
          </h1>
          <div className="flex items-center justify-center gap-3 text-xl text-earth-600 font-serif">
            <span>{obituaryData.birthDate}</span>
            <span className="text-earth-300">—</span>
            <span>{obituaryData.passedDate}</span>
          </div>
          <p className="mt-3 text-earth-500 text-lg">Age {obituaryData.age}</p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 border border-earth-100"
        >
          {/* Biography */}
          <div className="mb-10">
            <div className="prose prose-lg max-w-none">
              {obituaryData.biography.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-earth-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-12">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-earth-300 to-transparent"></div>
          </div>

          {/* Survived By */}
          {obituaryData.survived && obituaryData.survived.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-earth-800 mb-4">
                Survived By
              </h2>
              <ul className="space-y-2">
                {obituaryData.survived.map((person, index) => (
                  <li key={index} className="text-earth-700 text-lg">
                    {person}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Predeceased By */}
          {obituaryData.predeceased && obituaryData.predeceased.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-earth-800 mb-4">
                Predeceased By
              </h2>
              <ul className="space-y-2">
                {obituaryData.predeceased.map((person, index) => (
                  <li key={index} className="text-earth-700 text-lg">
                    {person}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Service Information */}
          {obituaryData.service && (
            <div className="bg-sage-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-serif font-semibold text-earth-800 mb-4">
                {obituaryData.service.type}
              </h2>
              <div className="space-y-2 text-earth-700">
                <InfoRow label="Date" value={obituaryData.service.date} />
                <InfoRow label="Time" value={obituaryData.service.time} />
                <InfoRow label="Location" value={obituaryData.service.location} />
                {obituaryData.service.address && (
                  <InfoRow label="Address" value={obituaryData.service.address} />
                )}
              </div>
            </div>
          )}

          {/* Memorial Donations */}
          {obituaryData.memorialDonations && obituaryData.memorialDonations.enabled && (
            <div className="bg-sky-50 rounded-xl p-6">
              <h2 className="text-2xl font-serif font-semibold text-earth-800 mb-4">
                Memorial Donations
              </h2>
              {obituaryData.memorialDonations.organizations.map((org, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-semibold text-earth-700 text-lg">{org.name}</h3>
                  <p className="text-earth-600">{org.description}</p>
                  {org.link && (
                    <a
                      href={org.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 hover:text-sky-700 underline mt-1 inline-block"
                    >
                      Learn more
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Quote */}
        {obituaryData.favoriteQuote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <blockquote className="text-xl md:text-2xl font-serif italic text-earth-700 leading-relaxed max-w-3xl mx-auto">
              {obituaryData.favoriteQuote}
            </blockquote>
          </motion.div>
        )}

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mb-8"
        >
          <svg
            className="w-16 h-16 text-earth-400 opacity-60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Info Row Component
const InfoRow = ({ label, value }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-2">
      <span className="font-semibold min-w-[100px]">{label}:</span>
      <span>{value}</span>
    </div>
  )
}

export default Obituary
