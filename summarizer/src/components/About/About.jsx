import React from "react";
import about_image from "../../assets/about_image.jpeg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about_left">
        <img  id="supace" src={about_image} alt="About image" />
      </div>
      <div className="about_right">
        <div className="about_text">
          <h2>About</h2>
          <p>
            A legal summarizer is a tool or software that automatically analyzes
            legal documents, such as court opinions, briefs, and contracts, and
            generates concise summaries of their key points and arguments. 
          </p>
          <p>
            Legal summarizers can be useful for lawyers, legal researchers, and
            anyone who needs to quickly understand the main points of a legal
            document without reading it in its entirety. 
          </p>
        </div>
        <div className="about_vedio">
          <BsFillPlayCircleFill  size='2.5rem'/> <span><h3>Play Vedio</h3></span>
        </div>
      </div>
    </div>
  );
}

export default About;
