import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setField } from './actions';
import { add } from '../List/actions';
import { clearField } from './actions';
class Create extends Component {
    
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
            dateOfBirth: new Date(this.props.dateOfBirth),
            age: this.props.age,
            city: this.props.city,
            gender: this.props.gender
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
                        <option value="" disabled selected>Select your option</option> 
                        {this.props.citys.map((city, i) => (
                            <option key={i}>{city.label}</option>
                       ))}
                       
                    </select>
                    <input className="addCity" type="button" value="Add..." onClick={this.changePath}/>        
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
        citys: state.newCity.get('citys').toJS(),  
    }
}

const mapDispatchToProps = {
    setField,
    add,
    clearField,

}

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(Create));

