/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import {
  List, makeStyles, Divider, Box,
} from '@material-ui/core';
import Loader from '../elements/loader';
import Results from '../components/results';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    padding: theme.spacing(1.2),
  },
  avatar: { marginRight: theme.spacing(5) },
  paginator: {
    justifyContent: 'center',
    padding: '10px',
  },
  media: {
    minHeight: '294px',
    minWidth: '394px',
  },
  error: {
    color: 'red',
    marginTop: '25%',
  },
}));

export default function ResultPage() {
  const classes = useStyles();
  const { loading, reports, error } = useSelector(
    state => ({
      loading: state.reports.loading,
      reports: state.reports.reports,
      error: state.reports.error,
    }),
  );
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState();
  useEffect(() => {
    if (reports) {
      setNoOfPages(Math.ceil(reports.length / itemsPerPage));
    }
  }, [reports]);

  const handleChange = (_event, value) => {
    setPage(value);
  };
  if (error) {
    return (
      <Grid item height="100%" xs={12} md={9}>
        <h3 className={classes.error}>{error}</h3>
      </Grid>
    );
  }
  if (loading === true) {
    return (
      <Grid item height="100%" xs={12} md={9}>
        <Loader />
      </Grid>
    );
  }
  return (
    <Grid item height="100%" xs={12} md={9}>
      <List dense component="span">
        {reports ? <Results reports={reports} /> : null}
      </List>
      {reports
        ? (
          <div>
            <Divider />
            <Box component="span">
              <Pagination
                count={noOfPages}
                page={page}
                onChange={handleChange}
                defaultPage={1}
                color="primary"
                size="large"
                showFirstButton
                showLastButton
                classes={{ ul: classes.paginator }}
              />
            </Box>
          </div>
        )
        : null }
    </Grid>
  );
}
