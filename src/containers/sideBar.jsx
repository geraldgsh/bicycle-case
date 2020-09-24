import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainAvatar from '../elements/mainAvatar';
import Query from '../components/query';
import useStyles from '../assets/sideBarStyles';

export default function SideBar() {
  const classes = useStyles();
  return (
    <Grid item height="100%" xs={12} md={3} className={classes.bg}>
      <MainAvatar />
      <Query />
    </Grid>
  );
}
