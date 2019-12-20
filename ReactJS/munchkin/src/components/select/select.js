import React, { Component } from 'react';

export class Select extends Component {
    render() {
        return (
            <div className="form-group">
            <select 
                value={this.props.playersCounter}
                onChange = {this.props.updatePlayerCounter}
                className="custom-select">
                <option value="0">Открыть</option>
                <option value="3">Три</option>
                <option value="4">Четыре</option>
                <option value="5">Пять</option>
                <option value="6">Шесть</option>
            </select>
        </div>
        );
    }
}

export default Select;
