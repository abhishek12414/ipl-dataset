import React, { Component } from 'react';
import './Years.css';

class Year extends Component {

    render() {
        const years = this.props.years;
        return (
            <div className="Year">
                <ul>
                    {
                        (years.length > 0) ? years.map((year, index) => {
                            return <li key={index} onClick={() => this.props.getYear({ year })} >{year}</li>
                        }) : null
                    }
                </ul>
            </div>
        );

    }
}
export default Year;