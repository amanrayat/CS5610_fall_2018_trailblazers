import React from 'react'
import { Link, Redirect} from 'react-router-dom'

export default class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            routeToLogin: false,
            routeToRegister: false
        }
    }

    setRouteToLogin(){
        this.setState({
            routeToLogin: true
        })
    }

    setRouteToRegister(){
        this.setState({
            routeToRegister: true
        })
    }

    render(){
        if(this.state.routeToLogin){
            return <Redirect to={`/login`}/>
        }
        else if(this.state.routeToRegister){
            return <Redirect to={`/register`}/>
        }
        return (
            <nav className="navbar navbar-expand navbar-dark sticky-top bg-dark">
                <ul className="navbar-nav w-100">
                    <li className="nav-item nav-link col-md-4">
                    </li>
                    <li className="nav-item nav-link col-4 text-center">
                        <a className="navbar-brand" href="#">
                            Beerewery
                        </a>
                    </li>
                    <li className="nav-item nav-link col-md-4 col-8 text-right">
                        <button
                            type="button"
                            className="btn btn-secondary mr-2"
                            onClick={() => this.setRouteToLogin()}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => this.setRouteToRegister()}
                        >
                            Register
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}