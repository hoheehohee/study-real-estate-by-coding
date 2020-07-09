import * as React from 'react';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Typography, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    background: theme.palette.bgColor,
    border: `1px solid #4A4D56`
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  img: {
    width: 30
  },
  title: {
    padding: '1rem'
  }
}));

interface Props {
  className?: any;
  onLogout(): void;
  onSidebarOpen(): void;
}

const TopBar = ({ className, onLogout, onSidebarOpen, ...rest }: Props) => {
  const { useState } = React;
  const classes = useStyles();
  const [notifications] = useState([]);
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/me.png"
            className={classes.img}
          />
        </RouterLink>
        <Typography className={classes.title} variant="h4" >Hohee's Miscellaneous coding study</Typography>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="default">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Tooltip title="로그아웃" aria-label="로그아웃">
            <IconButton
              color="default"
              onClick={onLogout}
              className={classes.signOutButton}
            >
              <InputIcon />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;