import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from 'components/RouteWithLayout';
import { Main, Login, RealEstate, LhLeaseNoticeInfo } from 'view';
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
        path="/login"
        component={Login}
        layout={CenterLayout}
      />
      <RouteWithLayout
        exact
        path="/main"
        component={Main}
        layout={MainLayout}
      />
      <RouteWithLayout
        exact
        path="/realestate"
        component={RealEstate}
        layout={MainLayout}
      />
      <RouteWithLayout
        exact
        path="/LhLeaseNoticeInfo"
        component={LhLeaseNoticeInfo}
        layout={MainLayout}
      />
    </Switch>
  );
};

export default Routes;