import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import Feature from './Feature'
import About from './About'
import Services from './Services'
import Workflow from './Workflow'
import Footer from './Footer'

function Home() {
  return (
    <div className="Home">
    <Navbar/>
    <Intro/>
    <Feature/>
    <About/>
    <Services/>
    <Workflow/>
    <Footer/>
    <></>
    </div>
  )
}

export default Home