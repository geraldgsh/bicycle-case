/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { reportBegin, reportSuccess, reportFailure } from '../actions/index';
import useStyles from '../assets/queryStyles';

export default function Query() {
  const classes = useStyles();
  const [caseTitle, setCaseTitle] = useState();
  const [selectedStartDate, setStartDate] = useState();
  const [selectedEndDate, setEndDate] = useState();
  const [caseCount, setCaseCount] = useState();
  let page; let perPage; let incidentType; let proximity; let proximitySquare;

  const params = new URLSearchParams();
  page && params.append('page', page);
  perPage && params.append('per_page', perPage);
  selectedStartDate && params.append('occurred_after', selectedStartDate);
  selectedEndDate && params.append('occurred_before', selectedEndDate);
  params.append('incident_type', incidentType || 'theft');
  params.append('proximity', proximity || 'Berlin');
  params.append('proximity_square', proximitySquare || '100');
  caseTitle && params.append('query', caseTitle);
  const bikeWise = `https://bikewise.org:443/api/v2/incidents?${params}`;
  const dispatch = useDispatch();
  const handleStartDateChange = date => {
    setStartDate(date.getTime() / 1000.0);
  };

  const handleEndDateChange = date => {
    setEndDate(date.getTime() / 1000.0);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(reportBegin());
    axios(bikeWise)
      .then(response => {
        dispatch(reportSuccess(response.data.incidents));
        setCaseCount(response.data.incidents.length);
      })
      .catch(error => {
        dispatch(reportFailure(error.response.data.error));
      });
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container justify="center">
          <div className={classes.bgColor}>
            <TextField
              id="standard-textarea"
              label="Case Title"
              placeholder="Case Title"
              multiline
              value={caseTitle}
              onChange={e => setCaseTitle(e.target.value)}
            />
          </div>
        </Grid>
      </form>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            className={classes.bgColor}
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Start Date"
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            className={classes.bgColor}
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="End Date"
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        endIcon={<SearchIcon />}
        onClick={e => handleSubmit(e)}
      >
        Send
      </Button>
      {caseCount ? (
        <h3>
          <p className={classes.bgColor}>
            Number of Cases:
            {' '}
            <b>{caseCount}</b>
          </p>
        </h3>
      ) : null}
    </div>
  );
}