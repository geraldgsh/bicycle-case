import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../assets/loaderStyles';

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={100} color="primary" />
    </div>
  );
}
