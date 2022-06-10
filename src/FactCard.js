import React from 'react';
import { Link } from 'react-router-dom';
import Answer from './Answer';

const FactCard = ({type, year, text, found, number, id, checkAnswer}) => {
  return (
    <div className='fact-card'>
      <h1>{type}</h1>
      <p>{text}</p>
      <Link to={`/answer/${type}`}>
      <button> Answer </button>
      </Link>
    </div>
  )
}

export default FactCard;
