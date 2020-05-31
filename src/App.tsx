import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { useTranslation } from "react-i18next";
import { site } from "./configs/site-env";
import Routes from "./Routes";

const useStyles = makeStyles(( theme ) => ( {
  footer: {
    padding: theme.spacing(4),
  },
} ));

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    type: "dark",
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <MuiThemeProvider theme={ theme }>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              { t('site.name') }
            </Typography>
          </Toolbar>
        </AppBar>

        <Routes />

        <footer className={ classes.footer }>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            { t('site.shortDescription') }
          </Typography>

          <Typography variant="body2" color="textSecondary" align="center">
            { 'Copyright © ' }
            <Link color="inherit" href="https://material-ui.com/">
              { t('site.name') } { site.version }
            </Link>{ ' | ' }
            { new Date().getFullYear() } { '.' }
          </Typography>

        </footer>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App
