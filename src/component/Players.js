import React, { Component } from 'react';
import getJson from '../fetchAPI';
import './Players.css'

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
        if (teamName) {
            getJson(`http://127.0.0.1:8082/api/${year}/${teamName}`)
                .then(players => {
                    this.setState({ year: year, team: teamName, players: players })
                })
        } else {
            this.setState({ players: [] })
        }
    }

    render() {
        const { year, team, players } = this.state;

        return (
            (players.length > 0) ?
                <div>
                    <div className="divPlayer"> Players of {team} ({year})</div>
                    <div className="Player">
                        {
                            players.map((player, index) => {
                                return <div onClick={() => this.props.onPlayerClicked({ player })} key={index}>{player}</div>
                            })
                        }
                    </div>
                </div>
                : null
        );
    }
}

export default Player;