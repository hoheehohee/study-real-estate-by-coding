import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from 'components/RouteWithLayout';
import { Main, Login } from 'view';
import { MainLayout, CenterLayout } from 'layouts';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/login"
      />
      <RouteWithLayout
        exact
        path="/main"
        component={Main}
        layout={MainLayout}
      />
      <RouteWithLayout
        exact
        path="/login"
        component={Login}
        layout={CenterLayout}
      />
    </Switch>
  );
};

export default Routes;