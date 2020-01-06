import React, { Component } from 'react';
import classes from './game.module.scss';
import { Redirect } from 'react-router-dom';
import ButtonCircle from '../../UI/buttonCircle';
import Backdrop from '../../UI/backdrop';
import TemplateTable from '../../components/templateTable';
import {withRouter} from 'react-router-dom';

class Game extends Component {

    state = {
        playersList: [...this.props.players],
        winner: ''
    }

    updateCounters = (event, index) => {
        let winnerName = '';
        const playersArr = [...this.state.playersList];
        
        if(event.target.classList.contains('levelDown')) {
            playersArr[index].level -= 1;
        } else if(event.target.classList.contains('levelUp')) {
            playersArr[index].level += 1;
        } else if(event.target.classList.contains('straightDown')) {
            playersArr[index].straight -= 1;
        } else if(event.target.classList.contains('straightUp')) {
            playersArr[index].straight += 1;
        }

        playersArr.forEach((el, index) => {
            if(el.level >= 10) {
                winnerName = el.name;
            }
        })

        this.setState({
            playersList: playersArr,
            winner: winnerName
        })
    }

    renderNames = () => {
        return this.state.playersList.map((el, index) => {
            return (
            <tr key={index} onClick={(event) => this.updateCounters(event, index)}>
                <th scope="row">{el.name}</th>
                <td>
                    <div className={classes.contentWrap}>
                        { 
                            el.level > 0 
                            ? 
                            <ButtonCircle actionType='danger' actionLabel='-' actionName='levelDown'/>
                            :
                            <ButtonCircle actionType='success' actionLabel='+' actionName='levelUp'/>
                        }
                        {el.level}
                        <ButtonCircle actionType='success' actionLabel='+' actionName='levelUp'/>
                    </div>
                </td>
                <td>
                    <div className={classes.contentWrap}>
                        { 
                            el.straight > 0 
                            ? 
                            <ButtonCircle actionType='danger' actionLabel='-' actionName='straightDown'/>
                            :
                            <ButtonCircle actionType='success' actionLabel='+' actionName='straightUp'/>
                        }
                        {el.straight}
                        <ButtonCircle actionType='success' actionLabel='+' actionName='straightUp'/>
                    </div>
                </td>
                <th scope="col">
                    <div className={classes.contentWrap}>
                        {el.level + el.straight} ({`${el.level} + ${el.straight}`})
                    </div>
                </th>
            </tr>
            )
        })
    }

    restartGame = () => {
       const oldPlayers = [...this.state.playersList];
       oldPlayers.forEach(el => {
           el.level = 0;
           el.straight = 0;
       })
       this.setState({
           playersList: oldPlayers,
           winner: ''
       })
    }

    startNewGame = async (e) => {
        this.setState({
            playersList: [],
            winner: ''
        });
        this.props.startNewGame();
        this.props.history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                {this.props.redirect ? null : <Redirect from='/game' to='/'/>}
                {!!this.state.winner
                    ?
                    <React.Fragment>
                        <Backdrop/>
                        <div className={`${classes.winnerPopup} alert alert-dismissible alert-success`}>
                            <h1>Победил:</h1>
                            <strong className={classes.winnerName}><p>{`${this.state.winner}`}</p></strong>
                            <ul className={classes.btnList}>
                                <li>
                                    <button 
                                        onClick={(e) => this.startNewGame(e)}
                                        type="submit" 
                                        className="btn btn-primary">
                                            Новая игра
                                    </button>
                                </li>
                                <li >
                                    <button 
                                        onClick={this.restartGame}
                                        type="submit" 
                                        className="btn btn-primary">
                                            Сыграть еще раз
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </React.Fragment>
                    :
                    null
                }
                <TemplateTable renderNames={this.renderNames}/>
            </React.Fragment>
        )
    }
}

export default withRouter(Game);