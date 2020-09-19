import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  bg: {
    background: "url('https://source.unsplash.com/GxEC8q7lm-M/640x960') no-repeat center center;",
    height: '100%',
    backgroundSize: 'cover',
  },
  bgColor: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  button: {
    margin: theme.spacing(1),
    color: 'white',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    fontWeight: '700',
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const [caseTitle, setCaseTitle] = React.useState();
  const [selectedStartDate, setStartDate] = React.useState(new Date('2019-08-18T21:11:54'));
  const [selectedEndDate, setEndDate] = React.useState(new Date('2020-08-18T21:11:54'));

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  return (
    <Grid height="100%" xs={12} md={3} className={classes.bg}>
      <Grid container justify="center">
        <Box pt={3}>
          <Avatar alt="Random" src="https://randomuser.me/api/portraits/lego/0.jpg" className={classes.large} />
        </Box>
      </Grid>
      <h2>
        <h className={classes.bgColor}>
          The case of missing bicycles
        </h>
      </h2>
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
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Start Date"
            value={selectedStartDate}
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
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="End Date"
            value={selectedEndDate}
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
      >
        Send
      </Button>
    </Grid>
  );
}
