import React from 'react';
import Grid from '@material-ui/core/Grid';
import SideBar from '../components/sideBar';
import ResultPage from '../components/resultPage';

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
