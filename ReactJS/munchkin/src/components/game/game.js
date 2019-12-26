import React, { Component } from 'react';
import './game.scss';

export default class Game extends Component {

    renderNames = () => {
        return this.props.players.map((el, index) => {
            return (
            <tr>
                <th scope="row">{el}</th>
                <td><span>-</span> 0 <span>+</span></td>
                <td>0</td>
            </tr>
            )
        })
    }

    render() {
        console.log(this.renderNames());
        return (
            <div className="container">
                <table className="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Никнейм:</th>
                            <th scope="col">Уровень:</th>
                            <th scope="col">Сила:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderNames()}
                    </tbody>
                </table>
            </div>
        )
    }
}
