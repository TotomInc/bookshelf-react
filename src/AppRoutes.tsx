import * as React from 'react';
import { RouteProps, BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';
import { BookList } from './features/book-list/BookList';

export type ProtectedRouteProps = RouteProps & {
  component: React.FC;
};

/**
 * A protected `react-router-dom` `<Route />` component that need the user to
 * have a `token` set in the `UserContext`.
 *
 * Automatically redirect to `/` if the condition is not satisfied.
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...props }) => {
  const { token } = React.useContext(UserContext);

  return (
    <Route
      {...props}
      render={(renderProps) => {
        if (token) {
          return <Component />;
        }

        return <Redirect to={{ pathname: '/', state: { from: renderProps.location } }} />;
      }}
    />
  );
};

/**
 * Contains entire app routing logic with components to display for each route.
 */
export const AppRoutes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <p>Login page to-do</p>
      </Route>

      <ProtectedRoute path="/book-list" component={BookList} />
    </Switch>
  </Router>
);
