import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import SignUpPage from './components/pages/signUpPage';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/'>
          
        </Route>

        <Route path='/sign-up'>
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
