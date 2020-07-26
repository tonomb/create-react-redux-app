import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import 'reset-css'
import './styles/App.scss';

function App() {
  return (
   
    <Switch>   
      <Route path='/'>
        <h1>Create React App - Redux Skeleton</h1>
      </Route>
    </Switch>
  );
}

export default App;
