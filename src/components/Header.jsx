import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Val Slab Shop</h1>
      <Link to="/">Home</Link> | <Link to="/View/Marketplace"> Marketplace</Link> | <Link to="/About"> About </Link>
    </div>
  );
}

export default Header;
