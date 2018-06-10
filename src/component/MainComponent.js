import React, {Component} from 'react';
import Nav from './NavComponent';
import Home from './HomeComponent'

class Main extends Component {

    render() {
        return (
            <div>
                <Nav />
                <Home />
            </div>
        );
    }
}

export default Main;