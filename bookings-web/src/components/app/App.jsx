import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import DetailGetaways from '../../containers/DetailGetaways';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Getaways}
          />
          <Route
            exact
            path="/:id"
            component={DetailGetaways}
          />
        </Switch>
      </Router>
    </div>
  );
}
