import React, { Component } from 'react';
// import InvalidFeedback from '../invalidFeedback';

export default class InputName extends Component {

    renderInput = () => {
        const inputType = 'text';
        const htmlFor = `${inputType}-${Math.random()}`;
        
        const playersArr = this.props.playersArr;
        console.log(playersArr);
        const inputList = playersArr.map((num) => {
            return (
                <React.Fragment key={num.id + Math.random()}>
                    <div key={num.id + Math.random()} className="form-group">
                        <label key={num.id + Math.random()} className="form-control-label mb-0" htmlFor={htmlFor+num.id}>Имя {num.id}-го Манчкина:</label>
                        <input 
                            key={num.id}
                            className="form-control"
                            type={inputType}
                            id={htmlFor+num.id}/>
                    </div>
                 </React.Fragment>
            )
        });
        return inputList
    }

    render() {

        const cls = [
            'is-valid',
            'has-danger'
        ]

        return (
            <React.Fragment>
                {this.props.players == 0 ? null : this.renderInput()}
            </React.Fragment>
        )
    }
}
