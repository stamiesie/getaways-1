import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import DetailGetaways from '../../containers/DetailGetaways';
import UserRegistration from '../../containers/UserRegistration';
import Header from '../header/Header';


export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Getaways {...routerProps} />}
          />
           <Route
            path="/signup"
            exact
            render={(routerProps) => <UserRegistration {...routerProps} />}
          />
          <Route
            path="/:id"
            exact
            render={(routerProps) => <DetailGetaways {...routerProps} />}
          />
         
        </Switch>
      </Router>
    </div>
  );
}
