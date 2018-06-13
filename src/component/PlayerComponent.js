import React, { Component } from 'react';
import getJson from './fetchAPI';
import './PlayerComponent.css'

class Player extends Component {
    
    state = {
        year: null,
        team: null,
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
                this.setState({ year: year, team: teamName, players: players })
            })
    }

    render() {
        const { year, team, players } = this.state;
        return (
            <div>
                <div className="divPlayer"> Players of { team } ({year})</div> 
                <div className="Player">
                    {
                        players.map((player, index)=> {
                            return <div key={index}>{player}</div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Player;