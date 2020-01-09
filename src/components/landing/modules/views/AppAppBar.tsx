import React, { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import { withStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Auth } from 'aws-amplify';
import { URL } from '../../../../Routes';

const styles = (theme: Theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  hidden: {
        display: 'none',
  },
  show: {
    display: 'unset',
},
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

interface IAppAppBarProps {
  classes: any;
  appProps: {
    isAuthenticated: boolean;
    userHasAuthenticated: Dispatch<SetStateAction<boolean>>;
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
  };
};

function AppAppBar(props: IAppAppBarProps) {
  const { classes, appProps } = props;
  const history = useHistory();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={e => appProps.toggleSidebar()}
              className={clsx(appProps.isAuthenticated && !appProps.isSidebarOpen ? classes.show : classes.hidden)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            component={RouterLink}
            to={appProps.isAuthenticated ? URL.DASHBOARD : URL.HOME}
          >
            {'Cognito React Boilerplate'}
          </Link>
          <div className={clsx(classes.right)}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, appProps.isAuthenticated && classes.hidden)}
              component={RouterLink}
              to={URL.SIGNIN}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary, appProps.isAuthenticated && classes.hidden)}
              component={RouterLink}
              to={URL.SIGNUP}
            >
              {'Sign Up'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary, !appProps.isAuthenticated && classes.hidden)}
              onClick={async () => {
                await Auth.signOut();
                appProps.userHasAuthenticated(false);
                history.push(URL.HOME);
              }}
            >
              {'Logout'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

export default withStyles(styles)(AppAppBar);