import '../style/main.scss';
import 'font-awesome/scss/font-awesome.scss'

// require ('babel-polyfill');
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/app';
import configureStore from './store/configureStore' ;

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('.app-container'));

