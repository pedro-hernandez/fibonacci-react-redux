// src/js/components/App.jsx

import React from 'react';
import Results from './Results.jsx';
import Form from './Form.jsx';

const App = () => (
    <div>
        <h1 className="title">Fibonacci Finder</h1>
        <div className="instructions">Enter the position in the Fibonacci sequence you'd like to see below, greater than zero and where zero is the first spot. (1 = 0, 2 = 1, 3 = 1, 4 = 2, etc.)</div>
        <Form />
        <Results />
    </div>
)

export default App;