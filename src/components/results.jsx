import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import {
  List, ListItem, makeStyles, Divider, Box,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Loader from '../elements/loader';
import CaseNote from './dialog/caseNote';

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

export default function Results() {
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
      <h3 className={classes.error}>{error}</h3>
    );
  }
  if (reports && reports.length === 0) {
    return (
      <h3 className={classes.error}>No Results</h3>
    );
  }
  if (loading === true) {
    return (
      <Loader />
    );
  }
  return (
    <div>
      <List dense component="span">
        {reports ? reports
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map(report => {
            const labelId = `list-secondary-label-${report.title}`;
            return (
              <ListItem
                key={report.id}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${report.title}`}
                    src={report.media.image_url_thumb}
                    className={classes.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  primary={report.title}
                  secondary={report.description}
                  className={classes.item}
                />
                <CaseNote info={report} />
              </ListItem>
            );
          }) : null}
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
    </div>
  );
}
