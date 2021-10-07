import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { BookList } from './features/book-list/BookList';

export const AppRoutes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <BookList />
      </Route>
    </Switch>
  </Router>
);
