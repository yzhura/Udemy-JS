import React, {Component} from 'react';
import classes from './Drawer.module.scss';
import BackDrop from '../../UI/BackDrop/BackDrop';
import {NavLink} from 'react-router-dom';

const links = [
    {to: '/', label: 'Список', exact: true}, //Если установлен exact prop. Совпадает только строгое сравнение '/roster', но не
    // '/roster/2'
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false}
]

export default class Drawer extends Component {
    
    clickHandler = () => {
        this.props.onClose();
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}>
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer];
        if(this.props.isOpen) {
            cls.push(classes.open);
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {
                    this.props.isOpen
                    ?
                    <BackDrop onClick={this.props.onClose}></BackDrop>
                    :
                    null
                }
            </React.Fragment>
        )
    }
}