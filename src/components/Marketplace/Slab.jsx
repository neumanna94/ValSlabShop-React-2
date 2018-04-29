import React from 'react';
import PropTypes from 'prop-types';
function Slab(props){
  return (
    <slab>
      <h3>{props.name}</h3>
      <h3>{props.species}</h3>
      <h3>{props.drying}</h3>
      <h3>{props.length}</h3>
      <h3>{props.width}</h3>
      <h3>{props.height}</h3>
      <h3>{props.weight}</h3>
      <h3>{props.price}</h3>
    </slab>);
}

Slab.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  drying: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Slab;
