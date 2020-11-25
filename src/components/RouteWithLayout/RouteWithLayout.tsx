import React from 'react';
import { Route } from 'react-router-dom';

interface Props {
  exact: boolean;
  path: string;
  layout: React.ComponentType<any>;
  component: React.ComponentType<any>;
}

const RouteWithLayout = ({ layout: Layout, component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;