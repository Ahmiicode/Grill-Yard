import { useState } from 'react'
import { motion } from 'framer-motion'

// Images
import burgerImg from '../assets/burger.png'
import wingsImg from '../assets/wings.png'
import friesImg from '../assets/fries.png'
import shakeImg from '../assets/shake.png'

// Categories
const categories = [
  { id: 'burger', name: 'Burgers' },
  { id: 'wings', name: 'Wings' },
  { id: 'fries', name: 'Fries' },
  { id: 'shake', name: 'Shakes' },
]

// Menu items with 3 items per category
const menuItems = [
  // Burgers
  {
    id: 1,
    category: 'burger',
    name: 'Grilled Beef Burger',
    description: 'Juicy beef patty with fresh lettuce, tomato, and cheese.',
    price: '$9.99',
    img: burgerImg,
  },
  {
    id: 2,
    category: 'burger',
    name: 'Classic Cheese Burger',
    description: 'Melted cheddar with pickles and special sauce.',
    price: '$8.99',
    img: burgerImg,
  },
  {
    id: 3,
    category: 'burger',
    name: 'Bacon Double Burger',
    description: 'Double beef patties topped with crispy bacon.',
    price: '$11.99',
    img: burgerImg,
  },

  // Wings
  {
    id: 4,
    category: 'wings',
    name: 'Spicy Chicken Wings',
    description: 'Crispy wings tossed in our special hot sauce.',
    price: '$7.99',
    img: wingsImg,
  },
  {
    id: 5,
    category: 'wings',
    name: 'BBQ Wings',
    description: 'Sweet and smoky BBQ glazed wings.',
    price: '$8.49',
    img: wingsImg,
  },
  {
    id: 6,
    category: 'wings',
    name: 'Garlic Parmesan Wings',
    description: 'Wings coated in garlic butter and parmesan cheese.',
    price: '$8.99',
    img: wingsImg,
  },

  // Fries
  {
    id: 7,
    category: 'fries',
    name: 'French Fries',
    description: 'Golden fries seasoned to perfection.',
    price: '$3.99',
    img: friesImg,
  },
  {
    id: 8,
    category: 'fries',
    name: 'Cheese Fries',
    description: 'Fries loaded with melted cheese and bacon bits.',
    price: '$5.99',
    img: friesImg,
  },
  {
    id: 9,
    category: 'fries',
    name: 'Sweet Potato Fries',
    description: 'Crispy sweet potato fries with a hint of cinnamon.',
    price: '$4.99',
    img: friesImg,
  },

  // Shakes
  {
    id: 10,
    category: 'shake',
    name: 'Chocolate Milkshake',
    description: 'Rich chocolate shake topped with whipped cream.',
    price: '$5.99',
    img: shakeImg,
  },
  {
    id: 11,
    category: 'shake',
    name: 'Vanilla Milkshake',
    description: 'Creamy vanilla shake with a cherry on top.',
    price: '$5.49',
    img: shakeImg,
  },
  {
    id: 12,
    category: 'shake',
    name: 'Strawberry Milkshake',
    description: 'Fresh strawberry shake with real fruit chunks.',
    price: '$6.49',
    img: shakeImg,
  },
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('burger')

  // Filter items based on selected category
  const filteredItems = menuItems.filter(item => item.category === selectedCategory)

  return (
    <section
      id="menu"
      className="bg-gray-900 pt-16 sm:pt-24 md:pt-32 min-h-screen py-8 px-4 sm:px-6 md:px-8 lg:px-12 text-gray-900 dark:text-yellow-400 flex flex-col"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 md:mb-10 text-center text-yellow-500 dark:text-yellow-400">
        Our Menu
      </h2>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-4 sm:gap-6 md:gap-8 w-full">
        {/* Categories */}
 <nav
  className="
    flex flex-row lg:flex-col
    bg-gray-800 rounded-xl p-3
    space-x-2 lg:space-x-0 lg:space-y-3
    lg:w-40
  "
  aria-label="Menu Categories"
>
  {categories.map(({ id, name }) => (
    <button
      key={id}
      onClick={() => setSelectedCategory(id)}
      className={`
        flex-1 lg:flex-none           /* full width on mobile, auto width on lg */
        rounded-lg font-semibold
        px-2 py-2 text-center
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-yellow-500
        text-sm sm:text-base
        ${
          selectedCategory === id
            ? 'bg-yellow-500 text-black'
            : 'text-yellow-300 hover:bg-yellow-600 hover:text-black'
        }
      `}
      aria-pressed={selectedCategory === id}
    >
      {name}
    </button>
  ))}
</nav>


        {/* Menu Items */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4 sm:gap-5 md:gap-6
            w-full
          "
        >
          {filteredItems.map(({ id, name, description, price, img }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 25px rgba(234,179,8,0.7)' }}
              className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-shadow duration-300 flex flex-col"
            >
              <img
                src={img}
                alt={name}
                className="w-full h-40 sm:h-48 object-cover object-center rounded-t-xl"
                loading="lazy"
              />

              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl md:text-xl text-black bg-amber-400 px-3 sm:px-4 md:px-5 rounded-e-xl font-semibold mb-1 sm:mb-2  dark:text-yellow-300 truncate">
                  {name}
                </h3>
                <p className="text-white dark:text-gray-300 flex-grow text-xs sm:text-sm md:text-base">
                  {description}
                </p>
                <p className="text-yellow-600 dark:text-yellow-400 font-bold text-base sm:text-lg md:text-xl mt-2 sm:mt-3">
                  {price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}