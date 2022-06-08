import React from 'react';


const FactCard = ({type, year, text, found}) => {
  return (
    <div className='fact-card'>
      <h1>{type}</h1>
      <h2>{found}</h2>
      <p>{text}</p>
    </div>
  )
}

export default FactCard;
