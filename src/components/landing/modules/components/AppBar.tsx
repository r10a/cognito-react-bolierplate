import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import MuiAppBar, { AppBarProps } from '@material-ui/core/AppBar';

const styles = (theme: Theme) => ({
  root: {
    color: theme.palette.common.white,
  },
});

function AppBar(props: AppBarProps) {
  return <MuiAppBar elevation={0} position="static" {...props} />;
}

export default withStyles(styles)(AppBar);