import React, { Component, Fragment } from 'react';
import './PlayerProfileComponent.css';
import getJson from './fetchAPI';

class PlayerProfile extends Component {

    state = {
        year: null,
        team: null,
        playerProfile: null
    }

    componentWillMount() {
        this.getPlayerProfile(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.getPlayerProfile(nextProps);
    }

    getPlayerProfile(propsInfo) {
        let props = propsInfo.info;

        getJson(`http://127.0.0.1:8082/api/${props[0]}/${props[1]}/${props[2]}`)
            .then(playerProfile => {
                if(playerProfile !== null)
                    this.setState({ year: props[0], team: props[1], playerProfile: playerProfile })
                else
                    this.setState({playerProfile: null})
            })
    }

    render() {
        const { playerProfile } = this.state;
        return (
            (playerProfile)?
            <Fragment>
            <div className="divPlayer"> Players Profile {playerProfile.name} ({this.state.year})</div>
            <div className="PlayerProfile">
                <h1> {playerProfile.name}</h1>
                <div className='stats'>
                    <p><span>Runs </span><span> {playerProfile.runs}</span></p>
                    <p><span>Six </span><span> {playerProfile.six}</span></p>
                    <p><span>Four </span><span> {playerProfile.four}</span></p>
                    <p><span>Dismiss </span><span> {playerProfile.dismiss}</span></p>
                    <p><span>Caught </span><span> {playerProfile.caught}</span></p>
                    <p><span>Bowled </span><span> {playerProfile.bowled}</span></p>
                    <p><span>Run Out </span><span> {playerProfile.runout}</span></p>
                </div>
            </div></Fragment>:null
            )
    }
}

export default PlayerProfile;