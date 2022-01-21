import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/globals.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk'
import * as SSSocket from './SSSocket'
import BarraDeDesconeccion from './SSSocket/BarraDeDesconeccion';
import * as FotoPicker from '../src/components/FotoPicker'

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);
SSSocket.init(store);
FotoPicker.setStore(store);
const container = document.getElementById('root');
ReactDOM.render(
  < React.StrictMode >
    <Provider store={store}>
      <BarraDeDesconeccion socketName={"parqueosya"} color={"#000000"} />
      <App />
    </Provider>
  </React.StrictMode >
  , container);

