import React from 'react';

const FavoriteCard = ({type, text, number, year, id}) => {
  return(
    <div className='favorite-card'>
      <h1>{type}</h1>
      <p>{text}</p>
      {type === 'year' ? <p>Answer:{number}</p> : <p>Answer:{year}</p>}
    </div>
  )
}

export default FavoriteCard
