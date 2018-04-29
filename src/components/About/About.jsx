import React from 'react';
import Iframe from 'react-iframe';

function About(){
  return (
    <about>
      <style jsx>{`
        body{
          color:red;
        }
        .contact{
          width: 50%;
          height: 450px;
        }
        .map {
          width:50%;
          float:right;
        }
        .container{
          height: 450px;
        }
      `}</style>
      <div className="container">
        <div className="map">
          <Iframe width="600px" height="400px" position="relative" url="https://www.google.com/maps/embed/v1/place?q=Salem%20Oregon&key=AIzaSyCmzIEApHK5h4cW-BkTXGCDCWooQWBa1rA"/>
        </div>
        <div className='contact'>
          <strong> Address: </strong>
          <br></br>
          <strong> Phone: </strong>
          <br></br>
          <strong> Email: </strong>
          <br></br>
          <strong> Description: </strong><p> Gangsta ipsizzle away daahng dawg shizzle my nizzle crocodizzle, consectetizzle adipiscing elit. Nullizzle sapizzle uhuh ... yih!, sizzle volutpizzle, suscipit quis, gravida vel, arcu. Pellentesque eget tortizzle. Ass erizzle. Fo shizzle dang dolor yo mamma da bomb tempizzle crunk. Mauris pellentesque nibh mah nizzle turpizzle. I'm in the shizzle shit tortizzle. Pellentesque eleifend rhoncizzle shizzle my nizzle crocodizzle. In hac yo mamma platea dictumst</p>
        </div>
        <hr></hr>
      </div>
    </about>
  );
}
export default About;
