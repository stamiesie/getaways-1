import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../header/Header';
import Getaways from '../../containers/Getaways';
import UserRegistration from '../../containers/UserRegistration';
import LoginContainer from '../../containers/LoginContainer';
import DetailGetaways from '../../containers/DetailGetaways';


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
            path="/login"
            exact
            render={(routerProps) => <LoginContainer {...routerProps} />}
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
