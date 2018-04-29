import React from 'react';
import { v4 } from 'uuid';

function NewContactForm(props){
  let _name = null;
  let _number = null;
  let _email = null;
  let _issue = null;

  function handleNewContactFormSubmission(event){
    event.preventDefault();
    props.onNewContactFormSubmission({names:_name.value, number: _number.value, email:_email.value, issue: _issues.value});
    _name.value='';
    _number.value='';
    _email.value='';
    _issue.value='';
  }
  return (
    <newContactForm>
      <form onSubmit={handleNewContactFormSubmission}>
        <label>Enter your name</label>
        <br></br>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
          <br></br>
        <label>Enter your number</label>
        <br></br>
        <input
          type='text'
          id='number'
          placeholder='Number'
          ref={(input) => {_number = input;}}/>
          <br></br>
          <label> Enter your Email</label>
          <input
            type='text'
            id='email'
            placeholder='Email'
            ref={(input) => {_email = input;}}/>
          <br></br>
        <label>Enter your message</label>
        <br></br>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
          <br></br>
        <button type='submit'>Submit!</button>
        <br></br>
      </form>
    </newContactForm>
  );
}
NewContactForm.propTypes = {
  onNewContactFormSubmission: PropTypes.func;
}

export default NewContactForm;
