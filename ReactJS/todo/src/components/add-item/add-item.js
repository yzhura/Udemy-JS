import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {

    state = {
        label: ''
    };

    constructor() {
        super();

        this.onLabelChange = (event) => {
            const target = event.target.value;
            this.setState({
                label: target
            });
            console.log(this.state.label);
        }

        this.onSubmit = (event) => {
            event.preventDefault();
            const input = document.getElementById('inputItem');
            const itemLength = this.state.label.length;
            if (itemLength === 0) {
                input.classList.add('alert', 'alert-danger');
                input.placeholder = 'Enter something!'
            } else {
                this.props.addNewItem(this.state.label);
                input.classList.remove('alert', 'alert-danger');
                this.setState({
                    label: ''
                })
            }
            
        }
    }

    render() {
        return (
            <form className='item-add-form' onSubmit={this.onSubmit}>
                <input id="inputItem"
                        type="text" 
                        className="form-control" 
                        onChange={this.onLabelChange} placeholder="Type text"
                        value = {this.state.label}/>
                <button type="button"
                        className="btn btn-info" onClick={this.onSubmit}>Add Task</button>
            </form>
        );
    }
}