import React, { Component } from 'react';
import classes from './header.module.scss';

export default class Header extends Component {
    render() {
        return (
            <header className='pb-2 pt-2'>
                <h1 className={`${classes.Title} mb-0 text-center w-100`}>
                    Munchkin
                </h1>
            </header>
        )
    }
}
