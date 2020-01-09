import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import MuiTypography from '@material-ui/core/Typography';
import { capitalize } from 'lodash-es';

const styles = (theme: Theme) => ({
  markedH2Center: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH3Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH4Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH6Left: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing(0.5),
    background: 'currentColor',
  },
});

const variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3',
};

interface ITypographyProps { 
    [x: string]: any;
    children: JSX.Element;
    classes: any;
    marked?: false | 'center' | 'left';
    variant?: "button"
            | "caption"
            | "h1"
            | "h2"
            | "h3"
            | "h4"
            | "h5"
            | "h6"
            | "inherit"
            | "subtitle1"
            | "subtitle2"
            | "body1"
            | "body2"
            | "overline"
            | "srOnly";
}

function Typography(props: ITypographyProps) {
  const { children, classes, marked = false, variant, ...other } = props;

  return (
    <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {marked ? (
        <span className={classes[`marked${capitalize(variant) + capitalize(marked)}`]} />
      ) : null}
    </MuiTypography>
  );
}

export default withStyles(styles)(Typography);