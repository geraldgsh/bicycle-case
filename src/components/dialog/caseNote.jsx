/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { DialogTitle, DialogContent, DialogActions } from './dialogHelper';
import useStyles from '../../assets/caseNoteStyles';

export default function CaseNote(info) {
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
}
