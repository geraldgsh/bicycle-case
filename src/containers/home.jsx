import React from 'react';
import Grid from '@material-ui/core/Grid';
import SideBar from '../components/sideBar';

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center" className="full-height">
          <SideBar />
          <Grid height="100%" xs={12} md={9}>
            <h3>Case of missing bicycles</h3>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
