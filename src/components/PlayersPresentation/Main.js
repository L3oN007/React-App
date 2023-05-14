import React, { Component } from 'react';
import { ListOfPlayers } from '../Share/ListOfPlayers';
import PlayersPresentation from './PlayersPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: ListOfPlayers
        };
    }
    render() {
        return <PlayersPresentation players={this.state.players} />
    }
}
export default Main
