import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Intro.css";
import Logo from "../../assets/logo.png";
import Supreme_court_img from "../../assets/Supreme_court_img.jpg";

function Intro() {
  return (
    <div className="intro">
      <Navbar />
      <div className="container">
        <div className="i-left">
          <div className="intro_text">
            <h2>Extracting legal information made simple and easy</h2>
            <p>
              Legal summarizer is a valuable tool for lawyers and legal
              professionals, helping to save time and improve accuracy in legal
              research and document review. By leveraging machine learning and
              deep learning techniques, legal summarizer can automatically
              extract the most important information from legal documents,
              allowing users to focus on higher-level tasks that require their
              expertise.
            </p>
          </div>
          <div className="summarize_btn">
            <button className="button i-button">Start Summarizing</button>
          </div>
        </div>
        <div className="i-right">
          <img
            className="intro_img"
            src={Supreme_court_img}
            alt="Supreme court image"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
