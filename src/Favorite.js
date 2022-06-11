import React from 'react';
import FavoriteCard from './FavoriteCard';


const Favorite = ({ favorites }) => {
  console.log(favorites)
  const allFavs = favorites.map(fav => {
    return (
      <FavoriteCard
      key={fav.id}
      id={fav.id}
      number={fav.number}
      text={fav.text}
      type={fav.type}
      year={fav.year}
      />
    )
  })
  return(
    <>
      { allFavs }
    </>
  )
}

export default Favorite;
