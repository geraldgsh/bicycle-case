import { makeStyles } from '@material-ui/core';

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

export default useStyles;
