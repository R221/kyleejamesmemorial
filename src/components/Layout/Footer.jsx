const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-earth-800 text-earth-100 py-8 mt-auto">
      <div className="content-wrapper">
        <div className="flex flex-col items-center space-y-4">
          {/* Decorative Mountain Silhouette */}
          <div className="w-full max-w-md h-16 relative overflow-hidden">
            <svg
              viewBox="0 0 500 100"
              className="w-full h-full opacity-30"
              preserveAspectRatio="none"
            >
              <path
                d="M0,100 L0,50 L100,20 L150,45 L200,10 L250,35 L300,15 L350,40 L400,25 L450,50 L500,30 L500,100 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Quote or Message */}
          <p className="text-center text-lg font-serif italic max-w-2xl">
            "The world is a book, and those who do not travel read only one page."
          </p>

          {/* Footer Text */}
          <div className="text-center text-sm opacity-80">
            <p>In Loving Memory of Kylee Grimes James</p>
            <p className="mt-1">&copy; {currentYear} - Forever in Our Hearts</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
