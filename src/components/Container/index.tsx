import React from 'react';

import 'typeface-roboto';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';

import Routes from '../../Routes';
import Header from '../Header';
import Footer from '../Footer';
import { ContainerMain, Content } from './styles';
import GlobalStyle from '../Generals/GlobalStyles';

const Container: React.FC = () => {
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

      <BrowserRouter>
        <ContainerMain>
          <GlobalStyle />

          <Header />

          <Content>
            <Routes />

            <Footer />
          </Content>
        </ContainerMain>
      </BrowserRouter>
    </>
  );
};

export default Container;
