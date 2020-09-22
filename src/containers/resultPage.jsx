import React from 'react';
import Grid from '@material-ui/core/Grid';
import Results from '../components/results';

export default function ResultPage() {
  return (
    <Grid item height="100%" xs={12} md={9}>
      <Results />
    </Grid>
  );
}
