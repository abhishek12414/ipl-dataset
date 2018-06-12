import React, { Component } from "react";
import './TeamComponent.css';
import getJson from './fetchAPI'

class Team extends Component {

    state = {
        teams: []
    }

    componentWillReceiveProps(nextProps) {
        getJson(`http://127.0.0.1:8082/api/${nextProps.year}`).then(teams => {
            this.setState({ teams: teams });
        })
    }

    render() {

        const { teams } = this.state;

        return (
            (teams.length > 0) ?
                <div className="Team">
                    {teams.map(team => { return <div onClick={()=>this.props.teamName(team)}>{team}</div> })}
                </div> : null
        );
    }
}

export default Team;