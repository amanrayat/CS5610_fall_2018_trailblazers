import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import UserService from '../../services/UserService';
import Avatar from '@material-ui/core/Avatar';
import {FormControl} from 'react-bootstrap'
import '../../style.css'
import './profile.css'

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userId : '5c0b29f5718079001699dacc',
            currUser : "5c0b29f5718079001699dacc" ,
            expanded: null,
            isEditing : false,
            username : "",
            password : "",
            firstName : "",
            lastName : "",
            email : "",
            phoneNo : 8574246016,
            favBeer : [{
                beerId: {
                    name: "Golden Ale",
                }}],
            followers :
                [{
                followerId : {
                    firstName : "Aman",
                    lastName : "Rayat",
                }}
            ],
            following : [{
                userId : {
                    firstName : "Aman",
                    lastName : "Rayat",
                }

            }]
        }
    }

    async componentDidMount() {
        const user = await UserService.findUserById(this.state.userId);
        const followers = await UserService.findFollowersById(this.state.userId);
        const following = await UserService.findFollowingById(this.state.userId);
        const favBeer = await UserService.findFavBeerById(this.state.userId);
        this.setState({
            following : followers.data,
            followers : following.data,
            favBeer : favBeer.data,
            username : user.data[0].username,
            password : user.data[0].password,
            firstName : user.data[0].firstName,
            lastName : user.data[0].lastName,
            email : user.data[0].email,
            phoneNo : user.data[0].phoneNo
        })
    }

    saveResult = () =>{
        const user = {
            username : this.state.username,
            password : this.state.password,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            phoneNo : this.state.phoneNo
        };

        UserService.updateUserById(this.state.currUser , user).then(result=>{
            this.setState({isEditing : !this.state.isEditing});
        })

    };

    editing = () => this.setState({isEditing : !this.state.isEditing});

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render(){
        var followed = null;
        console.log("the user id is " , this.state)
        return(
            <div className={'row'}>
                <div className={'col-3 text-center left-panel'}>
                    <div className={'card mt-5 left-panel'}>
                        {!this.state.isEditing ?
                            <div className={'mx-2'} style={{"width": "90%"}}>
                                <Avatar className={"rounded-circle card-img-top circle"}>
                                    {this.state.firstName.split("")[0]}
                                    {this.state.lastName.split("")[0]}
                                </Avatar>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {this.state.firstName} {this.state.lastName}
                                    </h5>
                                    <p className="card-text">User Name :
                                        {this.state.username}
                                    </p>
                                    <p className="card-text">Email Id :
                                        {this.state.email}
                                    </p>
                                    <p className="card-text">Phone Number :
                                        {this.state.phoneNo}
                                    </p>
                                    {this.state.currUser===this.state.userId ?
                                        <button
                                            onClick={this.editing}
                                            className={'btn btn-profile btn-primary'}>Edit</button>:
                                        <div/>
                                    }
                                </div>
                            </div> :
                            <div className={'mx-2'} style={{"width": "90%"}}>
                                <Avatar className={"rounded-circle card-img-top circle"}>
                                    {this.state.firstName.split("")[0]}
                                    {this.state.lastName.split("")[0]}
                                </Avatar>
                                <div className="card-body">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">First Name</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.firstName}
                                            placeholder="First Name"
                                            onChange={(e)=>this.setState({firstName : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Last Name</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.lastName}
                                            placeholder="Last Name"
                                            onChange={(e)=>this.setState({lastName : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Username</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.username}
                                            placeholder="Username"
                                            onChange={(e)=>this.setState({username : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Password</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.password}
                                            placeholder="Password"
                                            onChange={(e)=>this.setState({password : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Email Id</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.email}
                                            placeholder="Email Id"
                                            onChange={(e)=>this.setState({email : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Phone No</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.phoneNo}
                                            placeholder="Phone Number"
                                            onChange={(e)=>this.setState({phoneNo : e.target.value})}
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
                        <div className={'col-6'}>
                            {this.state.currUser!==this.state.userId?
                                <button className={'btn btn-profile btn-primary mx-4 my-4 float-right'}>Follow</button>:<div></div>
                            }
                        </div>
                    </div>
                    <div className={'row mx-2'}>
                        <div className={'col-6'}>
                            <h5 className={'mb-3 mx-3 headings'}>Following</h5>
                            <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                                <ExpansionPanelSummary expandIcon={">"}>
                                    {
                                        this.state.followers.slice(0, 3).map(follower=>{
                                            return(
                                                <div className={'mx-5 pic-size'}>
                                                    <Avatar className={"rounded-circle card-img-top"}>
                                                        {follower.followerId ? follower.followerId.firstName.split("")[0] :''}
                                                        {follower.followerId ? follower.followerId.lastName.split("")[0]:''}
                                                    </Avatar>
                                                    <p className={'text-center'}>{follower.followerId ? follower.followerId.firstName:''}</p>
                                                </div>)
                                        })
                                    }
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    {
                                        this.state.followers.slice(3, this.state.followers.length).map(follower=>{
                                            if(follower.followerId._id===this.state.currentUser){
                                                followed=true;
                                            }
                                            return(<div className={'mx-5 pic-size-extended'}>
                                                <Avatar className={"rounded-circle card-img-top"}>
                                                    {follower.followerId.firstName.split("")[0]}
                                                    {follower.followerId.lastName.split("")[0]}
                                                </Avatar>
                                                <p className={'text-center'}>{follower.followerId.firstName}</p>
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
                                                    <p className={'text-center'}>{follow.userId.firstName}</p>
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
                                                <p className={'text-center'}>{follower.userId.firstName}</p>
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
                                                    <p className={'text-center'}>{follow.beerId.name}</p>
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
                                                <p className={'text-center'}>{follower.firstName}</p>
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
        )
    }

};