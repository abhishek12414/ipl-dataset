import React, { Component } from "react";
import './TeamComponent.css'

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            teams: []
        }
    }

    getTeams(year) {
        fetch(`http://127.0.0.1:8082/api/${year}`).then(res => {
            return res.json();
        }).then(parsedJSON => {
            this.setState({
                isLoaded: true,
                teams: parsedJSON
            });
        }).catch(err => {
            console.log(err);
        })
    }

    componentWillReceiveProps(nextProps){
        this.getTeams(nextProps.year)

    }

    render() {
        const {isLoaded, teams} = this.state;
        return (
            <div className="Team">
                {
                    (isLoaded && teams.length > 0) ? teams.map(team=> {
                        return <div>{team}</div>
                    }) : null
                }
            </div>
        );
    }
}

export default Team;