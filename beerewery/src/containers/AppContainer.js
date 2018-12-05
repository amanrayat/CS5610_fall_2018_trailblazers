import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from "../components/Home/Home";
import SearchResult from "../components/SearchResult/SearchResult";
import BeerDetail from "../components/BeerDetail/BeerDetail";
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'

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
                    <Route path='/search-results' render={(props) => (
                        <SearchResult {...props}/>
                    )}/>
                    <Route path='/beer/:beerId' render={(props) => (
                        <BeerDetail {...props}/>
                    )}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                </Switch>
            </Router>
            )
    }
}