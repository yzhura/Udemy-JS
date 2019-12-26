import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <button 
            type="submit" 
            className="btn btn-primary">
                {this.props.label}
            </button>
        )
    }
}
