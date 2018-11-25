import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/NavBar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {
    return (
     <Home/>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));