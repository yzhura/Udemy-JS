import React, { Component } from 'react'
import Header from '../components/header';
import AnimatedBackground from '../components/animatedBackgroud';

export default class Layout extends Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <main>
                    {this.props.children}
                </main>
                <AnimatedBackground/>
            </React.Fragment>
        )
    }
}
