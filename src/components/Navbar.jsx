import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <navbar>
      <style jsx>{`
        navbar a {
          text-decoration: none;
          color: white;
          margin-right: 5%;
          margin-left: 7.5%;
        }
        navbar a:hover {
          color: red;
        }
      `}</style>
      <Link to="/">ABOUT US</Link><Link to="/View/Marketplace"> SLABS </Link><Link to="/About"> CONTACT US </Link><Link to="/Admin"> Admin Panel </Link>
    </navbar>
  );
}

export default Navbar;
