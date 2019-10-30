import React, {Component} from "react";
import Grid from '../../components/Grid'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetch, get } from './actions';

const dataMapper = {
    gender: (value) => { return value==='m' ? 'Male' : 'Female'  },
    dateOfBirth: (value) => {return `${value.getFullYear()}-${value.getMonth()+1}-${value.getDate()}`}
}

class List extends Component {
    componentDidMount() {
        // this.props.fetch(); // will get all the towns. try it out ;)
        this.props.get({townId: 2}); // will get only one town
    }
    constructor(props) {
        super(props);
        this.state = {

            headers: [{
                    label: "First Name",
                    value: 'firstName',
                    id: 1
                },
                {
                    label: "Second Name",
                    value: 'secondName',
                    id: 2
                },
                {
                    label: "Last Name",
                    value: 'lastName',
                    id: 3
                },

                {
                    label: "Date of Birth",
                    value: 'dateOfBirth',
                    id: 4
                },
                {
                    label: "Age",
                    value: 'age',
                    id: 5
                },
                {
                    label: "Gender",
                    value: 'gender',
                    id: 6
                },
                {
                    label: "City",
                    value: 'city',
                    id: 6
                },

            ]
        }; 
    }

    handleAddtoList = () => {
        let { history } = this.props;
        history.push({
            pathname: '/add'
        });
        
    }

    render() {
        return ( 
        <div className="row">
            <Grid data = {this.props.users} headers = {this.state.headers}
                dataMapper={dataMapper} 
            />  
            <input className="list-btn" type="button" value="Add" onClick={this.handleAddtoList}/>
        </div >
        );
    }
}

const mapStateToProps =(state) => {
    return {
        users: state.list.get('users').toJS(),
    };
}

const mapDispatchToProps = {
    fetch,
    get
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List));