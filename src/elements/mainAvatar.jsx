import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import useStyles from '../assets/mainAvatarStyles';

export default function MainAvatar() {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center">
        <Box pt={3}>
          <Avatar
            alt="Random"
            src="https://randomuser.me/api/portraits/lego/0.jpg"
            className={classes.large}
          />
        </Box>
      </Grid>
      <h2>
        <p className={classes.bgColor}>
          The case of missing bicycles
        </p>
      </h2>
    </div>
  );
}
