import React from 'react';
import FactCard from './FactCard';
import './FactCard.css';
import './FactsContainer.css';


const FactsContainer = (props) => {
  const factCards = props.facts.map(fact => {
    return (
      <FactCard
        type={fact.type}
        text={fact.text}
        found={fact.found}
        key={fact.number}
      />
    )
  })


  return (
    <div className='fact-container'>
    { factCards }
    </div>
  )
}

export default FactsContainer;
