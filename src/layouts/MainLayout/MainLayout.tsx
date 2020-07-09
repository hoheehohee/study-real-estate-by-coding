import * as React from 'react';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';


import { logout } from 'modules/user';
import { UserDto } from 'lib/dto/auth';

import { TopBar, Sidebar, Footer } from './components';

interface Props {
  children: React.ComponentType<any>;
};

interface UseState {
  user: {
    user: UserDto
  }
};

const MainLayout = ({ children, history }: Props & RouteComponentProps) => {
  const classes = useStyles();
  const theme = useTheme();

  const { useState, useEffect } = React;
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }: UseState) => ({
    user: user.user
  }))

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);
  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const onLogout = () => {
    dispatch(logout());
  }

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [history, user]);


  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <TopBar 
        onLogout={onLogout}
        onSidebarOpen={handleSidebarOpen} 
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    height: '100%',
    padding: '3.75rem',
  }
}));

export default withRouter(MainLayout);