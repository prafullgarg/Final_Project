import React from 'react'
import './intro.css'
import Logo from '../assets/logo.png'
function Intro() {
  return (
    <div className='intro'>
      <div className='i-left'>
      <span>Extracting legal information made simple and easy</span>
      <span>Legal summarizer is a valuable tool for lawyers and legal professionals, helping to save time 
        and improve accuracy in legal research and document review. By leveraging machine learning and deep 
        learning techniques, legal summarizer can automatically extract the most important information from 
        legal documents, allowing users to focus on higher-level tasks that require their expertise.
      </span>
      </div>
      <button className="button i-button">Start Summarizing</button>
      <div className='i-right'>

      </div>
    </div>
  )
}

export default Intro