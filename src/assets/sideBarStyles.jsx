import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  bg: {
    background: "url('https://source.unsplash.com/GxEC8q7lm-M/640x960') repeat center center;",
    height: '100%',
    backgroundSize: 'cover',
  },
}));

export default useStyles;
