import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
ReactDOM.render(

    <ChakraProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChakraProvider>

    , document.getElementById('root')
);
