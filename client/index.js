/*
    ./client/index.js
    which is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

console.log("hello from the webpack entry file!")
ReactDOM.render(<App />, document.getElementById('root'));
