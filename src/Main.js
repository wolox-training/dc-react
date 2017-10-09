import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Details from './Details';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route path='/books/:id' component={Details}/>
    </Switch>
  </main>
)
export default Main;
