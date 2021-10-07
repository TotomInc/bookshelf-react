import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const AppRoutes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact />
    </Switch>
  </Router>
);
