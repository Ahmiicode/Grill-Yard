import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 pt-40 text-white py-20 px-6 md:px-12 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-yellow-400">Get in Touch</h2>
          <p className="text-gray-400">
            Whether you have a question, want to book a table, or just say hi — we’d love to hear from you.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              123 Flavor Street, Grill City
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              +1 (234) 567-890
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              contact@grillyard.com
            </li>
          </ul>
        </motion.div>

        {/* Right: Form */}
        <motion.form 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl p-8 shadow-xl space-y-6"
        >
          <div>
  <label className="block text-xl font-semibold text-yellow-400 mb-1">Name</label>
  <input
    type="text"
    className="w-full rounded-md bg-gray-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    placeholder="Your Name"
  />
</div>

<div>
  <label className="block text-xl font-semibold text-yellow-400 mb-1">Email</label>
  <input
    type="email"
    className="w-full rounded-md bg-gray-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    placeholder="you@example.com"
  />
</div>

<div>
  <label className="block text-xl font-semibold text-yellow-400 mb-1">Message</label>
  <textarea
    rows="4"
    className="w-full rounded-md bg-gray-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    placeholder="How can we help?"
  />
</div>

          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-md transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
