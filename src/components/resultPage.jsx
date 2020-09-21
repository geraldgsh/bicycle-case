import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {
  List, ListItem, makeStyles, Divider, Box,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { BugReportSharp } from '@material-ui/icons';

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
}));

export default function SideBar() {
  const classes = useStyles();
  const reports = useSelector(state => state.reports[0]);
  return (
    <Grid item height="100%" xs={12} md={9}>
      <List dense component="span">
        {reports ? reports
          .map(report => {
            const labelId = `list-secondary-label-${report.title}`;
            return (
              <ListItem
                key={report.id}
                button
                onClick={() => console.log(report.id)}
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
              </ListItem>
            );
          }) : null}
      </List>
    </Grid>
  );
}
