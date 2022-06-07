import React, { Component } from 'react';
import AccountForm from '../accountForm';

class SignUpPage extends Component {
  render() { 
    return (
      <React.Fragment>
        <AccountForm 
          inputs={[
            {label: 'First name', placeholder: 'First name', type: 'input', id: 1},
            {label: 'Last name', placeholder: 'Last name', type: 'input', id: 2},
            {label: 'Email address', placeholder: 'Email', type: 'email', id: 3},
            {label: 'Password', placeholder: 'Password', type: 'password', id: 4}
          ]}
          submit='Sign Up ↑'
          authFunction={null}
        />
      </React.Fragment>
    );
  }
}
 
export default SignUpPage;
