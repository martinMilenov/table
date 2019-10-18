import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Grid extends Component {
    render() {
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            {this.props.headers && Array.isArray(this.props.headers) && this.props.headers.map((header, i) => (
                                <th key={i}>{header.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data && Array.isArray(this.props.data) && this.props.data.map((item, i1) => (
                            <tr key={i1}>
                                {this.props.headers && Array.isArray(this.props.headers) && this.props.headers.map((header, i2) => (
                                    <td key={i2}>{this.props.dataMapper[header.value] 
                                        ? this.props.dataMapper[header.value](item[header.value]) 
                                        : item[header.value]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </div>

        )

    }
}
Grid.defaultProps = {
    users: [],
    headers: [],
    dataMapper: {}
}
Grid.propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
    dataMapper: PropTypes.object.isRequired
}

export default Grid;

