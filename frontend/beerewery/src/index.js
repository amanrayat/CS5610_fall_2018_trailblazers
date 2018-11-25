import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
    return (
     <Home/>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));