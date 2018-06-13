import React, { Component } from 'react';
import './YearComponent.css';

class Year extends Component {

    render() {
        console.log(this.props.years)
        const years = this.props.years;
        return (
            <div className="Year">
                <ul>
                    {
                        (years.length > 0) ? years.map(year => {
                            return <li onClick={() => this.props.getYear({ year })} >{year}</li>
                        }) : null
                    }
                </ul>
            </div>
        );

    }
}
export default Year;