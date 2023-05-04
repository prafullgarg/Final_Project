import React from 'react'
import Intro from '../Intro/Intro'
import Feature from '../Features/Feature'
import About from '../About/About'
import Summarizer from '../Summarizer/Summarizer'
import Services from '../Services/Services'
import Workflow from '../Workflow/Workflow'
import Footer from '../Footer/Footer'
import './home.css'

function Home() {
  return (
    <div className="Home">
    <Intro/>
    <div className="home_container">
    <About/>
    <Summarizer/>
    <Services/>
    <Workflow/>
    </div>
    <Footer/>
    <></>
    </div>
  )
}

export default Home