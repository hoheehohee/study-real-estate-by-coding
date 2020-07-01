import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import AuthForm from './components/AuthForm';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Typography className={classes.logo} variant="h5" color="inherit">
          hohee hohee
        </Typography>
      </Grid>
      <AuthForm />
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '2rem',
    width: 360,
  },
  logo: {
    fontWeight: 'bold',
    paddingBottom: '2rem'
  }
}));

export default Login;