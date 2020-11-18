import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <BrowserRouter baseUrl="/MovieApp-With-React">
        <App/>
    </BrowserRouter>
    ,
    document.getElementById('root'));

