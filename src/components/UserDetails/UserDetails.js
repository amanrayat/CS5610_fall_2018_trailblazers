import React , {Component } from 'react'
import UserService from '../../services/UserService'
import {Link} from "react-router-dom";
import "./UserDetail.css"
import Navbar from "../NavBar/Navbar";

export default class UserDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users :[],
            loggedIn : false
        }

    }
    componentDidMount (){
        UserService.findUserByUsername(this.props.match.params.userId).then(result=>{
            UserService.profile().then(result2=>{
                this.setState({
                    users : result.data,
                    loggedIn : result2.length
                })

            })
        })
    }
    componentWillReceiveProps(newProps){
        if(newProps!==this.props){
            UserService.findUserByUsername(this.props.match.params.userId).then(result=>{
                this.setState({users : result.data})
            })
        }
    }
    render(){
        return(
            <div>
                {this.state.users.length>0?
                    <div>
                        <Navbar
                            history={this.props.history}
                            isAuthenticated={this.props.isAuthenticated}
                            userHasAuthenticated={this.props.userHasAuthenticated}
                        />
                        <h3 className={'text-center mt-5'}>Search Results</h3>
                        {this.state.users.map(user => {
                            return (
                                <div key={user._id} className="list-group user-detail mt-4">
                                    <li className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{user.firstName} {user.lastName}</h5>
                                            {this.state.loggedIn ?
                                                <Link to={`/profile/${user._id}`}>
                                                    <small>See Profile</small>
                                                </Link>:
                                                <Link to={`/login`}>
                                                    <small>See Profile</small>
                                                </Link>}
                                        </div>
                                        <p className="mb-1">Username : <i>{user.username}</i></p>
                                    </li>
                                </div>
                            )
                        })
                        }
                    </div>:
                    <div>
                        <div>
                            <Navbar
                                history={this.props.history}
                                isAuthenticated={this.props.isAuthenticated}
                                userHasAuthenticated={this.props.userHasAuthenticated}
                            />
                            <h3 className={'text-center mt-5'}>No Search Results</h3>

                        </div>
                    </div>
                }
            </div>


        )
    }

}