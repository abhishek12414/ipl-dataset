import React, { Component } from 'react';
import getJson from './fetchAPI';
import './PlayerComponent.css'

class Player extends Component {
    
    state = {
        players: []
    }

    componentWillMount() {
        this.fetchPlayerData(this.props.year, this.props.teamName);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchPlayerData(nextProps.year, nextProps.teamName);        
    }

    fetchPlayerData(year, teamName) {
        getJson(`http://127.0.0.1:8082/api/${year}/${teamName}`)
            .then(players => {
                this.setState({ players: players })
            })
    }

    render() {
        return (
            <div className="Player">
                {
                    this.state.players.map(player => {
                        return <div>{player}</div>
                    })
                }
            </div>
        );
    }
}

export default Player;