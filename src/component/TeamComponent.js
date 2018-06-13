import React, { Component } from "react";
import './TeamComponent.css';
import getJson from './fetchAPI'

class Team extends Component {

    state = {
        year: null,
        teams: []
    }

    componentWillReceiveProps(nextProps) {
        getJson(`http://127.0.0.1:8082/api/${nextProps.year}`).then(teams => {
            this.setState({ year: nextProps.year, teams: teams });
        })
    }

    render() {

        const { year, teams } = this.state;

        return (
            (teams.length > 0) ?
                <div>
                    <div className="divYear">{year}</div>
                    <div className="Team">
                        {teams.map((team, index) => {
                            return <div key={index} onClick={() => this.props.teamName(team.team)}>
                                {(team.team) ? team.team : "No Result"}  
                                (<strong>{team.totalWon}</strong>)</div> })}
                                </div></div> : null

        );
    }
}

export default Team;