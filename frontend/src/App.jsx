import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import Hero from './components/Hero'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Hero />
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App