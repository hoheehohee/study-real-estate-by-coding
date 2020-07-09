import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

moment.locale('ko');

const DayItem = ({ id, title }: any) => {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.area}
      >
        <span className={classes.count}>{id}</span>
        {title}
      </Grid>
    </Grid>
  )
}

const Days = () => {
  const classes = useStyles();
  const date = new Date();
  const items = [
    { title: moment(date).format("YY")},
    { title: moment(date).format("MM")},
    { title: moment(date).format("DD")},
    { title: moment(date).format("ddd")},
  ]
  
  return (
    <Grid container className={classes.root} spacing={2}>
      {
        items.map((item: any, idx: number) => (
          <DayItem key={idx} id={idx} title={item.title}/>
        ))
      }
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-item': {
      '&:last-child': {
        borderRight: 'none'
      },
      padding: '0 8px',
      height: 57,
      borderRight: `1px solid #4A4D56`
    },
  },
  area: {
    position: 'relative',
    height: 67,
    fontSize: 24,
    color: '#ffffff'
  },
  count: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 12,
    color: 'rgb(224, 228, 228)',
    opacity: 0.35,
    fontWeight: 300,
  }
}));

export default Days;