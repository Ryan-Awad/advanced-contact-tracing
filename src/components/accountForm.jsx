import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';

class AccountForm extends Component {
  render() { 
    // inputs is a array of objects containing info about each info: label text, input type, placeholder and input ID
    // submit is a string that will be rendered on the submit button of the form
    // endpoint is the api endpoint for authentication or registration
    const {inputs, submit, authFunction} = this.props; 
    return (
      <Form className='m-4' style={{width: 300}}>
        <h3 className='mb-3' style={{textAlign: 'center'}}>{this.props.children}</h3>
        {inputs.map(i => {
          const {label, type, placeholder, id} = i;
          return (
            <Form.Group className='mb-3' key={id}>
              <Form.Label className='mb-1'><b>{label}</b></Form.Label>
              <Form.Control type={type} placeholder={placeholder}/>
            </Form.Group>
          );
        })}
        <Button variant='primary mt-2 w-100' onClick={() => authFunction()} type='submit'>{submit}</Button>
      </Form>
    ); 
  }
}
 
export default AccountForm;