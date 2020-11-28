import React from 'react';

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, makeStyles, MuiThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';

import {BrowserRouter} from "react-router-dom";

import Routes from "../../Routes";
import Header from "../Header";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
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
    // padding: theme.spacing(3),
    marginTop: 64
  },
}));

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

const Container: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={classes.root}>
            <CssBaseline />

            <Header />

            <main className={classes.content}>
              {/* <div className={ classes.toolbar } /> */}

              <Routes />

              <Footer />
            </main>

          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </>
  );
}

export default Container;
