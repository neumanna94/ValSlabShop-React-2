import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewSlabForm(props){
  let _name = null;
  let _species = null;
  let _drying = null;
  let _length = null;
  let _width = null;
  let _depth = null;
  let _weight = null;
  let _price = null;

  function handleNewSlabFormSubmission(event){
    event.preventDefault();
    props.onNewSlabCreation({name: _name.value, species: _species.value, drying: _drying.value, length: _length.value, width:_width.value, depth:_depth.value, weight: _weight.value, price:_price.value});
    _name = '';
    _species = '';
    _drying = '';
    _length = '';
    _width = '';
    _depth = '';
    _weight = '';
    _price = '';
  }
  return
  <newSlabForm>
    <form onSubmit={handleNewSlabFormSubmission}>
      <input
        type='text'
        id='name'
        placeholder='Name'
        ref={(input) => {_name=input;}}/>
      <input
        type='text'
        id='species'
        placeholder='Species'
        ref={(input) => {_species=input;}}/>
      <input
        type='text'
        id='drying'
        placeholder='Drying'
        ref={(input) => {_drying=input;}}/>
      <input
        type='text'
        id='length'
        placeholder='Length'
        ref={(input) => {_length=input;}}/>
      <input
        type='text'
        id='width'
        placeholder='Width'
        ref={(input) => {_width=input;}}/>
      <input
        type='text'
        id='depth'
        placeholder='Depth'
        ref={(input) => {_depth=input;}}/>
      <input
        type='text'
        id='weight'
        placeholder='Weight'
        ref={(input) => {_weight=input;}}/>
      <input
        type='text'
        id='price'
        placeholder='Price'
        ref={(input) => {_price=input;}}/>
    </form
  </newSlabForm>
}

NewSlabForm.propTypes = {
  onNewSlabCreation: PropTypes.func
};



export default NewSlabForm;
