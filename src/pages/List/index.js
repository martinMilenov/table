import React, {Component} from "react";
import Grid from '../../components/Grid'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetch, get } from './actions';
import { fetchTowns } from '../AddCity/action'
import { fetchCountries } from '../AddCountry/actions';

const dataMapper = {
    gender: (value) => { return value==='m' ? 'Male' : 'Female'  },
    dateOfBirth: (value) => {return `${value.getFullYear()}-${value.getMonth()+1}-${value.getDate()}`}
}

class List extends Component {
    componentDidMount() {
        this.props.fetch(); // will get all the towns. try it out ;)
        // this.props.get({townId: 5}); // will get only one town
        this.props.fetchTowns();
        this.props.fetchCountries();
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
                    id: 7
                },
                {
                    label: "Country",
                    value: 'country',
                    id: 8
                }

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
// nachin 1
        const persons = this.props.persons.map((person) => {
            const town = this.props.citys.find(grad => {
                return grad.id === person.city
            });
            const country = this.props.countries.find(country => {
                return country.id === person.country
            })
            return { ...person, city: town ? town.label : person.city, country: country ? country.label : person.country };
        });
// nachin 2
        // let cities = {};
        // this.props.citys.forEach(city => {
        //     cities[city.id] = city;
        // })
        // const persons = this.props.persons.map((person) => {
        //     return { ...person, city: cities[person.city] ? cities[person.city].label : person.city };
        // })

        return ( 
        <div className="row">
            <Grid data = {persons} headers = {this.state.headers}
                dataMapper={dataMapper} 
            /> 
            <input className="list-btn" type="button" value="Add" onClick={this.handleAddtoList}/>
        </div >
        );
    }
}

const mapStateToProps =(state) => {
    
    return {
        persons: state.list.get('persons').toJS(),
        citys: state.newCity.get('citys').toJS(),
        countries: state.newCountry.get('countries').toJS()
    };
}

const mapDispatchToProps = {
    fetch,
    get,
    fetchTowns,
    fetchCountries
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List));