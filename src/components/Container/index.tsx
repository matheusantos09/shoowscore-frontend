import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom';

import Routes from '../../Routes';
import Header from '../Header';
import Footer from '../Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4, 2),
    margin: '64px auto 0 auto',
    maxWidth: '1336px',
  },
}));

let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          minHeight: '100vh',
          width: '100%',
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    type: 'dark',
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
        <CssBaseline />

        <BrowserRouter>
          <div className={classes.root}>
            <Header />

            <main className={classes.content}>
              <Routes />

              <Footer />
            </main>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </>
  );
};

export default Container;
