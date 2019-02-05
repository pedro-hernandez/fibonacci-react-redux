// src/js/components/Results.jsx

import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { result: state.result, fibPosition: state.fibPosition };
};

const ConnectedResults = ({ fibPosition, result }) => (
    <Fragment>
        <p>Result: {result}</p>
        <p>Position: {fibPosition}</p>
    </Fragment>
)

const Results = connect(mapStateToProps)(ConnectedResults);

export default Results;