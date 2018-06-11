import React, { Component } from 'react';
import './YearComponent.css';
import UniqueId from 'react-html-id';

class Year extends Component {

    constructor(props) {
        super(props);
        UniqueId.enableUniqueIds(this);
    }

    render() {
        const years = this.props.years;
        return (
            <div>
                <div className="Year">
                    <ul>
                        {
                            (years.length > 0) ? years.map(year => {
                                return <li onClick={() => this.props.getYear({ year })} >{year}</li>
                            }) : null
                        }
                    </ul>
                </div>
            </div>
        );

    }
}
export default Year;