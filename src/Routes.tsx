import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from 'components/RouteWithLayout';
import { Main } from 'view';
import { MainLayout } from 'layouts';


const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/main"
      />
      <RouteWithLayout
        exact
        path="/main"
        component={Main}
        layout={MainLayout}
      />
    </Switch>
  );
};

export default Routes;