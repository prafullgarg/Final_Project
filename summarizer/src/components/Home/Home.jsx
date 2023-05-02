import React from 'react'
import Intro from '../Intro/Intro'
import Feature from '../Features/Feature'
import About from '../About/About'
import Services from '../Services/Services'
import Workflow from '../Workflow/Workflow'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div className="Home">
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