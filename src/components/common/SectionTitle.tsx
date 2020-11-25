import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

interface Props {
  title: string;
  content: string;
}

const SectionTitle = ({ title, content }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h2">{title}</Typography>
      <Typography component="p">{content}</Typography>
    </div>
  );
};


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: '5rem'
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 800,
    margin: '0 0 20px',
  }
}));

export default SectionTitle;