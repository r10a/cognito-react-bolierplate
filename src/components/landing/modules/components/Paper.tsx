import React from 'react';
import clsx from 'clsx';
import MuiPaper from '@material-ui/core/Paper';
import { capitalize } from 'lodash-es';
import { withStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  backgroundLight: {
    backgroundColor: theme.palette.secondary.light,
  },
  backgroundMain: {
    backgroundColor: theme.palette.secondary.main,
  },
  backgroundDark: {
    backgroundColor: theme.palette.secondary.dark,
  },
  padding: {
    padding: theme.spacing(1),
  },
});

interface IPaperProps { 
    [x: string]: any;
    background?: 'light' | 'main' | 'dark';
    classes: any;
    className?: any;
    padding?: boolean;
}

function Paper(props: IPaperProps) {
  const { background = 'light', classes, className, padding = false, ...other } = props;
  return (
    <MuiPaper
      elevation={0}
      square
      className={clsx(
        classes[`background${capitalize(background)}`],
        {
          [classes.padding]: padding,
        },
        className,
      )}
      {...other}
    />
  );
}

export default withStyles(styles)(Paper);