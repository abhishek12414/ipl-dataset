import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return(
            <div className="Nav">
                <ul>
                    <li> <a href="/">IPL</a></li>
                </ul>
            </div>
        );
    }
}

export default Nav;