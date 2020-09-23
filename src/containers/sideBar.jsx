import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainAvatar from '../elements/mainAvatar';
import Query from '../components/query';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  bg: {
    background: "url('https://source.unsplash.com/GxEC8q7lm-M/640x960') repeat center center;",
    height: '100%',
    backgroundSize: 'cover',
  },
}));

export default function SideBar() {
  const classes = useStyles();
  return (
    <Grid item height="100%" xs={12} md={3} className={classes.bg}>
      <MainAvatar />
      <Query />
    </Grid>
  );
}
