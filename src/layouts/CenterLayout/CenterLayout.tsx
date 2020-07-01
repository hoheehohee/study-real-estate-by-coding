import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
  children: React.Component<any>;
}

const CenterLayout = ({ children }: Props ) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div className={classes.center}>
            {children}
          </div>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default CenterLayout;