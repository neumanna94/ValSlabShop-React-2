import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <style jsx>{`
        header {
          background-color: grey;
        }
        jumbotron {
          text-align: center;
          background-color: grey;
        }
        linkContainer {
          margin-left: 23.5%;
        }
        linkContainer a {
          text-decoration: none;
          color: white;
          margin-left: 10%;
        }
        linkContainer a:hover {
          color: red;
        }
      `}</style>

      <jumbotron>
        <h1> Val Gnot and Grain Slabs </h1>
        <linkContainer><Link to="/">Home</Link><Link to="/View/Marketplace"> Marketplace</Link><Link to="/About"> About </Link></linkContainer>
      </jumbotron>

    </header>
  );
}
export default Header;
