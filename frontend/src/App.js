import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import CupForm from './components/CupForm';
import CupList from './components/CupList';

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/order" component={CupForm} />
      <Route path="/" component={CupList} />
    </Switch>
  );
};

export default App;
