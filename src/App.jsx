import React from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/Home'
import MenuSection from './components/Menu'
import AboutSection from './components/About'
import ContactSection from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-white min-h-screen p-6">
        <HomeSection />
        <MenuSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer/>
    </>
  )
}
