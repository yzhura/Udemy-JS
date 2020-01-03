import React, { Component } from 'react';
import classes from './templateTable.module.scss';

export class TemplateTable extends Component {
    render() {
        return (
            <div className="container">
                <div className="table-responsive">
                    <table className={`table table-hover mt-3 ${classes.table}`}>
                        <thead>
                            <tr>
                                <th scope="col">Ник:</th>
                                <th scope="col">Ур.:</th>
                                <th scope="col">Сила:</th>
                                <th scope="col">Общий:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.renderNames()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TemplateTable;
