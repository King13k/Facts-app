import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header-container'> All Facts! </header>
      <Link to='/favorite'>
      <button> Favorite Facts </button>
      </Link>
      <Link to='/'>
      <button>Home</button>
      </Link>
    </>
  )
}

export default Header;
