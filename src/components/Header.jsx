import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing/Landing';
function Header(){
    return (
      <header>
      <Navbar />
        <style jsx>{`
          header {
            background-color: grey;
            color: white;
            text-align: center;
          }
          jumbotron {
            text-align: center;
            background-color: silver;
          }
          .imageDisplay {
            background-image:
            width: 100%;
            height: 100px;
          }
        `}</style>
        <h1> Val Gnot and Grain Slabs </h1>
        <div className ="imageDisplay">
        </div>
      </header>
    );
  }
export default Header;
