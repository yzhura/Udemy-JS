import React, { Component } from 'react'
import Header from '../components/header';

export default class Layout extends Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}
