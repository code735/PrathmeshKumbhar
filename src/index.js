import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Redux/Store.js';

ReactDOM.render(
    <React.StrictMode>
        <ColorModeScript initialColorMode="light" />
        <Provider store={store}>
            <ChakraProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
