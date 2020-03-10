import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer } from '@material-ui/core';
import { Dashboard } from '@material-ui/icons';

import { SidebarNav, Days } from './components';

interface Props {
  open: boolean
  className?: any
  variant?: 'permanent' | 'persistent' | 'temporary';
  onClose(): void;
}

export interface Pages {
  title: string;
  href: string;
  icon: JSX.Element;
}

const Sidebar = ({ open, variant, onClose, className, ...rest }: Props) => {
  const classes = useStyles();
  const pages: Pages[] = [
    { title: 'Dashboard', href: '/dashboard', icon: <Dashboard /> }
  ]
  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      > 
        <Days />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    border: `1px solid ${theme.palette.white}`,
    borderBottom: 'none',
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    borderRight: 'none',
    backgroundColor: theme.palette.bgColor,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

export default Sidebar;