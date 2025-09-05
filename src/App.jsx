import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import Industries from './components/Industries'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme= {setTheme}/>
      <Hero />
      <TrustedBy />
      <Services />
      <Industries />
      <Teams />
      <ContactUs />
      <Footer theme={theme}/>
    </div>
  )
}

export default App
