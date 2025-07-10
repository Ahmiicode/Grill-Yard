import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import CountUp from 'react-countup'
import aboutImg from '../assets/mainn.png'  // your interior shot

const FloatingShape = ({ size, x, y, delay }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ width: size, height: size, left: x, top: y }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 0.15, scale: 1.2 }}
    transition={{ duration: 4, delay, repeat: Infinity, repeatType: 'mirror' }}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="url(#grad)" />
      <defs>
        <radialGradient id="grad">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FF6F00" />
        </radialGradient>
      </defs>
    </svg>
  </motion.div>
)

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section
      id="about"
      className="relative pt-40 bg-gray-900 text-white py-16 px-6 md:px-12 overflow-hidden"
    >
      {/* Floating Shapes - hidden on very small screens */}
      <div className="hidden sm:block">
        <FloatingShape size={150} x="5%" y="5%" delay={0} />
        <FloatingShape size={120} x="80%" y="15%" delay={2} />
        <FloatingShape size={160} x="25%" y="70%" delay={1} />
      </div>

      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Text & Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="space-y-6"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-extrabold text-yellow-400"
          >
            Our Story & Stats
          </motion.h2>
          <motion.p
            variants={item}
            className="text-gray-300 leading-relaxed text-sm md:text-base"
          >
            Founded in 2023, Grill Yard sprang from a love of bold flavors and community spirit.
            Every burger we grill is crafted with care—from selecting local ingredients to perfecting our secret sauces.
          </motion.p>
          <motion.p
            variants={item}
            className="text-gray-300 leading-relaxed text-sm md:text-base"
          >
            In our first year alone, we’ve served over 10,000 burgers and welcomed thousands of happy customers.
            Join us at the yard and experience the sizzle yourself!
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 mt-8 justify-between"
          >
            {[
              { end: 10000, label: 'Burgers Served' },
              { end: 5000, label: 'Happy Customers' },
              { end: 50, label: 'Hours of Prep' },
            ].map(({ end, label }) => (
              <div key={label} className="text-center flex-1">
                <CountUp
                  end={end}
                  duration={3}
                  className="text-2xl md:text-3xl font-bold text-yellow-500"
                />
                <p className="text-gray-400 text-sm md:text-base">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.ul
            variants={item}
            className="mt-10 space-y-4 border-l-2 border-yellow-500 pl-6"
          >
            {[
              { year: '2023', event: 'First Grill Yard opens its doors.' },
              { year: '2024', event: 'Launched our signature spicy wings.' },
              { year: '2025', event: 'Celebrated 10,000 burgers served!' },
            ].map(({ year, event }) => (
              <motion.li
                key={year}
                variants={item}
                className="relative before:absolute before:-left-3 before:top-1 before:w-2 before:h-2 before:rounded-full before:bg-yellow-500"
              >
                <span className="font-semibold text-yellow-400">{year}</span> —{' '}
                <span className="text-gray-300 text-sm md:text-base">{event}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Image Column with yellow shadow & hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <div
            className="rounded-xl shadow-yellow-400 shadow-md hover:shadow-yellow-500 transition-shadow duration-500 p-1"
            style={{
              background:
                'radial-gradient(circle at center, rgba(252, 211, 77, 0.6), transparent 00%)',
              borderRadius: '1rem',
              cursor: 'pointer',
            }}
          >
            <motion.img
              src={aboutImg}
              alt="Grill Yard interior"
              className="w-full rounded-xl object-cover max-h-96 md:max-h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
