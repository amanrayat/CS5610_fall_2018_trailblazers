import React from 'react'
import UserService from "../../services/UserService";

export default class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userSearch : ''
        }
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

    routeToProfile(){
        this.props.history.push("/profile");
    }

    routeToHome(){
        this.props.history.push("/");
    }

    onSearchChange = (e)=> {
        this.setState({userSearch : e.target.value})
    };

    searchUser = ()=>{
        this.props.history.push("/user-detail/" + this.state.userSearch)
    };
    render(){
        return (
            <nav className="navbar navbar-expand navbar-dark sticky-top bg-dark">
                <ul className="navbar-nav w-100">
                    <li className="nav-item nav-link col-md-3">
                        <button
                            type="button"
                            className="btn btn-secondary mr-2"
                            onClick={() => this.routeToHome()}
                        >
                            Home
                        </button>
                    </li>
                    <li className="nav-item nav-link col-3 text-center">
                        <li className="navbar-brand">
                            Beerewery
                        </li>
                    </li>
                    <li>
                        <ul className={'navbar-nav'}>
                            <li className={'nav-item nav-link'}>
                                <div className="col-8">
                                    <input
                                        value={this.state.userSearch}
                                        onChange={this.onSearchChange}
                                        type="text"
                                        placeholder="Search Users"
                                        aria-label="Search"/>
                                </div>
                            </li>
                            <li>
                                <div className="col-2 input-group-btn">
                                    <button
                                        onClick={this.searchUser}
                                        type="button"
                                        className="btn btn-secondary">
                                        <i className="fa fa-search"/>
                                    </button>
                                </div>
                            </li>

                        </ul>
                    </li>
                    {
                        !this.props.isAuthenticated &&
                        <li className="nav-item nav-link col-md-3 col-8 text-right">
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
                        <li className="nav-item nav-link col-md-3 col-8 text-right">
                            <button
                                type="button"
                                className="btn btn-secondary mr-2"
                                onClick={() => this.routeToProfile()}
                            >
                                Profile
                            </button>
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