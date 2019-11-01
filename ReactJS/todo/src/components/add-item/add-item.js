import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {

    render() {
        const {addNewItem} = this.props;
        return (
            <div className='item-add-form'>
                <button type="button"
                        className="btn btn-info"
                        onClick={() => addNewItem('123')}>Add Task</button>
            </div>
        );
    }
}