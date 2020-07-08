import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer } from '@material-ui/core';
import { InsertChart, Apartment, Home, LibraryBooks } from '@material-ui/icons';

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
  children?: Pages[]
}

const Sidebar = ({ open, variant, onClose, className, ...rest }: Props) => {
  const classes = useStyles();

  // LNB 목록
  const pages: Pages[] = [
    { 
      title: 'Dashboard', href: '/main', icon: <InsertChart /> 
    },
    { 
      title: 'Real Estate', 
      href: '/realestate', 
      icon: <Home />,
      children: [
        { title: '분양임대 공고문', href: '/main', icon: <Apartment /> },
        { title: '청약센터 공지사항', href: '/main', icon: <LibraryBooks /> }
      ]
    },
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
        {/** 날짜 */}
        <Days />
        <Divider className={classes.divider} />
        {/** LNB 리스트 */}
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
    border: `1px solid #4A4D56`,
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