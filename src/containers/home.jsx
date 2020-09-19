import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  bg: {
    background: "url('https://source.unsplash.com/glMhGidz7eo/640x960') no-repeat center center;",
    height: '100%',
    backgroundSize: 'cover',
  },
  bgColor: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center" className="full-height">
          <Grid height="100%" xs={12} md={3} className={classes.bg}>
            <Grid container justify="center">
              <Box pt={3}>
                <Avatar alt="Random" src="https://picsum.photos/200" className={classes.large} />
              </Box>
            </Grid>
            <h2>
              <h className={classes.bgColor}>
                The case of missing bicycles
              </h>
            </h2>
          </Grid>
          <Grid height="100%" xs={12} md={9}>
            <h3>Case of missing bicycles</h3>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
