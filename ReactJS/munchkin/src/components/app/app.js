import React, { Component } from 'react';
import './app.scss';
import Header from '../header';
import IntroForm from '../introForm';

export class App extends Component {

    render() {
        return (
            <div className='container'>
                <Header/>
                <IntroForm/>
            </div>
        );
    }
}

export default App;
