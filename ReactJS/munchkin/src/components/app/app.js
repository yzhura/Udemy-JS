import React, { Component } from 'react';
import './app.scss';
import IntroForm from '../introForm';
import Layout from '../../hoc/Layout.js';
import Game from '../game';
import {Route, Switch, Redirect} from 'react-router-dom';

export class App extends Component {

    state = {
        redirect: false,
        playersList: []
    }

    getPlayers = (playersArr, validation) => {
        this.setState({
            redirect: validation,
            playersList: playersArr
        });
    }

    render() {
        return (
            <Layout>
                {/* <Switch>
                    <Route path='/game' component={Game}></Route>
                    <Route 
                        path='/' 
                        component={() => <IntroForm getPlayers={this.getPlayers} />}
                    ></Route>
                </Switch> */}
                {
                    !this.state.redirect
                    ?
                    <IntroForm getPlayers={this.getPlayers}/>
                    :
                    <Game players={this.state.playersList}/>
                }
            </Layout>
        )
    }
}

export default App;
