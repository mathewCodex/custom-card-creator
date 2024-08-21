import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from '../store/store';
import App from './app';

interface Props {
  store: ReturnType<typeof configureStore>
};

const Root : React.FC<Props> = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;