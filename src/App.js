import React, { Component, Fragment } from 'react';
import Nav from './component/NavComponent';
import Year from './component/YearComponent';
import Team from './component/TeamComponent';
import Player from './component/PlayerComponent'
import PlayerProfile from './component/PlayerProfileComponent'
import getJson from './component/fetchAPI';
import './App.css';

class App extends Component {

    state = {
        years: [],
        selectedYear: null,
        selectedTeam: null,
        selectedPlayer: null
    }

    componentWillMount() {
        getJson(`http://127.0.0.1:8082/api/`).then(years => {
            this.setState({ years: years });
        })
    }

    setYear(result) {
        this.setState({
            selectedYear: result.year,
            selectedTeam: null,
            selectedPlayer: null
        })
    }

    setTeam(teamName) {
        this.setState({
            selectedTeam: teamName,
            selectedPlayer: null
        });
    }

    setPlayer(playerName) {
        this.setState({
            selectedPlayer: playerName.player
        });
    }

    render() {

        const { years, selectedYear, selectedTeam, selectedPlayer } = this.state;

        let plotWins = null;
        if (!this.state.selectedYear) {
            plotWins = (
                <div className="playedMatches">
                    {   years.map((year, index) => {
                            return <div key={index}> <strong>{year.year}</strong> : <i>{year.matches}</i></div>
                        })
                    }
                </div>)
        }

        const playedYears = years.map(year => {
            return year.year;
        })

        return (
            <Fragment>
                <Nav />

                <Year getYear={this.setYear.bind(this)} years={playedYears} />
                {plotWins}
                {
                    (years)
                        ? < Team teamName={this.setTeam.bind(this)} year={selectedYear} />
                        : null
                }
                {
                    (years.length > 0 && selectedTeam !== null && selectedTeam !== 'No Result')
                        ? <Player onPlayerClicked={this.setPlayer.bind(this)} year={selectedYear} teamName={selectedTeam} />
                        : null
                }

                {
                    (years.length > 0 && selectedTeam !== null && selectedTeam !== 'No Result' && selectedPlayer !== null)?
                    <PlayerProfile info={[ selectedYear, selectedTeam, selectedPlayer] }/> : null
                }
                
            </Fragment>
        );
    }
}

export default App;