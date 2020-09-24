import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  bgColor: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
}));

export default useStyles;
