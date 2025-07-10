import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8 px-6 md:px-16 shadow-inner shadow-yellow-500/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-yellow-400">Grill Yard</h2>
          <p className="text-gray-400 mt-3">
            Bold flavors. Local ingredients. Real fire. Visit us and taste the difference.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-yellow-400 transition text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400 transition text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400 transition text-xl"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-yellow-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-500 transition">About</a></li>
            <li><a href="#menu" className="hover:text-yellow-500 transition">Menu</a></li>
            <li><a href="#contact" className="hover:text-yellow-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-yellow-500" /> 123 Flavor St, Grill City</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-yellow-500" /> +1 (234) 567-890</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-yellow-500" /> support@grillyard.com</li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-4">Opening Hours</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><strong className="text-yellow-500">Mon-Fri:</strong> 11:00 AM - 10:00 PM</li>
            <li><strong className="text-yellow-500">Sat:</strong> 12:00 PM - 11:00 PM</li>
            <li><strong className="text-yellow-500">Sun:</strong> Closed</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-yellow-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Grill Yard. All rights reserved.
      </div>
    </footer>
  )
}
