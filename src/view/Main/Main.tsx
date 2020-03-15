import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SampleTable } from './components';

const Main = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <SampleTable />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>xs=12 lg=6</Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>xs=12 lg=6</Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>xs=12 lg=6</Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>xs=12 lg=6</Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>xs=12 lg=6</Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  paper: {
    display: 'flex',
    minHeight: 350,
    height: '100%',
    background: '#262626',
    padding: theme.spacing(1)
  },
}));


export default Main;