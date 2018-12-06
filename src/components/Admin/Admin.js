import React from 'react'
import {Redirect} from 'react-router-dom'

import './Admin.css'

export default class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            manageUsers: true,
            createUser: false
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
                                    <table className="table table-striped table-light border-1">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    }
                    {
                        this.state.createUser &&
                            <div>
                                Create USers
                            </div>
                    }
                </div>
            </div>
        )
    }
}