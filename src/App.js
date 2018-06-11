import React, { Component, Fragment } from 'react';
import Nav from './component/NavComponent';
import Year from './component/YearComponent';
import Team from './component/TeamComponent';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            years: [],
            isLoaded: false,
            selectedYear: null,
        }
    }

    componentWillMount() {
        this.getData();
    }

    getData(){
        fetch('http://127.0.0.1:8082/api/')
        .then(res=>{return res.json();})
        .then(parsedJSON => {
            this.setState({            
                years: parsedJSON,
                isLoaded: true
            })
        }).catch(error =>{
            console.log(error);
        });
    }

    setYear(result){
        this.setState({
            selectedYear: result.year
        })
    }
    
    render() {
        return (
            <Fragment>
                <Nav />
                <Year getYear = {this.setYear.bind(this)} years={this.state.years} />
                <Team year={this.state.selectedYear}/>
            </Fragment>
        );
    }
}

export default App;