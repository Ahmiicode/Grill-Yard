import { motion } from 'framer-motion'
import steakImg from '../assets/steak.png' // Make sure to add your steak image in assets

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] text-center md:text-left px-4 md:px-12 gap-8">
      {/* Text Content */}
      <div className="flex-1 md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6"
        >
          Grill Yard <br /> Where Flavor Meets Fire
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 mb-8 max-w-xl"
        >
          Enjoy the best burgers, fries, and shakes in town with fresh ingredients and sizzling taste.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgb(255,193,7)' }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg"
        >
          Order Now
        </motion.button>
      </div>

      {/* Steak Image (Half Screen) */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.img
          src={steakImg}
          alt="Delicious grilled steak"
          className="w-full max-w-full object-contain rounded-lg shadow-xl"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </section>
  )
}
