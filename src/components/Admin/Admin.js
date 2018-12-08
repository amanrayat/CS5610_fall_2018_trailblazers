import React from 'react'
import {Redirect, Link} from 'react-router-dom'

import './Admin.css'
import UserService from "../../services/UserService";

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
            userType: 'CUSTOMER',
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            users: [],
            showAlert: false,
            showSuccess: false
        }
    }

    componentWillMount(){
        UserService.profile().then((res) => {
            UserService.findUsersByAdmin(res.data[0]._id).then((subRes) => {
                this.setState({
                    users: subRes.data,
                    adminId: res.data[0]._id,
                    adminName: res.data[0].firstName
                })
            })
        })
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

    trackNumberChanges = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    };

    submit = () => {
        if(this.state.username.length &&
            this.state.firstName.length &&
            this.state.lastName.length &&
            this.state.email.length &&
            this.state.password.length &&
            this.state.confirmPassword.length &&
            this.state.phoneNumber.length &&
            this.state.password === this.state.confirmPassword
        ){
            let newUser = {
                username : this.state.username,
                password : this.state.password,
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                email : this.state.email,
                phoneNo : this.state.phoneNumber,
                type : this.state.userType,
                admin : this.state.adminId,
                __v : 0
            };
            UserService.registerUser(newUser).then((res) => {
                console.log(res.data);
                if(res.data){
                    UserService.findUsersByAdmin(this.state.adminId).then((subRes) => {
                        this.setState({
                            users: subRes.data,
                            username: "",
                            firstName: "",
                            lastName: "",
                            email: "",
                            userType: 'CUSTOMER',
                            phoneNumber: "",
                            password: "",
                            confirmPassword: "",
                            showSuccess: true,
                            showAlert: false
                        })
                    })
                }
                else{
                    this.setState({
                        showAlert: true,
                        showSuccess: false
                    })
                }
            });
        }
    };

    deleteUser = (userId) => {
        UserService.deleteUserById(userId).then((res) => {
            UserService.findUsersByAdmin(this.state.adminId).then((subRes) => {
                this.setState({
                    users: subRes.data
                })
            })
        })
    };

    logout = () => {
        UserService.logoutUser().then((res) => {
            this.props.userHasAuthenticated(false);
            this.props.history.push("/");
        })
    };

    render(){
        return(
            <div className="row mx-0 h-100">
                <div className="col-2 bg-dark">
                    <div className="card-body">
                        <div className="list-group row">
                            <div className="list-group-item bg-dark border-0">
                                <h4 className="text-light text-center">
                                    Welcome {this.state.adminName}
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
                            <div
                                className={"list-group-item text-center text-light bg-dark"}
                                onClick={() => this.logout()}
                            >
                                <h5>
                                    Logout
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
                                            <th scope="col">
                                                <h4>
                                                    Username
                                                </h4>
                                            </th>
                                            <th scope="col">
                                                <h4>
                                                    First Name
                                                </h4>
                                            </th>
                                            <th scope="col">
                                                <h4>
                                                    Last Name
                                                </h4>
                                            </th>
                                            <th scope="col">
                                                <h4>
                                                    Type
                                                </h4>
                                            </th>
                                            <th scope="col"/>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.state.users.map((u, index) =>
                                                (
                                                    <tr>
                                                        <th scope="row">{index+1}</th>
                                                        <td>
                                                            <h5 className="mb-0 mt-1">
                                                                {u.username}
                                                            </h5>
                                                        </td>
                                                        <td>
                                                            <h5 className="mb-0 mt-1">
                                                                {u.firstName}
                                                            </h5>
                                                        </td>
                                                        <td>
                                                            <h5 className="mb-0 mt-1">
                                                                {u.lastName}
                                                            </h5>
                                                        </td>
                                                        <td>
                                                            <h5 className="mb-0 mt-1">
                                                                {u.type}
                                                            </h5>
                                                        </td>
                                                        <td>
                                                            <i
                                                                className="fa fa-times fa-2x"
                                                                aria-hidden="true"
                                                                onClick={() => this.deleteUser(u._id)}
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        }
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
                                    {
                                        this.state.showAlert &&
                                        <div className="form-group row">
                                            <div className="text-danger col-sm-10">
                                                *username or email or phoneNo has already been taken
                                            </div>
                                        </div>
                                    }
                                    {
                                        this.state.showSuccess &&
                                        <div className="form-group row">
                                            <div className="text-success col-sm-10">
                                                *Successfully registered new user
                                            </div>
                                        </div>
                                    }
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
                                        <select
                                            value={this.state.userType}
                                            className="form-control make-inline"
                                            onChange={this.trackUserTypeChanges}
                                        >
                                            <option value="CUSTOMER">Customer</option>
                                            <option value="EVENTPLANNER">Event Planner</option>
                                            <option value="ADMIN">Admin</option>
                                        </select>
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
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Enter Phone Number"
                                            onChange={this.trackNumberChanges}
                                        />
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