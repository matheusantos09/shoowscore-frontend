import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, makeStyles, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

import Routes from "../../Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const useStyles = makeStyles(( theme ) => ( {
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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

function ContainerDefault() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={ theme }>
      <div className={ classes.root }>
        <CssBaseline />

        <Header />

        <main className={ classes.content }>
          <div className={ classes.toolbar } />

          <Routes />

          <Footer />

        </main>
      </div>
    </MuiThemeProvider>
  );
}

export default ContainerDefault
