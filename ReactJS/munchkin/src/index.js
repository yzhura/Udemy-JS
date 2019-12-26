import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {BrowserRouter} from 'react-router-dom';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

