import React from 'react';
import NewContactForm from './NewContactForm';
import Iframe from 'react-iframe';

function About(){
  return (
    <about>
      <style jsx>{`
        .contactInformation{
          width: 30%;
          height: 400px;
        }
        .map {
          width:70%;
        }
        .container{
          height: 600px;
        }
      `}</style>
      <div className="container">
        <div className='contactInformation'>
          <h2> Contact Information </h2>
          <strong> Address: </strong>
          <br></br>
          <strong> Phone: </strong>
          <br></br>
          <strong> Email: </strong>
          <br></br>
          <div className="map">
            <Iframe width="600px" height="300px" position="relative" url="https://www.google.com/maps/embed/v1/place?q=Salem%20Oregon&key=AIzaSyCmzIEApHK5h4cW-BkTXGCDCWooQWBa1rA"/>
          </div>
        </div>
        <hr></hr>
        <div className="contactUs">
          <h2> Contact us </h2>
          <NewContactForm/>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <hr></hr>
      </div>
    </about>
  );
}
export default About;
