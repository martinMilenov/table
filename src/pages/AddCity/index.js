import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {changeField} from './action';
import {addCity} from './action';

class AddCity extends Component {

    handleChange = (e) => {
      this.props.changeField({
        key: e.target.name,
        value: e.target.value
      })
    }
    

    handleAddCity = () => {

        this.props.addCity({
            name: this.props.city
        })

        let { history } = this.props;
        history.push({
            pathname: '/add'
        });  
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="city" placeholder="Add City" onChange={this.handleChange} value={this.props.city}></input>
                    <input type="button" value="Add..." onClick={this.handleAddCity}></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.newCity.get("city")
    }
}

const mapDispatchToProps = {
    changeField,
    addCity,  
}


export default  connect(mapStateToProps, mapDispatchToProps)(withRouter(AddCity));
