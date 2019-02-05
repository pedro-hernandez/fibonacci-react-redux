// src/js/components/Form.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFibPosition } from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        getFibPosition: number => dispatch(getFibPosition(number))
    };
}

const mapStateToProps = state => {
    return { fibArr: state.fibArr, fibPosition: state.fibPosition };
};

class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            fibPosition: 0
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: parseInt(event.target.value)
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
        const { fibPosition } = this.state;
        console.log(fibPosition);
        this.props.getFibPosition(fibPosition);
    }

    render() {
        const { fibPosition } = this.state;
        return (
            < form onSubmit={this.handleSubmit} >
                <label htmlFor="number">Number</label>
                <input
                    type="number"
                    id="fibPosition"
                    value={fibPosition}
                    onChange={this.handleChange}
                />
                <button type="submit">
                    Get Number
            </button>
            </form >
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
