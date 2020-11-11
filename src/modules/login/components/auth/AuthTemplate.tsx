import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

interface Props {
  children: JSX.Element
}

const AuthTemplate = ({ children }: Props) => {
  const classes = useStyles();
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
      {children}
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

export default AuthTemplate;