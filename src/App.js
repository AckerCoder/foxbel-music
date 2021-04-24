import React from 'react';
import { Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import LoginPage from './pages/login-page/login-page.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/login-page' component={LoginPage}/>
      </Switch>
    </div>
  );
}

export default App;
