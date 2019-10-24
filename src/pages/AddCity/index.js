import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {setField} from '../Create/actions';
// import {clearField} from '../Create/action';

class AddCity extends Component {

    handleChange = (e) => {
        this.props.setField({
            key: e.target.name,
            value: e.target.value
        })
        console.log(e.target.value)
    }

    handleAddCity = () => {

        // this.props.clearField();

        let { history } = this.props;
        history.push({
            pathname: '/add'
        });  
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="city" placeholder="Add City" value={this.props.city} onChange={this.handleChange}></input>
                    <input type="button" value="Add..." onClick={this.handleAddCity}></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.newCity.get("city"),
        citys: state.newCity.get('citys').toJS()
    }
}

const mapDispatchToProps = {
    setField
    // clearField
}


export default  connect(mapStateToProps, mapDispatchToProps)(withRouter(AddCity));
