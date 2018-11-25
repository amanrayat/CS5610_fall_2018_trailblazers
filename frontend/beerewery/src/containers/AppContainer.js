import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from "../components/Home/Home";

export default class AppContainer extends React.Component{

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/"
                           render={()=>
                               <Home/>
                           }
                    />
                </Switch>
            </Router>
            )
    }
}