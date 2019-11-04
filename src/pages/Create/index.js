import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setField } from './actions';
import { add } from './actions';
import { clearField } from './actions';
import { fetchTowns } from '../AddCity/action'
import { fetchCountries } from '../AddCountry/actions'


class Create extends Component {
    componentDidMount(){
        this.props.fetchTowns()
        this.props.fetchCountries()
    }

    handleChange = (e) => {
        this.props.setField({
            key: e.target.name,
            value: e.target.value,
        })
    }
   
    handleAddData = () => {
        this.props.add({
            firstName: this.props.firstName,
            secondName: this.props.secondName,
            lastName: this.props.lastName,
            age: parseInt(this.props.age),
            sex: this.props.gender,
            dateOfBirth: new Date(this.props.dateOfBirth).toUTCString(),
            city: parseInt(this.props.city),
            country: parseInt(this.props.country)
        })

        this.props.clearField();

        let { history } = this.props;
        history.push({
            pathname: '/list'
        });   
    }

    changePath = () => {
        
        let { history } = this.props;
        history.push({
            pathname: '/city'
        }); 
    }

    newPath = () => {
        let { history } = this.props;
        history.push({
            pathname: '/country'
        }); 
    }


    render() {
        return (
            <form>
                <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} value={this.props.firstName} />
                <input type="text" name="secondName" placeholder="Second Name" onChange={this.handleChange} value={this.props.secondName} />
                <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} value={this.props.lastName} />
                <input type="text" name="dateOfBirth" placeholder="Date of Birth" onChange={this.handleChange} value={this.props.dateOfBirth} />
                <input type="number" name="age" placeholder="Age" onChange={this.handleChange} value={this.props.age} />
                <div className="select">
                    <select name="city" onChange={this.handleChange} value={this.props.city}>
                        <option value="" disabled selected>Select your city</option> 
                        {this.props.citys.map((city, i) => (
                            <option key={i} value={city.value}>{city.label}</option>
                       ))}
                       
                    </select>
                    <select name="country" onChange={this.handleChange} value={this.props.country}>
                        <option value="" disabled selected>Select your country</option> 
                        {this.props.countries.map((country, i) => (
                            <option key={i} value={country.value}>{country.label}</option>
                       ))}
                       
                    </select>
                    <input className="addCity" type="button" value="Add..." onClick={this.changePath}/>        
                    <input className="addCountry" type="button" value="Add..." onClick={this.newPath}/>        
                </div>
                <div className="radio">
                    <input type="radio" name="gender" value="m"  checked={this.props.gender === 'm'} onChange={this.handleChange} />
                    <label>M</label>
                    <input type="radio" name="gender" value="f" checked={this.props.gender === 'f'} onChange={this.handleChange} />
                    <label>F</label>
                </div>
                <input className="mainBtn" type="button" value="Add" onClick={this.handleAddData} />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        firstName: state.createForm.get('firstName'),
        secondName: state.createForm.get('secondName'),
        lastName: state.createForm.get('lastName'),
        dateOfBirth: state.createForm.get('dateOfBirth'),
        age: state.createForm.get('age'),
        gender: state.createForm.get('gender'),
        city: state.createForm.get('city'),
        country: state.createForm.get('country'),
        citys: state.newCity.get('citys').toJS(),
        countries: state.newCountry.get('countries').toJS()  
    }
}

const mapDispatchToProps = {
    setField,
    add,
    clearField,
    fetchTowns,
    fetchCountries
}

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(Create));

