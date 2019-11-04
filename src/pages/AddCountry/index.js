import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateField } from './actions';
import { addCountry } from './actions';

class AddCountry extends Component {

    handleAddCountry = () => {
        this.props.addCountry({
            name: this.props.country
        })
        let { history } = this.props;
        history.push({
            pathname: '/add'
        });  
    }

    handleChange = (e) => {
        this.props.updateField({
            key: e.target.name,
            value: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="country" placeholder="Add Country" onChange={this.handleChange} value={this.props.country}></input>
                    <input type="button" value="Add..." onClick={this.handleAddCountry}></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       country: state.newCountry.get('country')
    }
}

const mapDispatchToProps = {
   updateField,
   addCountry
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddCountry));
