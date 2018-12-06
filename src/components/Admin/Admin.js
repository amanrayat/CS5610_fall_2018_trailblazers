import React from 'react'
import {Redirect, Link} from 'react-router-dom'

import './Admin.css'

export default class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            manageUsers: true,
            createUser: false,
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            user: 1,
            password: "",
            confirmPassword: ""
        }
    }

    selectManageUsers = () => {
        if(!this.state.manageUsers){
            this.setState({
                manageUsers: true,
                createUser: false
            })
        }
    };

    selectCreateUser = () => {
        if(!this.state.createUser){
            this.setState({
                manageUsers: false,
                createUser: true
            })
        }
    };

    trackUsernameChanges = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    trackFirstNameChanges = (e) => {
        this.setState({
            firstName: e.target.value
        })
    };

    trackLastNameChanges = (e) => {
        this.setState({
            lastName: e.target.value
        })
    };

    trackEmailChanges = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    trackUserTypeChanges = (e) => {
        this.setState({
            user: e.target.value
        })
    };

    trackPasswordChanges = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    trackConfirmPasswordChanges = (e) => {
        this.setState({
            confirmPassword: e.target.value
        })
    };

    submit = () => {
        if(this.state.username.length &&
            this.state.firstName.length &&
            this.state.lastName.length &&
            this.state.email.length &&
            this.state.password.length &&
            this.state.confirmPassword.length){
            console.log(1)
        }
    };

    render(){
        return(
            <div className="row mx-0 h-100">
                <div className="col-2 bg-dark">
                    <div className="card-body">
                        <div className="list-group row">
                            <div className="list-group-item bg-dark border-0">
                                <h4 className="text-light text-center">
                                    Welcome Admin
                                </h4>
                            </div>
                            <div
                                className={"list-group-item text-center text-light " + (this.state.manageUsers ? "bg-primary" : "bg-dark")}
                                onClick={this.selectManageUsers}
                            >
                                <h5>
                                    Manage Users
                                </h5>
                            </div>
                            <div
                                className={"list-group-item text-center text-light " + (this.state.createUser ? "bg-primary" : "bg-dark")}
                                onClick={this.selectCreateUser}
                            >
                                <h5>
                                    Create User
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    {
                        this.state.manageUsers &&
                            <div className="row mt-5">
                                <div className="col-2">
                                </div>
                                <div className="col-8 ">
                                    <table className="table table-striped table-light border-1 text-center">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Username</th>
                                            <th scope="col"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>
                                                <h5 className="mb-0 mt-1">
                                                    Mark
                                                </h5>
                                            </td>
                                            <td>
                                                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>
                                                <h5 className="mb-0 mt-1">
                                                    Mark
                                                </h5>
                                            </td>
                                            <td>
                                                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    }
                    {
                        this.state.createUser &&
                            <div className="row mt-5">
                                <div className="col-2">

                                </div>
                                <div className="col-8 container">
                                    <h3 className="text-center">
                                        Register New User
                                    </h3>
                                    <div className="form-group row">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder="Enter Username"
                                            onChange={this.trackUsernameChanges}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstname"
                                            placeholder="Enter First Name"
                                            onChange={this.trackFirstNameChanges}
                                        />
                                    </div>

                                    <div className="form-group row">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastname"
                                            placeholder="Enter Last Name"
                                            onChange={this.trackLastNameChanges}
                                        />
                                    </div>


                                    <div className="form-group row">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter Email"
                                            onChange={this.trackEmailChanges}
                                        />
                                    </div>

                                    <div className="form-group row">
                                        <select
                                            value={this.state.user}
                                            className="form-control make-inline"
                                            onChange={this.trackUserTypeChanges}
                                        >
                                            <option value="1">User</option>
                                            <option value="2">Event Planner</option>
                                            <option value="3">Admin</option>
                                        </select>
                                    </div>

                                    <div className="form-group row">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter Password"
                                            onChange={this.trackPasswordChanges}
                                        />
                                    </div>


                                    <div className="form-group row">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            placeholder="Confirm Password"
                                            onChange={this.trackConfirmPasswordChanges}
                                        />
                                    </div>

                                    <div className="form-group text-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={this.submit}
                                        >
                                            Add New User
                                        </button>
                                    </div>
                                </div>
                                <div className="col-2">

                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}