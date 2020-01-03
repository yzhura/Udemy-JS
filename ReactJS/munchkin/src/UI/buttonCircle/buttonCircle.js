import React, { Component } from 'react';
import classes from './buttonCircle.module.scss';

export class ButtonCircle extends Component {
    render() {
        return (
            <span 
                className={`btn btn-outline-${this.props.actionType} ${classes.btn} ${this.props.actionName}`}>
                {this.props.actionLabel}
            </span>
        );
    }
}

export default ButtonCircle;
