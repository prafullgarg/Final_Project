import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import Feature from './Feature'
import About from './About'

function Home() {
  return (
    <div className="Home">
    <Navbar/>
    <Intro/>
    <Feature/>
    <About/>
    </div>
  )
}

export default Home