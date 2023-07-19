import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'> Do you want to step in to the future before others </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='footer'/>
          <p>Het Mamtora - OpenAI, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <a href='http://linkedin.com/in/het-mamtora/'><p>LinkedIn</p></a>
          <a href='https://github.com/HetMamtora/WhatGPT3-ReactJS'><p>GitHub</p></a>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>ABC-123 Gujarat-India</p>
          <p>91 123456789</p>
          <p>info@openai.net</p>
        </div>
      </div>
      
      <div className='gpt3__footer-copyright'>
      <p> &copy; 2023 GPT-3. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
