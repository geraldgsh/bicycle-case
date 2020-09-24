import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
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

export default useStyles;
