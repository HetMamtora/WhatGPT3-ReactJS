import React from 'react'
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title:'Improving end distrusts instantly ',
    text:'A knowledge base is a set of sentences, each sentence given in a knowledge representation language, with interfaces to tell new sentences'
  },
  {
    title:'Become the tended active',
    text:'A knowledge base is a set of sentences, each sentence given in a knowledge representation language, with interfaces to tell new sentences'
  },
  {
    title:'Message or am nothing',
    text:'A knowledge base is a set of sentences, each sentence given in a knowledge representation language, with interfaces to tell new sentences'
  },
  {
    title:'Really boy law county',
    text:'A knowledge base is a set of sentences, each sentence given in a knowledge representation language, with interfaces to tell new sentences'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features