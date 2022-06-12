import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header-container'> ALL FACTS! </header>
      <Link to='/favorite'>
      <button className='viewFavs-btn'> View Favorite Facts </button>
      </Link>
      <Link to='/'>
      <button className='home-btn'>Home</button>
      </Link>
    </>
  )
}

export default Header;
