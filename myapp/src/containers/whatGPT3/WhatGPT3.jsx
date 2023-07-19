import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Generative Pre-trained Transformer 3 is a large language model released by OpenAI. Like its predecessor GPT-2, it is a decoder-only transformer model of deep neural network, which uses attention in place of previous recurrence- and convolution-based architectures." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="A chatbot is a software application that aims to mimic human conversation through text or voice interactions, typically online." /> <br />
      <Feature title="Knowledgebase" text="A knowledge base is a set of sentences, each sentence given in a knowledge representation language, with interfaces to tell new sentences" />
      <Feature title="Education" text="OpenAI in education has the potential to be a game-changer for every child. Schools are already using AI across the country." />
    </div>
  </div>
  )
}

export default WhatGPT3