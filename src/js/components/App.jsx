// src/js/components/App.jsx

import React from 'react';
import Results from './Results.jsx';
import Form from './Form.jsx';

const App = () => (
    <div className='results'>
    <p>Enter the which spot in the Fibonacci sequence you'd like to see, starting at zero.</p>
    <Results />
    <Form />
    </div>
)

export default App;