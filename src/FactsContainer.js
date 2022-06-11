import React from 'react';
import FactCard from './FactCard';
import './FactCard.css';
import './FactsContainer.css';


const FactsContainer = (props) => {
  const factCards = props.facts.facts.map((fact,index) => {


    return (
      <FactCard
        type={fact.type}
        text={fact.text}
        found={fact.found}
        year={fact.year}
        number={fact.number}
        key={fact.number}
        id={index}
        checkAnswer={props.checkAnswer}
        addToFavorite={props.addToFavorite}
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
