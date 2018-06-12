import React, { Component, Fragment } from 'react';
import Nav from './component/NavComponent';
import Year from './component/YearComponent';
import Team from './component/TeamComponent';
import Player from './component/PlayerComponent'
import getJson from './component/fetchAPI';

class App extends Component {

    state = {
        years: [],
        selectedYear: null,
        selectedTeam: null
    }

    componentWillMount() {
        getJson(`http://127.0.0.1:8082/api/`).then(years => {
            console.log(years)
            this.setState({ years: years });
        })

    }

    setYear(result) {
        this.setState({
            selectedYear: result.year,
            selectedTeam: null
        })
    }

    setTeam(teamName) {
        this.setState({
            selectedTeam: teamName
        });
    }

    render() {

        const { years, selectedTeam } = this.state;

        return (
            <Fragment>
                <Nav />
                <Year getYear={this.setYear.bind(this)} years={this.state.years} />
                                
                {
                    (years) 
                    ? < Team teamName={this.setTeam.bind(this)} year={this.state.selectedYear} />
                    : null
                }
                {
                    (years.length > 0 && selectedTeam != null)
                        ? <Player year={this.state.selectedYear} teamName={this.state.selectedTeam} />
                        : null
                }

            </Fragment>
        );
    }
}

export default App;