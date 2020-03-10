import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from 'theme';
import Routes from './Routes';
import './assets/scss/index.scss';

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
