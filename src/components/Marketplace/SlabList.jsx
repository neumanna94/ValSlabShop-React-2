import React from 'react';
import PropTypes from 'prop-types';
import Slab from './Slab';

function SlabList(props){
  return (
    <slablist>
      Slablist will get pass corresponding slab properties into a slab from here.
      App will contain the slabList that will be generated in Slab.
      Therefore SlabList will be a stateful component.
      <hr/>
      {props.slabList.map((slab) =>
        <Slab name={slab.name}
          species={slab.species}
          drying={slab.drying}
          length={slab.length}
          width={slab.width}
          depth={slab.depth}
          weight={slab.weight}
          price={slab.price}
          key={slab.id}/>
      )}
    </slablist>
  );
}

SlabList.propTypes = {
  slabList: PropTypes.array
};
export default SlabList;
