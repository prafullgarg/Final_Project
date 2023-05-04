import React from 'react'
import about_image from '../../assets/about_image.jpeg'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import "./about.css"

function About() {
  return (
    <div className="about">
      <div className="about_left">
        <img src={about_image} alt="About image" />
      </div>
      <div className="about_right">
      <div className="about_text">
        <h2>About</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam quidem dolore ex cum, quae vitae voluptatibus, et sapiente consequuntur modi nihil cupiditate. Doloribus, sed debitis odit hic eos tempora?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit modi nemo laboriosam aliquid provident facilis adipisci saepe, labore voluptatibus suscipit unde placeat magnam consequatur sapiente dolorem, maiores, magni corporis?</p>
      </div>
      <div className="about_vedio">
        <BsFillPlayCircleFill/>
      </div></div>
    </div>
  )
}

export default About