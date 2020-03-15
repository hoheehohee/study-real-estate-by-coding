import React from 'react';
import clsx from 'clsx';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  className?: any;
}

const Footer = ({ className, ...rest }: Props) => {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="https://devias.io/"
          target="_blank"
        >
          hoheehohee
        </Link>
        . 2020
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

export default Footer;