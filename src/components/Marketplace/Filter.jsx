import React from 'react';

function Filter(){
  return (
    <filter>
    <style jsx>{`
      .section {
        width: 25%;
        float: left;
        text-align: center;
        background-color: yellow;
      }
      .section ul {
        overflow-y: auto;
        height: 150px;
        background-color: green;
      }
      .section ul li {
        background-color: red;
        text-decoration: none;
        list-style-type: none;
      }
      .section h3 {
        display: block;
        background-color: red;
        color: white;
      }
      filter h1 {
        text-align: center;
        background-color: cyan;
        margin-bottom: 0%;
        margin-top: 0%;
      }
    `}</style>
      <h1> Filters </h1>
      <div className = "section">
      <h3> Find by Species </h3>
        <ul>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
        </ul>
      </div>
      <div className = "section">
        <h3> Find by Length </h3>
        <ul>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
        </ul>
      </div>
      <div className = "section">
        <h3> Find by Width </h3>
        <ul>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
        </ul>
      </div>
      <div className = "section">
        <h3> Find by Depth </h3>
        <ul>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
          <li> One </li>
        </ul>
      </div>
    </filter>
  );
}

export default Filter;
