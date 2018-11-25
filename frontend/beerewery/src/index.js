import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
    return (
     <Home/>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));