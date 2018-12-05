import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import AppContainer from "./containers/AppContainer";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Route path='/' component={AppContainer}/>
        </Router>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));