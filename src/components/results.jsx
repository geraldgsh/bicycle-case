/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import {
  List, ListItem, makeStyles, Divider, Box,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Loader from '../elements/loader';

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

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const {
    children, classes, onClose, ...other
  } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CaseNote = info => {
  const classes = useStyles();
  const theft = new Date(info.info.occurred_at * 1000).toDateString();
  const reported = new Date(info.info.updated_at * 1000).toDateString();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle>
          {info.info.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {
              info.info.description
                ? info.info.description
                : <em>No description given</em>
            }
            <br />
            <br />
          </Typography>
          <Typography gutterBottom>
            Date of theft:
            {' '}
            <b>{theft}</b>
          </Typography>
          <Typography gutterBottom>
            Date of report:
            {' '}
            <b>{reported}</b>
          </Typography>
          <br />
          {
            info.info.media.image_url
              ? <CardMedia className={classes.media} image={info.info.media.image_url} />
              : <em>No image provided</em>
          }
          <br />
          <Typography gutterBottom>
            <br />
            Location of theft:
            {' '}
            <u>{info.info.address}</u>
            <br />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

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
    </Grid>
  );
}
