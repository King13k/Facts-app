import React from 'react';
import { Link } from 'react-router-dom';


const FactCard = ({type, year, text, number, addToFavorite}) => {

let factData = {
  type:type,
  year:year,
  text:text,
  number:number
}

  return (
    <div className='fact-card'>
      <h1 className ='fact-type'>{type}</h1>
      <p className='fact-description'>{text}</p>
      <Link to={`/answer/${type}`}>
      <button className='btn'> Answer </button>
      </Link>
      <button className="add-fav" onClick={() => addToFavorite(factData)}> Favorite </button>
    </div>
  )
}

export default FactCard;
