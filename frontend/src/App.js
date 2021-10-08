import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import User from './Components/user';
import Admin from './Components/admin';


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path="/" component={User} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
