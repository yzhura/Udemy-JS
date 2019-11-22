import React, {Component} from 'react';
import classes from './Drawer.module.scss';
import BackDrop from '../../UI/BackDrop/BackDrop';

const links = [1,2,3]

export default class Drawer extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href="#">
                        Link {link};
                    </a>
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