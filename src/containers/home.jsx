import React from 'react';
import Grid from '@material-ui/core/Grid';
import SideBar from './sideBar';
import ResultPage from './resultPage';

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center" className="full-height">
          <SideBar />
          <ResultPage />
        </Grid>
      </Grid>
    </Grid>
  );
}
