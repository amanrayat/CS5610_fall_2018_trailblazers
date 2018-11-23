import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import Login from './components/Login/Login'

function App() {
    return (
     <Login/>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));