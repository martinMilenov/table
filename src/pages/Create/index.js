import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setField} from './actions';


class Create extends Component {
    
    handleChange = (e) => {
        // this.setState({ [e.target.name]: e.target.value, selectOption: e.target.value })
        this.props.setField({
            key: e.target.name,
            value: e.target.value,
        })
        // console.log(e.target.value)
    }
   
    handleAddData = () => {
        let { history } = this.props;
        history.push({
            pathname: '/list'
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
                <div>
                    <input type="radio" name="gender" value="m"  checked={this.props.gender === 'm'} onChange={this.handleChange} />
                    <label>M</label>
                    <input type="radio" name="gender" value="f" checked={this.props.gender === 'f'} onChange={this.handleChange} />
                    <label>F</label>
                </div>
                <input type="button" value="Add" onClick={this.handleAddData} />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        firstName: state.createForm.firstName,
        secondName: state.createForm.secondName,
        lastName: state.createForm.lastName,
        dateOfBirth: state.createForm.dateOfBirth,
        age: state.createForm.age,
        gender: state.createForm.gender 
        
    }
}

const mapDispatchToProps = {
    setField
}

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(Create));
// export default Create;
