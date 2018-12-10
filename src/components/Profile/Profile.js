import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import UserService from '../../services/UserService';
import Avatar from '@material-ui/core/Avatar';
import {FormControl} from 'react-bootstrap'
import '../../style.css'
import './profile.css'
import Navbar from "../NavBar/Navbar";

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            expanded: null,
            followed: false
        }
    }

    checkIfFollowing = (followers, loggedInId) => {
        console.log(followers);
        for (var i = 0; i < followers.length; i++) {
            console.log(followers[i]._id + ", " + loggedInId);
            if(followers[i]._id === loggedInId) return true;
        }
        return false;
    };

    componentDidMount() {
        if(this.props.match.params.profileId){
            UserService.findUserById(this.props.match.params.profileId).then((res) => {
                UserService.profile().then((res_4) => {
                    if(res.data[0]._id === res_4.data[0]._id){
                        this.props.history.push('/profile')
                    }
                    else{
                        UserService.findFollowersById(res.data[0]._id).then((res_1) => {
                            UserService.findFollowingById(res.data[0]._id).then((res_2) => {
                                UserService.findFavBeerById(res.data[0]._id).then((res_3) => {
                                    this.setState({
                                        user: res.data[0],
                                        currUser: res_4.data[0],
                                        inputFirstName: res.data[0].firstName,
                                        inputLastName: res.data[0].lastName,
                                        inputEmail: res.data[0].email,
                                        inputPhone: res.data[0].phoneNo,
                                        inputPassword: res.data[0].password,
                                        inputUsername: res.data[0].username,
                                        followers: res_1.data,
                                        following: res_2.data,
                                        favBeer: res_3.data,
                                        followed: this.checkIfFollowing(res_1.data, res_4.data[0]._id)
                                    })
                                })
                            })
                        })
                    }
                });
            })
        }
        else{
            UserService.profile().then((res) => {
                UserService.findFollowersById(res.data[0]._id).then((res_1) => {
                    UserService.findFollowingById(res.data[0]._id).then((res_2) => {
                        UserService.findFavBeerById(res.data[0]._id).then((res_3) => {
                            this.setState({
                                user: res.data[0],
                                inputFirstName: res.data[0].firstName,
                                inputLastName: res.data[0].lastName,
                                inputEmail: res.data[0].email,
                                inputPhoneNo: res.data[0].phoneNo,
                                inputPassword: res.data[0].password,
                                inputUsername: res.data[0].username,
                                followers: res_1.data,
                                following: res_2.data,
                                favBeer: res_3.data,
                            })
                        })
                    })
                })
            })
        }
    }

    saveResult = () =>{
        const user = {
            username : this.state.inputUsername,
            password : this.state.inputPassword,
            firstName : this.state.inputFirstName,
            lastName : this.state.inputLastName,
            email : this.state.inputEmail,
            phoneNo : this.state.inputPhoneNo
        };

        UserService.updateUserById(this.state.user._id, user).then(result=>{
            UserService.profile().then((res) => {
                this.setState({
                    user: res.data[0],
                    inputFirstName: res.data[0].firstName,
                    inputLastName: res.data[0].lastName,
                    inputEmail: res.data[0].email,
                    inputPhoneNo: res.data[0].phoneNo,
                    inputPassword: res.data[0].password,
                    inputUsername: res.data[0].username,
                    isEditing : !this.state.isEditing
                });
            })
        })

    };

    editing = () => this.setState({isEditing : !this.state.isEditing});

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    followUser = ()=>{
        if(this.state.followed){
            UserService.unFollowerUser(this.state.currUser._id , this.state.user._id).then(result=>{
                UserService.findFollowersById(this.state.user._id).then(followers=>{
                    console.log(followers)
                    this.setState({
                        followers : followers.data ,
                        followed : false})

                })
            })
        }
        else{
            UserService.followerUser(this.state.currUser._id , this.state.user._id).then(result=>{
                UserService.findFollowersById(this.state.user._id).then(followers=>{
                    console.log(followers)
                    this.setState({
                        followers : followers.data ,
                        followed : true})

                })
            })
        }

    };

    render(){/*
        let followed = this.state.followed;
        console.log("the user id is " , this.state)*/
        return(
            <div>
                <Navbar
                    history = {this.props.history}
                    isAuthenticated = {this.props.isAuthenticated}
                    userHasAuthenticated = {this.props.userHasAuthenticated}
                />
                {
                    this.state.user &&
                    <div className={'row'}>
                        <div className={'col-3 text-center left-panel'}>
                            <div className={'card mt-5 left-panel'}>
                                {!this.state.isEditing ?
                                    <div className={'mx-2'} style={{"width": "90%"}}>
                                        <Avatar className={"rounded-circle card-img-top circle"}>
                                            {this.state.user.firstName.split("")[0]}
                                            {this.state.user.lastName.split("")[0]}
                                        </Avatar>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {this.state.user.firstName} {this.state.user.lastName}
                                            </h5>
                                            <div className="row">
                                                <div className="col-4">
                                                </div>
                                                <div className="col-4 text-center ml-2">
                                                    {
                                                        this.props.match.params.profileId &&
                                                        <button
                                                            onClick={this.followUser}
                                                            className={this.state.followed?'btn btn-danger mx-4 my-4 float-right':
                                                                'follow-btn btn btn-primary mx-4 my-4 float-right'}>
                                                            {this.state.followed ? <div>Un Follow</div> : <div>Follow</div>}
                                                        </button>
                                                    }
                                                </div>

                                            </div>
                                            { !this.props.match.params.profileId &&
                                            <div>
                                                <p className="card-text">User Name : {this.state.user.username}
                                                </p>
                                                <p className="card-text">Email Id : {this.state.user.email}
                                                </p>
                                                <p className="card-text">Phone Number : {this.state.user.phoneNo}
                                                </p>
                                            </div>
                                            }
                                            { !this.props.match.params.profileId &&
                                            <button
                                                onClick={this.editing}

                                                className={'btn btn-primary mt-4'}>Edit
                                            </button>
                                            }

                                        </div>
                                    </div> :
                                    <div className={'mx-2'} style={{"width": "90%"}}>
                                <Avatar className={"rounded-circle card-img-top circle"}>
                                    {this.state.user.firstName.split("")[0]}
                                    {this.state.user.lastName.split("")[0]}
                                </Avatar>
                                <div className="card-body">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">First Name</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.inputFirstName}
                                            placeholder="First Name"
                                            onChange={(e)=>this.setState({inputFirstName : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Last Name</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.inputLastName}
                                            placeholder="Last Name"
                                            onChange={(e)=>this.setState({inputLastName : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Username</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.inputUsername}
                                            placeholder="Username"
                                            onChange={(e)=>this.setState({inputUsername : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Password</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.inputPassword}
                                            placeholder="Password"
                                            onChange={(e)=>this.setState({inputPassword : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Email Id</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.inputEmail}
                                            placeholder="Email Id"
                                            onChange={(e)=>this.setState({inputEmail : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Phone No</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.inputPhoneNo}
                                            placeholder="Phone Number"
                                            onChange={(e)=>this.setState({inputPhoneNo : e.target.value})}
                                        />
                                    </div>
                                    <button
                                        onClick={this.saveResult}
                                        className={'btn btn-profile btn-success'}>Save</button>
                                </div>
                            </div>
                                }
                            </div>
                        </div>
                        <div className={'col-9 mt-5'}>
                            <div className={'row mx-2'}>
                                <div className={'col-6'}>
                                    <h3 className="h3-profile">Profile</h3>
                                </div>
                            </div>
                            <div className={'row mx-2'}>
                                <div className={'col-6'}>
                                    <h5 className={'mb-3 mx-3 headings'}>Following</h5>
                                    <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                                        <ExpansionPanelSummary expandIcon={">"}>
                                            {
                                                this.state.followers.slice(0,3).map(follower=>{
                                                    return(
                                                        <div className={'mx-5 pic-size'}>
                                                            <Avatar className={"rounded-circle card-img-top"}>
                                                                {follower.followerId ? follower.followerId.firstName.split("")[0] :''}
                                                                {follower.followerId ? follower.followerId.lastName.split("")[0]:''}
                                                            </Avatar>
                                                            <p>{follower.followerId ? follower.followerId.firstName:''}</p>
                                                        </div>)
                                                })
                                            }
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            {
                                                this.state.followers.slice(3, this.state.followers.length).map(follower=>{
                                                    return(<div className={'mx-5 pic-size-extended'}>
                                                        <Avatar className={"rounded-circle card-img-top"}>
                                                            {follower.followerId.firstName.split("")[0]}
                                                            {follower.followerId.lastName.split("")[0]}
                                                        </Avatar>
                                                        <p>{follower.followerId.firstName}</p>
                                                    </div>)
                                                })
                                            }
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </div>
                                <div className={'col-6'}>
                                    <h5 className={'mb-3 mx-3 headings'}>Follower</h5>
                                    <ExpansionPanel expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                                        <ExpansionPanelSummary expandIcon={">"}>
                                            {
                                                this.state.following.slice(0, 3).map(follow=>{
                                                    return(<div className={'mx-5 pic-size'}>
                                                        <div className={'align-left'}>
                                                            <Avatar className={"rounded-circle card-img-top"}>
                                                                {follow.userId.firstName.split("")[0]}
                                                                {follow.userId.lastName.split("")[0]}
                                                            </Avatar>
                                                            <p>{follow.userId.firstName}</p>
                                                        </div>

                                                    </div>)
                                                })
                                            }
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            {
                                                this.state.following.slice(3, this.state.followers.length).map(follower=>{
                                                    return(<div className={'mx-5 pic-size-extended'}>
                                                        <Avatar className={"rounded-circle card-img-top"}>
                                                            {follower.userId.firstName.split("")[0]}
                                                            {follower.userId.lastName.split("")[0]}
                                                        </Avatar>
                                                        <p >{follower.userId.firstName}</p>
                                                    </div>)
                                                })
                                            }
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </div>
                            </div>

                            <div className={'row mx-2 mt-5'}>
                                <div className={'col-6'}>
                                    <h5 className={'mb-3 mx-3 headings'}>Fav Beer</h5>
                                    <ExpansionPanel expanded={this.state.expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                                        <ExpansionPanelSummary expandIcon={">"}>
                                            {
                                                this.state.favBeer.slice(0, 3).map(follow=>{
                                                    return(<div className={'mx-5 pic-size'}>
                                                        <div className={'align-left'}>
                                                            <Avatar className={"rounded-circle card-img-top"}>
                                                                {follow.beerId.name.split("")[0]}
                                                            </Avatar>
                                                            <p>{follow.beerId.name}</p>
                                                        </div>

                                                    </div>)
                                                })
                                            }
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            {
                                                this.state.followers.slice(3, this.state.followers.length).map(follower=>{
                                                    return(<div className={'mx-5 pic-size-extended'}>
                                                        <img className="rounded-circle card-img-top" src={follower.image} alt="Card image cap"/>
                                                        <span>{follower.firstName}</span>
                                                    </div>)
                                                })
                                            }
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </div>
                                <div className={'col-6'}>

                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
        )
    }

};