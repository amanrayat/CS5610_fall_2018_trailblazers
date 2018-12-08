import React from 'react'
import { Link, Redirect} from 'react-router-dom'
import UserService from "../../services/UserService";

export default class Navbar extends React.Component{

    constructor(props){
        super(props);
    }

    routeToLogin(){
        this.props.history.push("/login");
    }

    routeToRegister(){
        this.props.history.push("/register");
    }

    routeToLogout(){
        UserService.logoutUser().then((res) => {
            this.props.userHasAuthenticated(false);
            this.props.history.push("/");
        });
    }

    render(){
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
                    {
                        !this.props.isAuthenticated &&
                        <li className="nav-item nav-link col-md-4 col-8 text-right">
                            <button
                                type="button"
                                className="btn btn-secondary mr-2"
                                onClick={() => this.routeToLogin()}
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => this.routeToRegister()}
                            >
                                Register
                            </button>
                        </li>
                    }
                    {
                        this.props.isAuthenticated &&
                        <li className="nav-item nav-link col-md-4 col-8 text-right">
                            <button
                                type="button"
                                className="btn btn-secondary mr-2"
                                onClick={() => this.routeToLogout()}
                            >
                                Logout
                            </button>
                        </li>
                    }
                </ul>
            </nav>
        );
    }
}