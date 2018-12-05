import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import AppContainer from "./containers/AppContainer";

function App() {
    return (
     <AppContainer/>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));