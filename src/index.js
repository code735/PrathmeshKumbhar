import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ColorModeScript initialColorMode="dark" />
        <ChakraProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
