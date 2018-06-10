import React, { Component } from 'react';
import './HomeComponent.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            years: [],
            isLoaded: true
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData(){
        fetch('http://127.0.0.1:8082/api/')
        .then(res=>{return res.json();})
        .then(parsedJSON => {
            console.log(parsedJSON);
            
            this.setState({            
                data: parsedJSON.map(result=>result.year),
                isLoaded: false
            })
        }).catch(error =>{
            console.log(error);
        });
    }

    render() {
        const {isLoaded, years} = this.state;
        return(
            <div className="Home">
            <ul>
                { (!isLoaded && years.length >0) ?  years.map(year=>{
                    return <li>{year}</li>}) : null
                }
            </ul>
            </div>
        )
    }
}

export default Home;