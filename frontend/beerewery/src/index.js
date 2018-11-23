import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {
    return (
     <Register/>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));